'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

export default function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  // 1. Listen for user cookie consent state
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'true') {
      setTimeout(() => setHasConsent(true), 0);
    }

    const handleConsentGranted = () => {
      setHasConsent(true);
    };

    window.addEventListener('cookie-consent-granted', handleConsentGranted);
    return () => {
      window.removeEventListener('cookie-consent-granted', handleConsentGranted);
    };
  }, []);

  // 2. Synchronize consent update triggers for both GA4 and Clarity
  // This single unified effect prevents race conditions during script loading and consent updates.
  useEffect(() => {
    if (!hasConsent) return;

    if (typeof window !== 'undefined') {
      // Update Google Analytics consent (Allow only analytics_storage, keep ad tracking denied)
      const dataLayer = (window as unknown as { dataLayer: unknown[] }).dataLayer;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) {
        gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      } else if (dataLayer) {
        dataLayer.push(['consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        }]);
      }

      // Update Microsoft Clarity consent
      const clarity = (window as unknown as { clarity?: (action: string, value: boolean) => void }).clarity;
      if (clarity) {
        clarity("consent", true);
      }
    }
  }, [hasConsent]);

  if (!gaId && !clarityId) return null;

  return (
    <>
      {/* Initialize Default Google Analytics Consents */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){window.dataLayer.push(arguments);}
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
            `}
          </Script>
        </>
      )}

      {/* Initialize Microsoft Clarity with Default Denied Consent */}
      {clarityId && (
        <Script id="microsoft-clarity-init" strategy="afterInteractive">
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
