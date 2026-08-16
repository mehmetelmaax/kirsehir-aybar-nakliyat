'use client';

import React, { useEffect, useRef } from 'react';

interface TurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: { sitekey: string; callback: (token: string) => void }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function Turnstile({ siteKey, onVerify }: TurnstileProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Add Cloudflare Turnstile script if not already loaded
    if (!window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    // 2. Render Turnstile widget once window.turnstile is available
    const initWidget = () => {
      if (window.turnstile && widgetRef.current) {
        try {
          window.turnstile.render(widgetRef.current, {
            sitekey: siteKey,
            callback: (token) => {
              onVerify(token);
            },
          });
        } catch (err) {
          console.error('Turnstile render failed:', err);
        }
      }
    };

    const timer = setTimeout(initWidget, 500);
    return () => clearTimeout(timer);
  }, [siteKey, onVerify]);

  return <div ref={widgetRef} className="cf-turnstile min-h-[65px] flex items-center justify-center py-2" />;
}
