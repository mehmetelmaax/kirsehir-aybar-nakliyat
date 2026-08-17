import { SITE } from '@/lib/site-config';
import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import Breadcrumb from '@/components/Breadcrumb';
import QuoteForm from '@/components/QuoteForm';
import ContactMap from '@/components/ContactMap';

export const metadata: Metadata = {
  title: 'İletişim',
  description: "Kırşehir Aybar Nakliyat Merkez ofis iletişim bilgileri. Fiyat teklifi almak, rezervasyon yapmak veya bilgi edinmek için bize ulaşın.",
  alternates: {
    canonical: '/iletisim',
  },
};

export default function IletisimPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      
      <main id="main" className="pt-24 bg-brand-light">
        <Breadcrumb items={[{ name: 'İletişim', url: '/iletisim' }]} className="pt-4" />
        
        {/* Dynamic Intro Banner */}
        <section className="py-20 bg-navy text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
              BİZE ULAŞIN
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              İletişim Bilgilerimiz
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
              Taşınma planınız için teklif almak veya rezervasyon yapmak üzere bizimle irtibata geçin.
            </p>
          </div>
        </section>

        {/* WOW Asymmetric contact layout */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Dark Contact Information Box (5 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-brand-dark text-white rounded-2xl p-8 border border-brand-accent/20 shadow-2xl relative overflow-hidden">
                <div className="absolute right-[-10%] top-[-10%] w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <h2 className="font-display font-extrabold text-xl border-b border-white/10 pb-4 text-white">
                  Ofis ve İletişim Detayları
                </h2>
                
                <div className="space-y-6 text-sm text-slate-300 mt-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-accent/15 text-brand-accent p-2 rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-0.5">Adres:</span>
                      <p className="text-slate-400">{SITE.address.street}, {SITE.address.locality} / {SITE.address.region}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-accent/15 text-brand-accent p-2 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-0.5">Telefon / GSM:</span>
                      <a href={SITE.phoneHref} className="text-brand-accent hover:underline font-bold text-base">
                        {SITE.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-accent/15 text-brand-accent p-2 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-0.5">E-Posta:</span>
                      <a href={`mailto:${SITE.email}`} className="text-slate-400 hover:text-brand-accent transition-colors">
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-accent/15 text-brand-accent p-2 rounded-lg">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-0.5">Çalışma Saatleri:</span>
                      <p className="text-slate-400">Hafta İçi ve Hafta Sonu: {SITE.hours.opens} – {SITE.hours.closes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Estimate Form Box (7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200/60 shadow-md">
              <div className="mb-6">
                <span className="text-brand-accent font-bold text-[10px] tracking-widest block uppercase">HIZLI TEKLİF AL</span>
                <h3 className="font-display font-extrabold text-brand-dark text-xl mt-0.5">Taşınma Bedeli Hesaplama Formu</h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">Formu doldurarak Kırşehir genelinde taşınma fiyatlarınızı anında hesaplayabilirsiniz.</p>
              </div>
              <QuoteForm isInline={true} />
            </div>

          </div>

          {/* Bottom Full-Width Column: Map Embed with Cookie Consent Gate */}
          <ContactMap />
        </section>
      </main>
    </>
  );
}
