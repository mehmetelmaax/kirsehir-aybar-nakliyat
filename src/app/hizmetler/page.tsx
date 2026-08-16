import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Truck, Globe, ArrowUpRight, Building2, ShieldCheck, FileText, Warehouse, Package, Boxes } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { SITE, SERVICES } from '@/lib/site-config';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

// Helper to map dynamic string icons to actual components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Truck,
  Globe,
  ArrowUpRight,
  Building2,
  ShieldCheck,
  FileText,
  Warehouse,
  Package,
  Boxes
};

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: "Kırşehir Aybar Nakliyat asansörlü taşıma, şehiriçi/şehirlerarası nakliyat, eşya depolama ve profesyonel paketleme lojistik çözümleri.",
  alternates: {
    canonical: '/hizmetler',
  },
};

export default function HizmetlerPage() {
  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Anasayfa', url: '/' },
        { name: 'Hizmetlerimiz', url: '/hizmetler' }
      ])
    ]
  };

  return (
    <>
      <JsonLd data={schemas} />
      <main className="pt-24 bg-off-white flex-1 w-full">
        <Breadcrumb items={[{ name: 'Hizmetlerimiz', url: '/hizmetler' }]} className="pt-4" />
        
        {/* Intro */}
        <section className="py-20 bg-navy text-white text-center space-y-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
              PROFESYONEL LOJİSTİK ÇÖZÜMLERİ
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Taşımacılık Hizmetlerimiz
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
              Kırşehir genelinde K3 yetki belgemiz, asansörlü filomuz ve sigorta güvencemizle sunduğumuz evden eve nakliye hizmetlerimiz.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Truck;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="bg-brand-accent/10 text-brand-dark p-3.5 rounded-xl w-fit">
                      <IconComponent className="w-6 h-6 text-brand-dark" />
                    </div>
                    <h2 className="font-display font-extrabold text-brand-dark text-lg md:text-xl">
                      {service.name}
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white font-bold py-3 px-4 rounded-xl transition-all text-xs active:scale-95 cursor-pointer"
                  >
                    <span>Hizmet Detayları ve Fiyatlar</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
