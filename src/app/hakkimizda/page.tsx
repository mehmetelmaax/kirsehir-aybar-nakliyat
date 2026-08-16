import React from 'react';
import type { Metadata } from 'next';
import { Users, Award, Calendar, CheckCircle2, Star } from 'lucide-react';

import Breadcrumb from '@/components/Breadcrumb';
import K3InfoBlock from '@/components/geo/K3InfoBlock';
import { FACTS } from '@/lib/facts';

const experienceYears = new Date().getFullYear() - FACTS.foundedYear;

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: `${FACTS.foundedYear} yılından beri Kırşehir Merkez merkezli olarak K3 yetki belgesi ve özmal asansör filomuzla profesyonel evden eve nakliye hizmetleri sunuyoruz.`,
  alternates: {
    canonical: '/hakkimizda',
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      
      <main id="main" className="pt-24 bg-brand-light">
        <Breadcrumb items={[{ name: 'Hakkımızda', url: '/hakkimizda' }]} className="pt-4" />
        
        {/* Dynamic Intro Banner (Styled via globals.css using the new sub-banner asset) */}
        <section className="py-20 bg-navy text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
              Kurumsal Profilimiz
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Kırşehir Aybar Nakliyat
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {FACTS.foundedYear} yılından bu yana Kırşehir genelinde asansörlü ve sigortalı ev taşıma hizmetleri sunuyoruz.
            </p>
          </div>
        </section>

        {/* WOW Asymmetric UI/UX Layout - 2 Columns Split Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Industrial Summary Card (5 Columns, Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="bg-brand-dark text-white rounded-2xl p-8 border border-brand-accent/20 shadow-2xl relative overflow-hidden">
                {/* Background accent glow */}
                <div className="absolute right-[-10%] top-[-10%] w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <span className="text-brand-accent font-bold text-[10px] tracking-widest uppercase block mb-2">KURUMSAL DEĞERLER</span>
                <h2 className="font-display font-extrabold text-2xl tracking-tight text-white leading-tight">
                  Kırşehir'in Lojistik Güvencesi
                </h2>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Aybar Lojistik olarak, ev taşımayı bir stres kaynağı olmaktan çıkarıp profesyonel bir süreç yönetimi haline getiriyoruz.
                </p>

                {/* Key Metrics grid */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="space-y-1">
                    <p className="text-brand-accent font-display font-extrabold text-2xl">20+ Yıl</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sektör Deneyimi</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-brand-accent font-display font-extrabold text-2xl">K3 Yetki</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Yasal Taşımacılık</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-brand-accent font-display font-extrabold text-2xl">%100</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Kadrolu Ekip</p>
                  </div>
                  <div className="space-y-1 flex items-center gap-1.5">
                    <div>
                      <p className="text-brand-accent font-display font-extrabold text-2xl flex items-center gap-1">
                        4.9 <Star className="w-4 h-4 fill-current" />
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Google Puanı</p>
                    </div>
                  </div>
                </div>

                {/* Bullet checklist */}
                <div className="space-y-3 mt-8 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>Hasarsızlık Sigorta Teminatı</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>25. Kata Kadar Teleskopik Asansör</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>Sabit Fiyat Sözleşmesi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Timeline & Info Blocks (7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Block 1: History */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="bg-brand-accent/10 text-brand-dark p-3.5 rounded-xl w-fit">
                  <Calendar className="w-6 h-6 text-brand-dark" />
                </div>
                <h2 className="font-display font-extrabold text-brand-dark text-xl md:text-2xl">
                  Firmamızın Kuruluş Tarihi ve Tarihçesi
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Kırşehir Aybar Nakliyat, {FACTS.foundedYear} yılında Aybar ailesi tarafından Kırşehir Merkez merkezli olarak kurulmuş yasal bir ev taşıma şirketidir. Geçen {experienceYears} yıllık süre zarfında, Kırşehir şehir içi ve şehirlerarası güzergahlarda binlerce ailenin ev ve ofis taşıma lojistiğini başarıyla yönettik.
                </p>
              </div>

              {/* Block 2: K3 License */}
              <K3InfoBlock />

              {/* Block 3: Personnel */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="bg-brand-accent/10 text-brand-dark p-3.5 rounded-xl w-fit">
                  <Users className="w-6 h-6 text-brand-dark" />
                </div>
                <h2 className="font-display font-extrabold text-brand-dark text-xl md:text-2xl">
                  Personel Yapımız ve Kadro Düzeni
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Kırşehir Aybar Nakliyat bünyesinde çalışan tüm personelimiz, marangozluk, tesisatçılık ve paketleme alanlarında eğitimli kadrolu çalışanlardan oluşmaktadır. Taşınma günlerinde dışarıdan günlük yevmiyeli veya güvencesiz işçi çalıştırmıyor, ekiplerimizde en az bir sertifikalı marangoz bulunduruyoruz.
                </p>
              </div>

              {/* Block 4: Fleet */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="bg-brand-accent/10 text-brand-dark p-3.5 rounded-xl w-fit">
                  <Award className="w-6 h-6 text-brand-dark" />
                </div>
                <h2 className="font-display font-extrabold text-brand-dark text-xl md:text-2xl">
                  Araç ve Asansör Filomuz
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Aybar Nakliyat araç filosu, çelik kapalı kasa ev eşyası nakliye kamyonları ve 25. kata kadar ulaşabilen mobil dış cephe eşya asansörlerinden oluşmaktadır. Araçlarımızın tamamı logolu olup, periyodik temizlik ve bakımları düzenli olarak yapılmaktadır.
                </p>
              </div>

            </div>
            
          </div>
        </section>
      </main>
    </>
  );
}
