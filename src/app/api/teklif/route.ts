import { NextRequest, NextResponse } from 'next/server';
import { QuoteFormSchema } from '@/lib/validation';
import { Resend } from 'resend';
import { SITE } from '@/lib/site-config';
import { estimatePrice, PriceInput } from '@/lib/pricing';

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60000;

// Simple in-memory cache for IP rate limiting
const ipCache = new Map<string, { count: number; expiresAt: number }>();

function cleanOldCache() {
  const now = Date.now();
  for (const [ip, data] of ipCache.entries()) {
    if (now > data.expiresAt) {
      ipCache.delete(ip);
    }
  }
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (m) => {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return m;
    }
  });
}

function maskPhone(phone: string): string {
  const clean = phone.replace(/\s+/g, '');
  if (clean.length >= 7) {
    const start = clean.slice(0, clean.length - 7);
    const end = clean.slice(clean.length - 3);
    return `${start}****${end}`;
  }
  return '***-***-**';
}

function calculateServerEstimate(rooms: string, elevator: string, fromDistrict: string, toDistrict: string) {
  const isIntercity = fromDistrict.includes('Şehirlerarası') || toDistrict.includes('Şehirlerarası');
  const isDistrict = fromDistrict !== 'Merkez' || toDistrict !== 'Merkez';
  
  const distanceType: PriceInput['distanceType'] = isIntercity 
    ? 'sehirlerarasi' 
    : (isDistrict ? 'ilceler' : 'sehirici');

  const input: PriceInput = {
    rooms: (['1+1', '2+1', '3+1', '4+1+', 'ofis'].includes(rooms) ? rooms : '3+1') as PriceInput['rooms'],
    fromFloor: 3,
    toFloor: 3,
    fromElevator: elevator === 'evet',
    toElevator: elevator === 'evet',
    distanceType,
    packing: true,
    carpentry: true,
    storage: false
  };

  return estimatePrice(input);
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    cleanOldCache();
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');
    
    const now = Date.now();
    const ipData = ipCache.get(ip);
    
    if (!ipData || now > ipData.expiresAt) {
      ipCache.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    } else {
      if (ipData.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { ok: false, message: 'Çok fazla istek gönderdiniz. Lütfen bir dakika sonra tekrar deneyin.' },
          { status: 429 }
        );
      }
      ipData.count++;
    }

    // 2. Parse request body
    const body = await req.json().catch(() => ({}));

    // 3. Honeypot check (website must be empty)
    if (body.website && body.website.trim().length > 0) {
      console.warn('BOT_DETECTION: Honeypot filled by bot:', body.website);
      return NextResponse.json({ ok: true, estimate: { min: 20000, max: 25000 } });
    }

    // 4. Server-side validation using Zod
    const validationResult = QuoteFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const firstErrorKey = Object.keys(fieldErrors)[0];
      const errorMessage = (fieldErrors as Record<string, string[] | undefined>)[firstErrorKey]?.[0] || 'Lütfen bilgilerinizi kontrol edin.';
      
      return NextResponse.json(
        { ok: false, message: errorMessage, errors: fieldErrors },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;
    const referrer = req.headers.get('referer') || '/teklif-al';
    const timestamp = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
    const est = calculateServerEstimate(leadData.rooms, leadData.elevator, leadData.fromDistrict, leadData.toDistrict);

    // Escape variables for HTML template
    const nameEscaped = escapeHtml(leadData.name);
    const phoneEscaped = escapeHtml(leadData.phone);
    const fromDistrictEscaped = escapeHtml(leadData.fromDistrict);
    const toDistrictEscaped = escapeHtml(leadData.toDistrict);
    const roomsEscaped = escapeHtml(leadData.rooms);
    const referrerEscaped = escapeHtml(referrer);
    const timestampEscaped = escapeHtml(timestamp);

    // 5. Send email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || SITE.email;
    const fromEmail = process.env.LEAD_FROM_EMAIL || 'Aybar Nakliyat <onboarding@resend.dev>';
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    let emailSent = false;
    let emailDeliveryError: Error | null = null;
    const consentTimestamp = new Date().toISOString();

    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: fromEmail,
          to: notifyEmail,
          subject: `Yeni Teklif Talebi - ${leadData.name}`,
          html: `
            <h3>Yeni Teklif Talebi Detayları</h3>
            <p><strong>Ad Soyad:</strong> ${nameEscaped}</p>
            <p><strong>Telefon:</strong> ${phoneEscaped}</p>
            <p><strong>Nereden:</strong> ${fromDistrictEscaped}</p>
            <p><strong>Nereye:</strong> ${toDistrictEscaped}</p>
            <p><strong>Oda Sayısı (Eşya):</strong> ${roomsEscaped}</p>
            <p><strong>Asansör:</strong> ${leadData.elevator === 'evet' ? 'Evet, İstiyor' : 'Hayır, İstemiyor'}</p>
            <hr />
            <p><strong>Tahmini Fiyat Aralığı:</strong> ₺${est.min.toLocaleString('tr-TR')} - ₺${est.max.toLocaleString('tr-TR')}</p>
            <p><strong>Referer / Sayfa:</strong> ${referrerEscaped}</p>
            <p><strong>Gönderim Zamanı:</strong> ${timestampEscaped}</p>
          `
        });
        emailSent = true;
      } catch (err) {
        const errorObject = err instanceof Error ? err : new Error(String(err));
        emailDeliveryError = errorObject;
        console.error('LEAD_DELIVERY_FAILED: Resend failed to deliver email notification. Payload:', JSON.stringify({
          ...leadData,
          phone: maskPhone(leadData.phone),
          referrer,
          timestamp,
          estimate: est,
          consentTimestamp
        }), errorObject);
      }
    } else {
      console.warn('LEAD_NOTIFY_WARNING: RESEND_API_KEY not configured. Email notification skipped.');
      emailDeliveryError = new Error('RESEND_API_KEY is not defined');
    }

    // 6. Trigger Webhook fallback if email sending failed/skipped
    if (!emailSent && webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...leadData,
            referrer,
            timestamp,
            estimate: est,
            deliveryError: emailDeliveryError ? emailDeliveryError.message : 'Email skipped',
            consentTimestamp
          })
        });
      } catch (webhookError) {
        const errorObject = webhookError instanceof Error ? webhookError : new Error(String(webhookError));
        console.error('LEAD_DELIVERY_FAILED: Webhook fallback also failed:', errorObject);
      }
    }

    // 7. Log lead as JSON (Vercel backup, masked phone)
    console.log('LEAD_CAPTURE:', JSON.stringify({
      ...leadData,
      phone: maskPhone(leadData.phone),
      referrer,
      timestamp,
      estimate: est,
      consentTimestamp
    }));

    return NextResponse.json({ ok: true, estimate: est });

  } catch (error) {
    const errorObject = error instanceof Error ? error : new Error(String(error));
    console.error('API_TEKLIF_ERROR:', errorObject);
    return NextResponse.json(
      { ok: false, message: 'İstek işlenirken sunucuda bir hata oluştu.' },
      { status: 500 }
    );
  }
}
