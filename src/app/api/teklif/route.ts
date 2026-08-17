import { NextRequest, NextResponse } from 'next/server';
import { QuoteFormSchema } from '@/lib/validation';

// Simple rolling window in-memory IP rate limiter map (10 requests per 10 minutes)
// TODO: Use Upstash Redis or Vercel KV for a production-grade distributed state
const rateLimitMap = new Map<string, number[]>();
const LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const LIMIT_MAX_REQUESTS = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter timestamps within the rolling window
  const validTimestamps = timestamps.filter(ts => now - ts < LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');

    // 1. IP Rate Limiting check
    if (isRateLimited(ip)) {
      console.warn(`RATE_LIMIT_TRIGGERED: IP ${ip} exceeded telemetry submission limits.`);
      return NextResponse.json(
        { ok: false, message: 'Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin.' },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json().catch(() => ({}));

    // 3. Honeypot check (website must be empty)
    if (body.website && body.website.trim().length > 0) {
      console.warn('BOT_DETECTION: Honeypot filled by bot:', body.website);
      return new NextResponse(null, { status: 204 });
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

    // 5. Anonymous telemetry logging (No PII: names and phones are excluded)
    console.log('Lead submission telemetry:', {
      fromDistrict: leadData.fromDistrict,
      toDistrict: leadData.toDistrict,
      rooms: leadData.rooms,
      elevator: leadData.elevator,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ ok: true });

  } catch (error) {
    const errorObject = error instanceof Error ? error : new Error(String(error));
    console.error('API_TEKLIF_ERROR:', errorObject);
    return NextResponse.json(
      { ok: false, message: 'İstek işlenirken sunucuda bir hata oluştu.' },
      { status: 500 }
    );
  }
}
