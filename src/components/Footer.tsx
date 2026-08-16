'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { SITE, DISTRICTS } from '@/lib/site-config';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  const mainRegions = DISTRICTS.slice(0, 5).map(d => ({
    name: d.name,
    href: `/bolgeler/${d.slug}`
  }));

  const allRegions = DISTRICTS.map(d => ({
    name: d.name,
    href: `/bolgeler/${d.slug}`
  }));

  return (
    <footer className="bg-brand-darker text-white border-t border-white/5 pt-16 pb-8" id="iletisim-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & NAP */}
          <div className="lg:col-span-4 space-y-6">
            <Link 
              href="/" 
              className="flex items-center group bg-white/95 px-3.5 py-2 rounded-xl shadow-md hover:bg-white w-fit transition-all"
            >
              <Image
                src="/img/logo.webp"
                alt="Kırşehir Aybar Nakliyat Logo"
                width={200}
                height={56}
                loading="lazy"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
              2012 yılından bu yana Kırşehir genelinde sabit fiyat garantisi, K3 taşımacılık belgesi ve sigortalı modern mobil asansörlü nakliyat çözümleri sunuyoruz.
            </p>

            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5 w-fit">
              <Award className="w-5 h-5 text-brand-accent" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gray">K3 Yetki Belgeli Güvenilir Nakliye</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full lg:w-auto flex justify-between items-center lg:pointer-events-none text-left focus:outline-none border-b border-white/5 pb-2 lg:border-none lg:pb-0 cursor-pointer"
            >
              <h4 className="font-display font-bold text-sm tracking-wider uppercase border-l-2 border-brand-accent pl-3 text-white">
                Hizmetlerimiz
              </h4>
              <span className="lg:hidden text-white/65">
                {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            
            <nav aria-label="Footer Hizmet Linkleri">
              <ul className={`space-y-2.5 text-sm text-brand-gray font-semibold mt-4 lg:mt-0 ${servicesOpen ? 'block' : 'hidden lg:block'}`}>
                <li>
                  <Link href="/hizmetler/sehirici-evden-eve-nakliyat" className="hover:text-brand-accent transition-colors">1. Şehiriçi Evden Eve Nakliyat</Link>
                </li>
                <li>
                  <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="hover:text-brand-accent transition-colors">2. Şehirlerarası Evden Eve Nakliyat</Link>
                </li>
                <li>
                  <Link href="/hizmetler/asansorlu-evden-eve-nakliyat" className="hover:text-brand-accent transition-colors">3. Asansörlü Evden Eve Nakliyat</Link>
                </li>
                <li>
                  <Link href="/hizmetler/ofis-ve-isyeri-tasimaciligi" className="hover:text-brand-accent transition-colors">4. İşyeri ve Ofis Taşıma</Link>
                </li>
                <li>
                  <Link href="/hizmetler/profesyonel-esya-paketleme" className="hover:text-brand-accent transition-colors">5. Profesyonel Eşya Paketleme</Link>
                </li>
                <li>
                  <Link href="/hizmetler/ucretsiz-ekspertiz" className="hover:text-brand-accent transition-colors">6. Ücretsiz Ekspertiz</Link>
                </li>
                <li>
                  <Link href="/hizmetler/esya-depolama" className="hover:text-brand-accent transition-colors">7. Kiralık Eşya Depolama</Link>
                </li>
                <li>
                  <Link href="/hizmetler/parca-esya-tasima" className="hover:text-brand-accent transition-colors">8. Parça Eşya Taşıma</Link>
                </li>
                <li>
                  <Link href="/hizmetler/piyano-ve-kasa-tasima" className="hover:text-brand-accent transition-colors">9. Piyano ve Ağır Kasa Taşıma</Link>
                </li>
                <li>
                  <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="text-brand-accent hover:underline transition-colors">➔ Şehirlerarası Lojistik Rotalar</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Service Areas */}
          <div className="lg:col-span-3 space-y-4">
            <button
              onClick={() => setRegionsOpen(!regionsOpen)}
              className="w-full lg:w-auto flex justify-between items-center lg:pointer-events-none text-left focus:outline-none border-b border-white/5 pb-2 lg:border-none lg:pb-0 cursor-pointer"
            >
              <h4 className="font-display font-bold text-sm tracking-wider uppercase border-l-2 border-brand-accent pl-3 text-white">
                Hizmet Bölgelerimiz
              </h4>
              <span className="lg:hidden text-white/65">
                {regionsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            <nav aria-label="Footer Bölge Linkleri">
              {/* Desktop View */}
              <div className="hidden lg:grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-brand-gray font-semibold">
                <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-brand-accent hover:underline col-span-2 font-bold">→ Şehirlerarası Taşımacılık</Link>
                <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="text-brand-accent hover:underline col-span-2 border-b border-white/10 pb-1.5 font-bold">→ Lojistik Rotalarımız</Link>
                {allRegions.map((reg, idx) => (
                  <Link key={idx} href={reg.href} className="hover:text-brand-accent transition-colors">{reg.name}</Link>
                ))}
              </div>

              {/* Mobile View */}
              <div className={`lg:hidden mt-4 ${regionsOpen ? 'block' : 'hidden lg:block'}`}>
                <div className="space-y-3">
                  <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-brand-accent hover:underline block pb-1 font-bold text-sm border-b border-white/5">→ Şehirlerarası Taşımacılık</Link>
                  <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="text-brand-accent hover:underline block pb-1 font-bold text-sm border-b border-white/5">→ Lojistik Rotalarımız</Link>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm text-brand-gray font-semibold">
                    {mainRegions.map((reg, idx) => (
                      <Link key={idx} href={reg.href} className="hover:text-brand-accent transition-colors">📍 {reg.name}</Link>
                    ))}
                  </div>

                  <Link
                    href="/hizmetler/sehirlerarasi-evden-eve-nakliyat"
                    className="mt-3 text-brand-accent hover:underline text-sm font-bold flex items-center gap-1.5 justify-center bg-white/5 py-2.5 rounded-xl border border-white/10"
                  >
                    <span>Kırşehir Ev Taşıma Bölgelerimiz ➔</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase border-l-2 border-brand-accent pl-3 text-white border-b border-white/5 pb-2 lg:border-none lg:pb-0">
              İletişim
            </h4>
            <div className="space-y-4 text-sm text-brand-gray pt-2 lg:pt-0 font-semibold">
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 text-brand-accent" />
                <span>08:00 – 20:00 (Her Gün)</span>
              </div>
              <a 
                href={SITE.phoneHref} 
                onClick={() => trackEvent('telefon_tikla', { konum: 'footer', sayfa: 'default' })}
                className="flex gap-2 items-center hover:text-brand-accent transition-colors font-bold text-white"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>{SITE.phoneDisplay}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex gap-2 items-center hover:text-brand-accent transition-colors">
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-brand-gray font-semibold pb-[env(safe-area-inset-bottom)] border-t border-white/5">
          {/* Left: Copyright & K3 */}
          <div className="text-center md:text-left">
            &copy; {currentYear} Kırşehir Aybar Nakliyat. Tüm hakları saklıdır. K3 Yetki Belgesi ile Hizmet Vermekteyiz.
          </div>
          
          {/* Center: Growb Agency Credit */}
          <div className="flex justify-center">
            <a
              href="https://www.growbdijital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl shadow-md hover:shadow-lg w-fit transition-all duration-200"
            >
              <span className="text-[10px] text-brand-gray font-extrabold tracking-wide">TASARIM & SEO:</span>
              <Image
                src="/img/growb-logo.png"
                alt="Growb. Dijital Pazarlama ve SEO Ajansı logosu"
                width={48}
                height={48}
                loading="lazy"
                className="h-10 w-10 object-contain brightness-0 invert"
              />
            </a>
          </div>

          {/* Right: Legal Links */}
          <nav aria-label="Yasal Bağlantılar" className="flex gap-6 justify-center md:justify-end">
            <Link href="/yasal/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma</Link>
            <Link href="/yasal/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
