'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Map, ShieldAlert, ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import { trackEvent } from '@/lib/analytics';

export default function ContactMap() {
  const [consentGranted, setConsentGranted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
      // Check if consent has already been given
      const consent = localStorage.getItem('cookie-consent');
      if (consent === 'true') {
        setConsentGranted(true);
      }
    }, 0);

    // Listen to custom consent granted event
    const handleConsentGranted = () => {
      setConsentGranted(true);
    };

    window.addEventListener('cookie-consent-granted', handleConsentGranted);
    return () => {
      window.removeEventListener('cookie-consent-granted', handleConsentGranted);
    };
  }, []);

  const handleGrantConsent = () => {
    localStorage.setItem('cookie-consent', 'true');
    setConsentGranted(true);
    window.dispatchEvent(new Event('cookie-consent-granted'));
    trackEvent('cerez_kabul_harita');
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name} ${SITE.address.street} ${SITE.address.locality} Kırşehir`)}`;

  if (!mounted) {
    // Return a shell skeleton during SSR / initial mount
    return (
      <div className="w-full aspect-video md:aspect-[3/1] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center animate-pulse">
        <span className="text-slate-400 text-xs font-semibold">Harita yükleniyor...</span>
      </div>
    );
  }

  return (
    <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200/60 shadow-md space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-5">
        <div>
          <h2 className="font-display font-extrabold text-brand-dark text-xl flex items-center gap-2">
            <Map className="w-5 h-5 text-brand-accent" />
            <span>Google Haritalar Konumumuz</span>
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            Kırşehir Merkez ofisimize ait konum bilgisine harita üzerinden erişebilirsiniz.
          </p>
        </div>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('harita_tikla', { konum: 'iletisim_sayfasi_tarifi', sayfa: '/iletisim' })}
          className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-3 px-6 rounded-xl transition-all duration-200 text-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
        >
          <MapPin className="w-4 h-4" />
          <span>Yol Tarifi Alın</span>
        </a>
      </div>

      {consentGranted ? (
        /* Map Iframe when consent is granted */
        <div className="w-full aspect-video md:aspect-[3/1] rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-brand-dark/5 relative">
          <iframe
            title="Kırşehir Aybar Nakliyat Google Harita Konumu"
            src={`https://maps.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="absolute inset-0 w-full h-full border-0 animate-fade-in"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ) : (
        /* Consent Gate Placeholder Card */
        <div className="w-full aspect-video md:aspect-[3/1] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="bg-slate-100 text-slate-500 p-3 rounded-full">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="max-w-md space-y-1">
            <h4 className="font-display font-bold text-slate-800 text-xs tracking-wider uppercase">Google Harita Çerez Onayı</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Google Haritalar konumunu görüntülemek için çerez izni vermeniz gerekmektedir. Google, harita yüklenirken konum verileri işleyebilir ve çerez yerleştirebilir.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleGrantConsent}
              className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black py-2.5 px-5 rounded-lg text-xs transition-colors cursor-pointer shadow-md"
            >
              Çerezleri Kabul Et ve Haritayı Yükle
            </button>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold py-2.5 px-5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Haritayı Google&apos;da Aç</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
