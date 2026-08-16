'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, ShieldCheck, Clock, Users, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import QuoteForm from './QuoteForm';
import { SITE } from '@/lib/site-config';
import { FACTS } from '@/lib/facts';
import { trackEvent } from '@/lib/analytics';

const SLIDES = [
  {
    image: '/img/slayt-1.jpg',
    badge: 'KIRŞEHİR AYBAR NAKLİYAT VE ASANSÖR HİZMETİ',
    title: 'Kırşehir Evden Eve\nNakliyatta Sabit Fiyat',
    desc: 'Kırşehir genelinde 25. kata kadar ulaşan kendi mobil asansörlerimiz ve uzman marangoz kadromuzla, taşınma günündeki sürpriz ek ücret endişesine son veriyoruz.',
    trust: [
      { title: 'Aynı Gün Teslim', desc: 'Kırşehir İçi Hızlı Taşıma', icon: Clock },
      { title: 'Sertifikalı Marangoz', desc: 'Profesyonel De-montaj', icon: Users },
      { title: '%100 Güvenceli', desc: 'Sigorta & Sözleşme', icon: ShieldCheck },
    ]
  },
  {
    image: '/img/slayt-2.jpg',
    badge: 'TÜM TÜRKİYE\'YE SİGORTALI SEVKİYATLAR',
    title: 'Kırşehir\'den Ülke Genelinde\nŞehirlerarası Nakliyat',
    desc: 'Kırşehir çıkışlı şehirlerarası taşınma taleplerinizde, Anadolu Sigorta poliçemiz ve çift şoförlü çelik kasa filomuz ile eşyalarınızı hasarsız ulaştırıyoruz.',
    trust: [
      { title: 'Ankara - İstanbul', desc: 'Haftalık Düzenli Seferler', icon: Clock },
      { title: 'Geniş Çelik Kasa', desc: 'Sarsıntısız Özel Filo', icon: Users },
      { title: 'Poliçe Güvenceli', desc: 'Tam Hacimli Nakliye Sigortası', icon: ShieldCheck },
    ]
  },
  {
    image: '/img/slayt-3.jpg',
    badge: 'HASSAS PAKETLEME & OFİS TAŞIMA',
    title: 'Kırşehir Merkez ve İlçelerinde\nProfesyonel Paketleme',
    desc: 'Kırşehir, Kaman, Mucur, Çiçekdağı genelinde kalın Kraft patpatlar ve koruyucu ambalajlarla sıfır hasar odaklı ofis ve parça eşya taşıma desteği.',
    trust: [
      { title: 'Çift Kat Ambalaj', desc: 'Balonlu Naylon Koruma', icon: Clock },
      { title: 'Hızlı Ofis Nakliyesi', desc: 'Esnafa Özel Çözümler', icon: Users },
      { title: 'Modüler Asansör', desc: 'Dar Merdivenlere Çözüm', icon: ShieldCheck },
    ]
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return; // Disable autoplay if motion-sensitive

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000); // 7 seconds autoplay duration
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    trackEvent('slider_navigasyon', { yon: 'geri', slide: currentSlide });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    trackEvent('slider_navigasyon', { yon: 'ileri', slide: currentSlide });
  };

  return (
    <section 
      className="relative w-full min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden bg-brand-dark"
      aria-label="Kırşehir Aybar Nakliyat Tanıtım Bölümü"
    >
      {/* Background slide images with next/image crossfade */}
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title.replace(/\n/g, ' ')}
            fill
            sizes="100vw"
            priority={idx === 0}
            loading={idx === 0 ? undefined : 'lazy'}
            className="object-cover"
          />
        </div>
      ))}

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay z-10"></div>
      
      {/* Ambient Light Glow Effects */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Premium Headline & Copy (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left text-white space-y-6">
          
          {/* Static SEO-optimized H1 Subtitle */}
          <h1 className="text-sm md:text-base font-bold tracking-wider uppercase text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-4 py-2.5 rounded-full w-fit">
            Kırşehir Evden Eve Nakliyat — Sabit Fiyat Garantili Asansörlü Taşımacılık
          </h1>

          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-300">
              {SLIDES[currentSlide].badge}
            </span>
          </div>

          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight whitespace-pre-line min-h-[120px] sm:min-h-[160px]">
            {SLIDES[currentSlide].title}
          </h2>

          <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed min-h-[80px]">
            {SLIDES[currentSlide].desc}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`${SITE.whatsappHref}?text=Merhaba,%20evimi%20taşımak%20istiyorum.%20Hızlı%20teklif%20alabilir%20miyim?`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_tikla', { konum: 'hero', sayfa: 'anasayfa' })}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Hızlı WhatsApp Al</span>
            </a>

            <a
              href={SITE.phoneHref}
              onClick={() => trackEvent('telefon_tikla', { konum: 'hero', sayfa: 'anasayfa' })}
              className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Arayın: {SITE.phoneDisplay}</span>
            </a>

            <a
              href="https://share.google/YoiHqgk0tx65LVd0H"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('konum_tikla', { konum: 'hero', sayfa: 'anasayfa' })}
              className="bg-brand-dark/40 border border-brand-accent/50 hover:border-brand-accent hover:bg-brand-accent hover:text-brand-dark text-white font-extrabold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>Konuma Yol Tarifi</span>
            </a>
          </div>

          {/* Trust points matching each slide */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-4 text-xs md:text-sm text-slate-400 font-semibold">
            {SLIDES[currentSlide].trust.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-brand-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white text-[11px] md:text-xs">{item.title}</p>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Floating Price Calculation Card (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
          <div className="glass-card-dark rounded-2xl shadow-2xl p-6 border border-brand-accent/25 text-white w-full max-w-[420px]">
            <div className="mb-4">
              <span className="text-brand-accent font-bold text-[10px] tracking-widest block uppercase">Maliyet Hesaplama</span>
              <h2 className="font-display font-extrabold text-white text-lg mt-0.5">Taşınma Bedelini Hesapla</h2>
              <p className="text-slate-400 text-[10px] mt-1 leading-relaxed">Bilgileri girerek taşınma bedeli için ücretsiz ön fiyat analizi yapın.</p>
            </div>
            <QuoteForm isInline={true} />
          </div>
        </div>

      </div>

      {/* Slider Left/Right Navigation controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-dark/60 hover:bg-brand-accent text-white hover:text-brand-dark p-2 rounded-full z-25 border border-white/10 hover:border-brand-accent transition-all duration-200 focus:outline-none cursor-pointer hidden md:block"
        aria-label="Önceki Slayt"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-dark/60 hover:bg-brand-accent text-white hover:text-brand-dark p-2 rounded-full z-25 border border-white/10 hover:border-brand-accent transition-all duration-200 focus:outline-none cursor-pointer hidden md:block"
        aria-label="Sonraki Slayt"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-25">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentSlide(idx);
              trackEvent('slider_nokta_tikla', { index: idx });
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-brand-accent w-6' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
