import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Truck } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

import { routesDatabase } from '@/lib/routes-data';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Şehirlerarası Nakliyat Rotalarımız',
  description: "Kırşehir çıkışlı Ankara, İstanbul, İzmir ve tüm Türkiye geneli şehirlerarası evden eve nakliye rotalarımız, mesafeler ve güzergah rehberleri.",
  alternates: {
    canonical: '/rotalar',
  },
};

export default function RotalarPage() {
  const routes = Object.values(routesDatabase);

  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Anasayfa', url: '/' },
        { name: 'Rotalarımız', url: '/rotalar' }
      ])
    ]
  };

  return (
    <>
      <JsonLd data={schemas} />
      <main id="main" className="pt-24 bg-off-white flex-1 w-full">
        <Breadcrumb items={[{ name: 'Rotalarımız', url: '/rotalar' }]} className="pt-4" />
        
        {/* Intro */}
        <section className="py-20 bg-navy text-white text-center space-y-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
              TÜM TÜRKİYE'YE SEVKİYAT
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Şehirlerarası Taşıma Rotalarımız
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
              Kırşehir çıkışlı olarak düzenli sefer gerçekleştirdiğimiz şehirlerarası nakliyat güzergahlarını, otoyol detaylarını ve mesafe sürelerini aşağıda inceleyebilirsiniz.
            </p>
          </div>
        </section>

        {/* Routes Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes.map((route, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="bg-brand-accent/10 text-brand-dark p-3.5 rounded-xl w-fit">
                    <Truck className="w-6 h-6 text-brand-dark" />
                  </div>
                  <h2 className="font-display font-extrabold text-brand-dark text-lg md:text-xl">
                    Kırşehir - {route.city} Nakliyat
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {route.introText}
                  </p>
                  
                  {/* Distance & Duration info */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Mesafe</span>
                      <span className="text-brand-dark text-sm font-bold">{route.distanceKm} km</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Süre</span>
                      <span className="text-brand-dark text-sm font-bold">{route.durationHours} Saat</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/rotalar/${route.slug}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white font-bold py-3 px-4 rounded-xl transition-all text-xs active:scale-95 cursor-pointer"
                >
                  <span>Rota Detayları ve Fiyatlar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
