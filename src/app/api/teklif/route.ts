import { NextRequest, NextResponse } from 'next/server';
import { QuoteFormSchema } from '@/lib/validation';
import { Resend } from 'resend';
import { SITE } from '@/lib/site-config';
import { estimatePrice, PriceInput } from '@/lib/pricing';

// Simple in-memory cache for IP rate limiting
// NOT: In-memory; serverless'ta instance başına çalışır. Kalıcı çözüm için Vercel KV / Upstash Redis gerekir.
const ipCache = new Map<string, { count: number; expiresAt: number }>();

function cleanOldCache() {
  const now = Date.now();
  for (const [ip, data] of ipCache.entries()) {
    if (now > data.expiresAt) {
      ipCache.delete(ip);
    }
  }
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
      ipCache.set(ip, { count: 1, expiresAt: now + 60000 }); // 60s window
    } else {
      if (ipData.count >= 3) {
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
      // Return 200 silently to deceive the bot
      return NextResponse.json({ ok: true, estimate: { min: 20000, max: 25000 } });
    }

    // 4. Server-side validation using Zod
    const validationResult = QuoteFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const firstErrorKey = Object.keys(fieldErrors)[0];
      const errorMessage = (fieldErrors as any)[firstErrorKey]?.[0] || 'Lütfen bilgilerinizi kontrol edin.';
      
      return NextResponse.json(
        { ok: false, message: errorMessage, errors: fieldErrors },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;
    const referrer = req.headers.get('referer') || '/teklif-al';
    const timestamp = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
    const est = calculateServerEstimate(leadData.rooms, leadData.elevator, leadData.fromDistrict, leadData.toDistrict);

    // 5. Try sending email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || SITE.email;
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    try {
      if (apiKey) {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: 'Aybar Nakliyat <onboarding@resend.dev>',
          to: notifyEmail,
          subject: `Yeni Teklif Talebi - ${leadData.name}`,
          html: `
            <h3>Yeni Teklif Talebi Detayları</h3>
            <p><strong>Ad Soyad:</strong> ${leadData.name}</p>
            <p><strong>Telefon:</strong> ${leadData.phone}</p>
            <p><strong>Nereden:</strong> ${leadData.fromDistrict}</p>
            <p><strong>Nereye:</strong> ${leadData.toDistrict}</p>
            <p><strong>Oda Sayısı (Eşya):</strong> ${leadData.rooms}</p>
            <p><strong>Asansör:</strong> ${leadData.elevator === 'evet' ? 'Evet, İstiyor' : 'Hayır, İstemiyor'}</p>
            <hr />
            <p><strong>Tahmini Fiyat Aralığı:</strong> ₺${est.min.toLocaleString('tr-TR')} - ₺${est.max.toLocaleString('tr-TR')}</p>
            <p><strong>Referer / Sayfa:</strong> ${referrer}</p>
            <p><strong>Gönderim Zamanı:</strong> ${timestamp}</p>
          `
        });
      } else {
        console.warn('LEAD_NOTIFY_WARNING: RESEND_API_KEY not configured. Email notification skipped.');
      }
    } catch (emailError) {
      console.error('LEAD_DELIVERY_FAILED: Resend failed to deliver email notification. Payload:', JSON.stringify({
        ...leadData,
        referrer,
        timestamp,
        estimate: est
      }), emailError);

      // Webhook fallback
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...leadData,
              referrer,
              timestamp,
              estimate: est,
              deliveryError: 'Resend email failed'
            })
          });
        } catch (webhookError) {
          console.error('LEAD_DELIVERY_FAILED: Webhook fallback also failed:', webhookError);
        }
      }
    }

    // 6. Log lead as JSON (Vercel backup)
    console.log('LEAD_CAPTURE:', JSON.stringify({
      ...leadData,
      referrer,
      timestamp,
      estimate: est
    }));

    // Return success with estimate
    return NextResponse.json({ ok: true, estimate: est });

  } catch (error: any) {
    console.error('API_TEKLIF_ERROR:', error);
    return NextResponse.json(
      { ok: false, message: 'İstek işlenirken sunucuda bir hata oluştu.' },
      { status: 500 }
    );
  }
}
