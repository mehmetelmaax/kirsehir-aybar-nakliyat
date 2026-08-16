'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, MapPin, Calculator, ChevronDown } from 'lucide-react';
import { SITE, DISTRICTS } from '@/lib/site-config';
import { trackEvent } from '@/lib/analytics';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Accessible Dropdowns state
  const [servicesOpen, setServicesOpen] = useState(false);
  const [districtsOpen, setDistrictsOpen] = useState(false);

  const servicesRef = useRef<HTMLLIElement>(null);
  const districtsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation & outside click handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setDistrictsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (districtsRef.current && !districtsRef.current.contains(target)) {
        setDistrictsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownKeyDown = (e: React.KeyboardEvent, type: 'services' | 'districts') => {
    const ref = type === 'services' ? servicesRef : districtsRef;
    if (!ref.current) return;

    const links = Array.from(ref.current.querySelectorAll('a')) as HTMLAnchorElement[];
    if (links.length === 0) return;

    const activeEl = document.activeElement as HTMLAnchorElement;
    const index = links.indexOf(activeEl);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % links.length;
      links[nextIndex].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + links.length) % links.length;
      links[prevIndex].focus();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHome = pathname === '/';
  const showSolidHeader = !isHome || isScrolled || isOpen;

  return (
    <>
      <header className="relative z-50">
        {/* ==========================================
        TOP BAR (Üst Çubuk)
        ========================================== */}
        <div className="bg-brand-darker text-white text-xs py-2.5 px-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <span className="flex items-center gap-1.5 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                <span className="font-medium">{SITE.address.locality} / {SITE.address.region}</span>
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <a 
                href={SITE.phoneHref} 
                onClick={() => trackEvent('telefon_tikla', { konum: 'topbar', sayfa: pathname })}
                className="flex items-center gap-1.5 hover:text-brand-accent transition-colors font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span>7/24 Destek: {SITE.phoneDisplay}</span>
              </a>
            </div>
            <div></div>
          </div>
        </div>

        {/* ==========================================
        MAIN NAVBAR (Ana Menü)
        ========================================== */}
        <nav 
          className={`glass-nav absolute left-0 right-0 w-full transition-all duration-300 px-4 py-2 sm:px-6 lg:px-8 ${
            showSolidHeader 
              ? '!fixed !top-0 bg-brand-dark/95 shadow-xl !py-2' 
              : 'absolute'
          }`}
        >
          <div className="max-w-[94%] mx-auto flex justify-between items-center gap-2">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group focus-visible:ring-2 focus-visible:ring-brand-accent bg-white px-2 py-1 rounded-xl shadow-lg hover:bg-white transition-all"
            >
              <Image
                src="/img/logo.webp"
                alt="Kırşehir Aybar Nakliyat Logo"
                width={280}
                height={80}
                priority
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-3 xl:gap-5 ml-4 xl:ml-8 text-white font-semibold text-[11.5px] xl:text-[12.5px] 2xl:text-sm tracking-wider">
              <li>
                <Link href="/" className="nav-link-hover hover:text-brand-accent transition-colors">ANASAYFA</Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="nav-link-hover hover:text-brand-accent transition-colors">HAKKIMIZDA</Link>
              </li>

              {/* Bireysel Hizmetler Dropdown */}
              <li 
                ref={servicesRef}
                className="relative group/menu"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 hover:text-brand-accent transition-colors py-2 uppercase cursor-pointer"
                >
                  HİZMETLERİMİZ
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  id="services-menu"
                  role="menu"
                  onKeyDown={(e) => handleDropdownKeyDown(e, 'services')}
                  className={`absolute left-0 mt-1 w-64 bg-brand-dark border border-white/10 rounded-xl shadow-2xl py-2 space-y-0.5 transition-all duration-200 ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <Link role="menuitem" href="/hizmetler/sehirici-evden-eve-nakliyat" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">1. Şehiriçi Evden Eve Nakliyat</Link>
                  <Link role="menuitem" href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">2. Şehirlerarası Evden Eve Nakliyat</Link>
                  <Link role="menuitem" href="/hizmetler/asansorlu-evden-eve-nakliyat" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">3. Asansörlü Evden Eve Nakliyat</Link>
                  <Link role="menuitem" href="/hizmetler/ofis-ve-isyeri-tasimaciligi" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">4. İşyeri ve Ofis Taşıma</Link>
                  <Link role="menuitem" href="/hizmetler/profesyonel-esya-paketleme" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">5. Profesyonel Eşya Paketleme</Link>
                  <Link role="menuitem" href="/hizmetler/ucretsiz-ekspertiz" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">6. Ücretsiz Ekspertiz</Link>
                  <Link role="menuitem" href="/hizmetler/esya-depolama" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">7. Kiralık Eşya Depolama</Link>
                  <Link role="menuitem" href="/hizmetler/parca-esya-tasima" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">8. Parça Eşya Taşıma</Link>
                  <Link role="menuitem" href="/hizmetler/piyano-ve-kasa-tasima" className="text-white hover:bg-white/5 hover:text-brand-accent block px-4 py-2 rounded text-xs font-semibold focus:outline-none focus:bg-white/5">9. Piyano ve Ağır Kasa Taşıma</Link>
                </div>
              </li>

              {/* Hizmet Bölgelerimiz Dropdown */}
              <li 
                ref={districtsRef}
                className="relative group/menu"
                onMouseEnter={() => setDistrictsOpen(true)}
                onMouseLeave={() => setDistrictsOpen(false)}
              >
                <button 
                  onClick={() => setDistrictsOpen(!districtsOpen)}
                  className="flex items-center gap-1 hover:text-brand-accent transition-colors py-2 uppercase cursor-pointer"
                >
                  BÖLGELERİMİZ
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${districtsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  id="districts-menu"
                  role="menu"
                  onKeyDown={(e) => handleDropdownKeyDown(e, 'districts')}
                  className={`absolute left-0 mt-1 w-72 bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-3 grid grid-cols-2 gap-1.5 transition-all duration-200 ${
                    districtsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <Link role="menuitem" href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-brand-accent hover:bg-white/5 block px-2.5 py-2 rounded text-xs font-bold col-span-2 border-b border-white/10 focus:outline-none focus:bg-white/5">→ Şehirlerarası Lojistik</Link>
                  {DISTRICTS.map((d) => (
                    <Link 
                      key={d.slug}
                      role="menuitem" 
                      href={`/bolgeler/${d.slug}`} 
                      className="text-white hover:bg-white/5 hover:text-brand-accent block px-2.5 py-1.5 rounded text-[11px] font-semibold focus:outline-none focus:bg-white/5"
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="nav-link-hover hover:text-brand-accent transition-colors">ROTALAR</Link>
              </li>
              <li>
                <Link href="/blog" className="nav-link-hover hover:text-brand-accent transition-colors">BLOG</Link>
              </li>
              <li>
                <Link href="/galeri" className="nav-link-hover hover:text-brand-accent transition-colors">GALERİ</Link>
              </li>
              <li>
                <Link href="/iletisim" className="nav-link-hover hover:text-brand-accent transition-colors">İLETİŞİM</Link>
              </li>
            </ul>

            {/* Right CTA Buttons */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-3">
              {/* Button 1: Fiyat Al */}
              <Link 
                href="/teklif-al" 
                className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-3 py-2 xl:px-4 xl:py-2.5 rounded-xl font-extrabold text-[10px] xl:text-[11px] 2xl:text-xs shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 tracking-wider flex items-center gap-1"
              >
                <Calculator className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-brand-dark" />
                <span>Fiyat Al</span>
              </Link>

              {/* Button 2: Telefon Numarası (Glassmorphic) */}
              <a 
                href={SITE.phoneHref}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-3 py-2 xl:px-4 xl:py-2.5 rounded-xl font-extrabold text-[10px] xl:text-[11px] 2xl:text-xs shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 tracking-wider flex items-center gap-1"
              >
                <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 fill-current text-brand-accent" />
                <span>0537 312 34 47</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-brand-accent focus:outline-none p-1 focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
              aria-label="Menüyü aç/kapat"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-darker/95 lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-start items-center gap-5 px-6 overflow-y-auto pt-28 pb-10">
          <Link onClick={toggleMenu} href="/" className="text-white text-base font-bold hover:text-brand-accent transition-colors">Ana Sayfa</Link>
          <Link onClick={toggleMenu} href="/hakkimizda" className="text-white text-base font-bold hover:text-brand-accent transition-colors">Hakkımızda</Link>
          <Link onClick={toggleMenu} href="/galeri" className="text-white text-base font-bold hover:text-brand-accent transition-colors">Galeri</Link>

          {/* Collapsible Mobile Dropdown */}
          <div className="w-full max-w-xs text-center border-t border-b border-white/10 py-4 space-y-3">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all focus:outline-none cursor-pointer"
            >
              <span>Hizmetler ve Bölgelerimiz</span>
              <ChevronDown className={`w-4 h-4 text-brand-accent transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileDropdownOpen && (
              <div className="space-y-4 pt-3 pb-2 text-center transition-all">
                {/* Hizmetlerimiz */}
                <div className="space-y-2">
                  <span className="text-brand-accent text-[9px] font-black tracking-wider block">HİZMET ALANLARIMIZ</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <Link onClick={toggleMenu} href="/hizmetler/sehirici-evden-eve-nakliyat" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5">Şehiriçi</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5">Şehirlerarası</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/asansorlu-evden-eve-nakliyat" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5">Asansörlü</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/ofis-ve-isyeri-tasimaciligi" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5">Ofis / İşyeri</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/profesyonel-esya-paketleme" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5 col-span-2">Paketleme</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/ucretsiz-ekspertiz" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5 col-span-2">Ekspertiz</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/esya-depolama" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5">Depolama</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/parca-esya-tasima" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5">Parça Eşya</Link>
                    <Link onClick={toggleMenu} href="/hizmetler/piyano-ve-kasa-tasima" className="text-white hover:text-brand-accent text-[10px] font-semibold border border-white/10 rounded px-2 py-1.5 col-span-2">Piyano & Kasa</Link>
                  </div>
                </div>

                {/* Bölgelerimiz */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-brand-accent text-[9px] font-black tracking-wider block">HİZMET BÖLGELERİMİZ</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <Link onClick={toggleMenu} href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-white hover:text-brand-accent text-[9px] font-semibold border border-white/10 rounded py-1.5 col-span-2">Şehirlerarası Lojistik</Link>
                    {DISTRICTS.map((d) => (
                      <Link 
                        key={d.slug}
                        onClick={toggleMenu} 
                        href={`/bolgeler/${d.slug}`} 
                        className="text-white hover:text-brand-accent text-[9px] font-semibold border border-white/10 rounded py-1.5"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link onClick={toggleMenu} href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="text-white text-base font-bold hover:text-brand-accent transition-colors">Rotalar</Link>
          <Link onClick={toggleMenu} href="/blog" className="text-white text-base font-bold hover:text-brand-accent transition-colors">Blog</Link>
          <Link onClick={toggleMenu} href="/iletisim" className="text-white text-base font-bold hover:text-brand-accent transition-colors">İletişim</Link>

          <div className="flex flex-col items-center gap-3.5 mt-4 w-full max-w-xs">
            <a
              href={SITE.phoneHref}
              onClick={() => trackEvent('telefon_tikla', { konum: 'mobile-menu', sayfa: pathname })}
              className="flex items-center justify-center gap-2 bg-transparent border border-white text-white font-bold py-3 w-full rounded-xl hover:text-brand-accent transition-colors text-xs"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <Link
              onClick={toggleMenu}
              href="/teklif-al"
              className="flex items-center justify-center gap-2 bg-brand-accent text-white font-bold py-3 w-full rounded-xl hover:bg-brand-accentHover transition-colors text-xs shadow-lg"
            >
              <Calculator className="w-4 h-4" />
              <span>Teklif Al</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
