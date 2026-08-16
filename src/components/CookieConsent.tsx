'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been chosen
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setTimeout(() => setIsVisible(true), 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
    // Dispatch custom event to trigger Analytics script loading
    window.dispatchEvent(new Event('cookie-consent-granted'));
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:bottom-4 md:left-auto md:max-w-md z-50 animate-fade-in no-print">
      <div className="bg-navy border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4">
        <div className="flex gap-3 items-start">
          <div className="bg-orange/20 text-orange p-2 rounded-lg flex-shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Çerez ve Gizlilik Tercihleri</h4>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              Sitemizde kullanıcı deneyimini analiz etmek için analitik izleme (Google Analytics 4) ve oturum kaydı (Microsoft Clarity) araçları kullanılmaktadır. Form verileriniz yerel sunucularda saklanmayıp doğrudan WhatsApp (Meta) üzerinden şifreli iletilir. Detaylar için{' '}
              <Link href="/yasal/gizlilik" target="_blank" className="text-orange hover:underline font-semibold">
                Gizlilik Politikamızı
              </Link>{' '}
              ve{' '}
              <Link href="/yasal/kvkk" target="_blank" className="text-orange hover:underline font-semibold">
                KVKK Aydınlatma Metni
              </Link>
              &apos;ni inceleyebilirsiniz.
            </p>
          </div>
        </div>

        <div className="flex gap-2.5 justify-end text-xs">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-white/70 hover:text-white font-bold transition-colors cursor-pointer"
          >
            Reddet
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black rounded-lg transition-colors cursor-pointer shadow-md"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
