import { SITE } from '@/lib/site-config';
import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Map } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import Breadcrumb from '@/components/Breadcrumb';
import QuoteForm from '@/components/QuoteForm';

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
      
      <main className="pt-24 bg-brand-light">
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
                      <p className="text-slate-400">Ahi Evran Mahallesi, Merkez / Kırşehir</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-brand-accent/15 text-brand-accent p-2 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-0.5">Telefon / GSM:</span>
                      <a href={SITE.phoneHref} className="text-brand-accent hover:underline font-bold text-base">
                        0537 312 34 47
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
                      <p className="text-slate-400">Hafta İçi ve Hafta Sonu: 07:00 – 22:00</p>
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

          {/* Bottom Full-Width Column: Map Embed */}
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
                href="https://share.google/YoiHqgk0tx65LVd0H"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold py-3 px-6 rounded-xl transition-all duration-200 text-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Yol Tarifi Alın</span>
              </a>
            </div>

            {/* Map Iframe */}
            <div className="w-full aspect-video md:aspect-[3/1] rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-brand-dark/5 relative">
              <iframe
                title="Kırşehir Aybar Nakliyat Google Harita Konumu"
                src="https://maps.google.com/maps?q=Kırşehir%20Aybar%20Evden%20Eve%20Nakliyat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 animate-fade-in"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
