'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

export default function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'true') {
      setTimeout(() => setHasConsent(true), 0);
    }

    // Listen to custom event when consent is accepted
    const handleConsentGranted = () => {
      setTimeout(() => setHasConsent(true), 0);
    };
    window.addEventListener('cookie-consent-granted', handleConsentGranted);
    return () => {
      window.removeEventListener('cookie-consent-granted', handleConsentGranted);
    };
  }, []);

  useEffect(() => {
    if (hasConsent && clarityId && typeof window !== 'undefined') {
      const clarity = (window as unknown as { clarity: (action: string, value: boolean) => void }).clarity;
      if (clarity) {
        clarity("consent", true);
      }
    }
  }, [hasConsent, clarityId]);


  if (!gaId && !clarityId) return null;

  if (!hasConsent) {
    // Render default denied consent mode to prevent tracking before user accept
    return (
      <>
        {gaId && (
          <Script id="google-analytics-default-consent" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            `}
          </Script>
        )}
      </>
    );
  }

  return (
    <>
      {/* 1. Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            `}
          </Script>
        </>
      )}

      {/* 2. Microsoft Clarity */}
      {clarityId && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${clarityId}");
            window.clarity("consent", false);
          `}
        </Script>
      )}
    </>
  );
}
