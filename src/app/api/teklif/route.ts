import { NextRequest, NextResponse } from 'next/server';
import { QuoteFormSchema } from '@/lib/validation';
import { DISTRICTS } from '@/lib/site-config';
import { estimatePrice, PriceInput } from '@/lib/pricing';

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.warn('TURNSTILE_WARN: TURNSTILE_SECRET_KEY not configured. Verification skipped.');
    return true;
  }
  
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
        remoteip: ip
      })
    });
    const data = await res.json();
    return !!data.success;
  } catch (err) {
    console.error('TURNSTILE_ERROR: Failed to contact Cloudflare siteverify API:', err);
    return false;
  }
}

function calculateServerEstimate(rooms: string, elevator: string, fromDistrict: string, toDistrict: string) {
  const isIntercity = fromDistrict.includes('Şehirlerarası') || toDistrict.includes('Şehirlerarası');
  const isDistrict = fromDistrict !== 'Merkez' || toDistrict !== 'Merkez';
  
  const distanceType: PriceInput['distanceType'] = isIntercity 
    ? 'sehirlerarasi' 
    : (isDistrict ? 'ilceler' : 'sehirici');

  // Look up distances dynamically from site-config
  const d1 = DISTRICTS.find(d => d.name === fromDistrict)?.distanceKm ?? 0;
  const d2 = DISTRICTS.find(d => d.name === toDistrict)?.distanceKm ?? 0;
  // If one of the districts is Intercity, default distance to 300km, otherwise calculate distanceKm
  const distanceKm = isIntercity ? 300 : Math.abs(d1 - d2);

  const input: PriceInput = {
    rooms: (['1+1', '2+1', '3+1', '4+1+', 'ofis'].includes(rooms) ? rooms : '3+1') as PriceInput['rooms'],
    fromFloor: 3,
    toFloor: 3,
    fromElevator: elevator === 'evet',
    toElevator: elevator === 'evet',
    distanceType,
    distanceKm,
    packing: true,
    carpentry: true,
    storage: false
  };

  return estimatePrice(input);
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');

    // 1. Parse request body
    const body = await req.json().catch(() => ({}));

    // 2. Turnstile Verification
    const turnstileVerified = await verifyTurnstile(body.turnstileToken || '', ip);
    if (!turnstileVerified) {
      return NextResponse.json(
        { ok: false, message: 'Robot doğrulaması başarısız oldu. Lütfen tekrar deneyin.' },
        { status: 400 }
      );
    }

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
    const est = calculateServerEstimate(leadData.rooms, leadData.elevator, leadData.fromDistrict, leadData.toDistrict);

    // 5. Anonymous telemetry logging (No PII)
    console.log('Lead submission processed:', {
      fromDistrict: leadData.fromDistrict,
      toDistrict: leadData.toDistrict,
      rooms: leadData.rooms,
      elevator: leadData.elevator,
      minPrice: est.min,
      maxPrice: est.max,
      timestamp: new Date().toISOString()
    });

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
