'use client';

import React, { useState, useRef } from 'react';
import { Send, Phone, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import { QuoteFormSchema, DISTRICT_OPTIONS } from '@/lib/validation';
import { trackEvent } from '@/lib/analytics';

interface QuoteFormProps {
  isInline?: boolean;
}

export default function QuoteForm({ isInline = false }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromDistrict: '',
    toDistrict: '',
    rooms: '',
    elevator: 'evet',
    website: '', // honeypot
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Track if form started event has been fired
  const formStartedRef = useRef(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    // Trigger teklif_formu_basladi event once on first user interaction
    if (!formStartedRef.current && name !== 'website') {
      formStartedRef.current = true;
      trackEvent('teklif_formu_basladi');
    }
  };

  const calculateEstimate = () => {
    // Görev 9: Tüm hesaplama ve fiyat gösterim robotunu 20.000 TL - 25.000 TL sabit aralığı dönecek şekilde eşitle.
    return { min: 20000, max: 25000 };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});
    setErrorMessage('');

    // Zod Client-side Validation
    const validation = QuoteFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const newErrors: { [key: string]: string } = {};
      
      Object.keys(fieldErrors).forEach((key) => {
        newErrors[key] = (fieldErrors as Record<string, string[] | undefined>)[key]?.[0] || '';
      });

      setErrors(newErrors);
      setStatus('idle');
      
      // Track Form Error Event
      const errorKeys = Object.keys(newErrors);
      trackEvent('teklif_formu_hata', { hataAlani: errorKeys.join(', ') });

      // Focus on the first invalid field
      if (errorKeys.length > 0) {
        document.getElementById(errorKeys[0])?.focus();
      }
      return;
    }

    try {
      const response = await fetch('/api/teklif', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      const priceRange = calculateEstimate();

      if (response.ok && data.ok) {
        setStatus('success');

        // Track Form Submit Event
        trackEvent('teklif_formu_gonderildi', {
          fromDistrict: formData.fromDistrict,
          toDistrict: formData.toDistrict,
          rooms: formData.rooms,
          tahminiFiyat: `${priceRange.min}-${priceRange.max}`
        });

        // Open WhatsApp in a new tab/window
        const link = getWhatsAppLink();
        window.open(link, '_blank');
      } else {
        setErrorMessage(data.message || 'İstek işlenirken sunucuda bir hata oluştu.');
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Bağlantı hatası oluştu. Lütfen internetinizi kontrol edin.');
      setStatus('error');
    }
  };

  const getWhatsAppLink = () => {
    const text = `Merhaba, Kırşehir Aybar Nakliyat sitenizden bir fiyat teklifi oluşturdum:\n\n👤 Adı Soyadı: ${formData.name}\n📞 Telefon: ${formData.phone}\n📍 Nereden: ${formData.fromDistrict}\n🏁 Nereye: ${formData.toDistrict}\n🏠 Oda Sayısı: ${formData.rooms}\n🏢 Asansör Durumu: ${formData.elevator === 'evet' ? 'Asansörlü Taşıma İstiyorum' : 'Asansör İstemiyorum'}\n\n💵 Tahmini Fiyat Aralığı: 20.000 TL - 25.000 TL`;
    return `${SITE.whatsappHref}?text=${encodeURIComponent(text)}`;
  };

  const formFieldsHtml = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot Input: Hidden from screen readers & users but filled by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', opacity: 0, top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}
        value={formData.website}
        onChange={handleInputChange}
      />

      {/* Row 1: Name & Tel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="space-y-1">
          <label htmlFor="name" className={`text-[10px] font-bold uppercase tracking-wider block ${isInline ? 'text-slate-300' : 'text-brand-dark/85'}`}>Adınız Soyadınız *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Örn: Ahmet Yılmaz"
            className={`w-full border rounded px-3 py-2 text-xs bg-white text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-accent ${
              errors.name ? 'border-rose-500 bg-rose-50' : 'border-brand-gray/30'
            }`}
          />
          {errors.name && <span id="err-name" role="alert" className="text-[10px] text-rose-500 font-semibold block">{errors.name}</span>}
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className={`text-[10px] font-bold uppercase tracking-wider block ${isInline ? 'text-slate-300' : 'text-brand-dark/85'}`}>Telefon Numaranız *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Örn: 532 123 45 67"
            className={`w-full border rounded px-3 py-2 text-xs bg-white text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-accent ${
              errors.phone ? 'border-rose-500 bg-rose-50' : 'border-brand-gray/30'
            }`}
          />
          {errors.phone && <span id="err-phone" role="alert" className="text-[10px] text-rose-500 font-semibold block">{errors.phone}</span>}
        </div>
      </div>

      {/* Row 2: Nereden & Nereye */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="space-y-1">
          <label htmlFor="fromDistrict" className={`text-[10px] font-bold uppercase tracking-wider block ${isInline ? 'text-slate-300' : 'text-brand-dark/85'}`}>Nereden Taşınacaksınız? *</label>
          <select
            id="fromDistrict"
            name="fromDistrict"
            required
            aria-required="true"
            aria-invalid={!!errors.fromDistrict}
            aria-describedby={errors.fromDistrict ? 'err-fromDistrict' : undefined}
            value={formData.fromDistrict}
            onChange={handleInputChange}
            className={`w-full border rounded px-2.5 py-2 text-xs bg-white text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-accent ${
              errors.fromDistrict ? 'border-rose-500 bg-rose-50' : 'border-brand-gray/30'
            }`}
          >
            <option value="">İlçe Seçin</option>
            {DISTRICT_OPTIONS.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
          {errors.fromDistrict && <span id="err-fromDistrict" role="alert" className="text-[10px] text-rose-500 font-semibold block">{errors.fromDistrict}</span>}
        </div>

        <div className="space-y-1">
          <label htmlFor="toDistrict" className={`text-[10px] font-bold uppercase tracking-wider block ${isInline ? 'text-slate-300' : 'text-brand-dark/85'}`}>Nereye Taşınacaksınız? *</label>
          <select
            id="toDistrict"
            name="toDistrict"
            required
            aria-required="true"
            aria-invalid={!!errors.toDistrict}
            aria-describedby={errors.toDistrict ? 'err-toDistrict' : undefined}
            value={formData.toDistrict}
            onChange={handleInputChange}
            className={`w-full border rounded px-2.5 py-2 text-xs bg-white text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-accent ${
              errors.toDistrict ? 'border-rose-500 bg-rose-50' : 'border-brand-gray/30'
            }`}
          >
            <option value="">İlçe / İl Seçin</option>
            {DISTRICT_OPTIONS.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
          {errors.toDistrict && <span id="err-toDistrict" role="alert" className="text-[10px] text-rose-500 font-semibold block">{errors.toDistrict}</span>}
        </div>
      </div>

      {/* Row 3: Oda Sayısı & Asansör */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="space-y-1">
          <label htmlFor="rooms" className={`text-[10px] font-bold uppercase tracking-wider block ${isInline ? 'text-slate-300' : 'text-brand-dark/85'}`}>Ev Boyutu (Oda Sayısı) *</label>
          <select
            id="rooms"
            name="rooms"
            required
            aria-required="true"
            aria-invalid={!!errors.rooms}
            aria-describedby={errors.rooms ? 'err-rooms' : undefined}
            value={formData.rooms}
            onChange={handleInputChange}
            className={`w-full border rounded px-2.5 py-2 text-xs bg-white text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-accent ${
              errors.rooms ? 'border-rose-500 bg-rose-50' : 'border-brand-gray/30'
            }`}
          >
            <option value="">Boyut Seçin</option>
            <option value="1+1">1+1 Daire</option>
            <option value="2+1">2+1 Daire</option>
            <option value="3+1">3+1 Daire</option>
            <option value="4+1+">4+1 veya Daha Büyük</option>
            <option value="ofis">Ofis / İşyeri</option>
          </select>
          {errors.rooms && <span id="err-rooms" role="alert" className="text-[10px] text-rose-500 font-semibold block">{errors.rooms}</span>}
        </div>

        <div className="space-y-1">
          <span className={`text-[10px] font-bold tracking-wider block ${isInline ? 'text-slate-300' : 'text-brand-dark/85'}`}>EŞYA ASANSÖRÜ *</span>
          <div className="flex gap-4 pt-1">
            <label className={`flex items-center gap-1.5 text-xs font-semibold cursor-pointer select-none ${isInline ? 'text-slate-300' : 'text-slate-800'}`}>
              <input
                type="radio"
                name="elevator"
                value="evet"
                checked={formData.elevator === 'evet'}
                onChange={handleInputChange}
                className="w-3.5 h-3.5 text-brand-accent focus:ring-brand-accent"
              />
              <span>Kurulsun</span>
            </label>
            <label className={`flex items-center gap-1.5 text-xs font-semibold cursor-pointer select-none ${isInline ? 'text-slate-300' : 'text-slate-800'}`}>
              <input
                type="radio"
                name="elevator"
                value="hayir"
                checked={formData.elevator === 'hayir'}
                onChange={handleInputChange}
                className="w-3.5 h-3.5 text-brand-accent focus:ring-brand-accent"
              />
              <span>İstemiyorum</span>
            </label>
          </div>
        </div>
      </div>

      {/* KVKK Consent Checkbox */}
      <div className="space-y-1 py-1">
        <label className={`flex items-start gap-2 text-[11px] font-semibold cursor-pointer select-none leading-tight ${isInline ? 'text-slate-300' : 'text-brand-dark/80'}`}>
          <input
            type="checkbox"
            name="kvkkConsent"
            required
            className="w-3.5 h-3.5 mt-0.5 rounded text-brand-accent focus:ring-brand-accent cursor-pointer"
          />
          <span>
            <Link href="/yasal/kvkk" target="_blank" className="text-brand-accent hover:underline font-bold">
              KVKK Açık Rıza Metnini
            </Link>{' '}
            okudum, onaylıyorum. Verilerimin WhatsApp (Meta) üzerinden güvenle iletileceğini kabul ediyorum.
          </span>
        </label>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black py-3.5 rounded transition-all duration-200 border border-brand-accent/20 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-accent text-sm flex items-center justify-center gap-2 mt-2 cursor-pointer active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Gönderiliyor...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Fiyat Teklifi Al</span>
          </>
        )}
      </button>
    </form>
  );

  const successHtml = (
    <div className="text-center py-4 space-y-4 flex flex-col items-center">
      <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-full">
        <CheckCircle className="w-8 h-8" />
      </div>
      
      <div className="space-y-2">
        <h3 className={`font-display font-black text-xl ${isInline ? 'text-white' : 'text-brand-dark'}`}>Son Adım: Mesajı Gönderin!</h3>
        <p className={`text-xs font-semibold ${isInline ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
          Teklif detaylarınız hazırlandı. Talebinizin ulaşması için açılan WhatsApp penceresindeki hazır mesajı &quot;gönder&quot; butonuna basarak bize iletiniz. Eğer pencere açılmadıysa aşağıdaki yeşil butona basarak gönderebilirsiniz.
        </p>
        <p className={`text-[11px] font-medium pt-1 ${isInline ? 'text-slate-400' : 'text-slate-500'}`}>Tahmini taşınma maliyet aralığınız:</p>
      </div>

      <div className="bg-brand-dark text-brand-accent rounded px-6 py-3 font-display font-black text-xl tracking-wide border border-brand-accent/20">
        20.000 TL - 25.000 TL
      </div>

      <div className="flex flex-col gap-2.5 w-full pt-4">
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_tikla', { konum: 'form_basari', sayfa: window.location.pathname })}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-3.5 rounded-xl border border-emerald-700 transition-all duration-200 shadow-md text-xs flex items-center justify-center gap-2 w-full animate-bounce"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp&apos;tan Mesajı Gönder</span>
        </a>

        {/* Call Button */}
        <a
          href={SITE.phoneHref}
          onClick={() => trackEvent('telefon_tikla', { konum: 'form_basari', sayfa: window.location.pathname })}
          className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black py-3 rounded-xl border border-brand-accent/20 transition-all duration-200 shadow-md text-xs flex items-center justify-center gap-2 w-full"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Hemen Arayın: {SITE.phoneDisplay}</span>
        </a>
      </div>

      <div className="pt-4 border-t border-brand-gray/20 w-full">
        <Link href="/tasinma-kontrol-listesi" className={`font-bold text-xs uppercase tracking-wider block ${isInline ? 'text-brand-accent hover:underline' : 'text-brand-dark hover:text-brand-accent'}`}>
          Taşınma Kontrol Listesine Göz Atın &rarr;
        </Link>
      </div>
    </div>
  );

  const errorHtml = (
    <div className="text-center py-4 space-y-4 flex flex-col items-center">
      <div className="bg-rose-100 text-rose-600 p-2.5 rounded-full">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-1">
        <h3 className={`font-display font-black text-xl ${isInline ? 'text-white' : 'text-brand-dark'}`}>Gönderim Başarısız</h3>
        <p className={`text-xs font-semibold ${isInline ? 'text-slate-300' : 'text-slate-700'}`}>{errorMessage}</p>
      </div>

      <p className={`text-xs font-medium ${isInline ? 'text-slate-400' : 'text-slate-600'}`}>Alternatif olarak doğrudan bize ulaşarak anında fiyat alabilirsiniz:</p>

      <div className="flex flex-col gap-2.5 w-full pt-2">
        <a
          href={SITE.phoneHref}
          onClick={() => trackEvent('telefon_tikla', { konum: 'form_hata_cta', sayfa: window.location.pathname })}
          className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black py-3 rounded-xl border border-brand-accent/20 transition-all duration-200 shadow-md text-xs flex items-center justify-center gap-2 w-full"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Hemen Arayın: {SITE.phoneDisplay}</span>
        </a>

        <button
          onClick={() => setStatus('idle')}
          className={`font-bold text-xs pt-2 cursor-pointer ${isInline ? 'text-slate-300 hover:text-white hover:underline' : 'text-brand-dark hover:underline'}`}
        >
          Formu Yeniden Düzenle
        </button>
      </div>
    </div>
  );

  // If inline (rendered inside Hero card), skip the section styling wrapper and headings
  if (isInline) {
    return (
      <div className="text-left">
        {status === 'success' ? successHtml : status === 'error' ? errorHtml : formFieldsHtml}
      </div>
    );
  }

  // Default section wrapper layout
  return (
    <section className="py-20 bg-brand-dark relative text-white" id="iletisim">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-accent font-bold text-xs tracking-widest">ANINDA TEKLİF</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Taşınma Maliyetiniz Nasıl Hesaplanır?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Oda sayısını ve kat durumunuzu seçin, Kırşehir içi ve şehirlerarası taşınma fiyat aralığınızı anında görün.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs md:text-sm text-slate-300 font-semibold">
              <div className="flex items-center gap-3">
                <span className="bg-brand-accent/20 text-brand-accent p-2 rounded-full font-bold">✓</span>
                <span>Bilgileriniz üçüncü şahıslarla paylaşılmaz.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-brand-accent/20 text-brand-accent p-2 rounded-full font-bold">✓</span>
                <span>E-posta adresi istemiyoruz, spam göndermiyoruz.</span>
              </div>
            </div>
          </div>

          {/* Right Form card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-2xl text-slate-800">
            {status === 'success' ? successHtml : status === 'error' ? errorHtml : formFieldsHtml}
          </div>

        </div>
      </div>
    </section>
  );
}
