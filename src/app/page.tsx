import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, DISTRICTS } from '@/lib/site-config';
import HeroSlider from '@/components/HeroSlider';
import TrustStrip from '@/components/TrustStrip';
import ServicesGrid from '@/components/ServicesGrid';
import FAQAccordion from '@/components/FAQAccordion';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import JsonLd from '@/components/JsonLd';
import { organizationSchema, websiteSchema, faqSchema } from '@/lib/schema';
import { faqs } from '@/lib/faq-data';
import { Star, ShieldAlert, BadgeCheck, Users2, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Kırşehir Evden Eve Nakliyat | Aybar Nakliyat Sabit Fiyat',
  },
  description: "Kırşehir'de taşınma günü ek ücret çıkarmayan, sabit fiyat garantili asansörlü evden eve nakliyat firması. Merkez ve Kaman ilçelerinde sigortalı taşıma.",
  keywords: [
    'kirsehir evden eve nakliyat',
    'aybar evden eve nakliyat',
    'aybar evden eve',
    'merkez evden eve nakliyat',
    'kaman evden eve nakliyat',
    'kirsehir nakliyat firmalari',
  ],
  alternates: {
    canonical: '/',
  },
};

interface Review {
  name: string;
  location: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Metin T.',
    location: 'Kaman / Kırşehir',
    comment: 'Gerçekten söz verdikleri saatte geldiler, hiçbir eşyaya zarar gelmedi. Fiyatta ne anlaştıysak o oldu, teşekkürler.',
    rating: 5,
  },
  {
    name: 'Semih B.',
    location: 'Merkez / Kırşehir',
    comment: 'Mobilyaların sökümünü ve montajını çok hızlı yaptılar. Asansörlü taşıma sistemi gerçekten çok pratik.',
    rating: 5,
  },
  {
    name: 'Elif K.',
    location: 'Çiçekdağı / Kırşehir',
    comment: 'Paketleme kalitesi çok başarılıydı. Kırılacak eşyaların hepsini özenle sardılar. Güvenle tercih edebilirsiniz.',
    rating: 5,
  },
];

export default function Home() {
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      websiteSchema(),
      faqSchema(faqs)
    ]
  };

  return (
    <>
      <JsonLd data={graphSchema} />
      
      <main className="flex-1 w-full bg-brand-dark">
        {/* Hero Area */}
        <HeroSlider />

        {/* Local Verified badges */}
        <TrustStrip />

        {/* Neden Aybar Section (DARK) */}
        <section className="py-24 bg-brand-dark border-t border-white/5" id="neden-aybar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
                Kurumsal Farkımız
              </span>
              <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
                Neden Aybar Kırşehir Nakliyat?
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Taşınma günündeki sürpriz ek masraf ve hasar endişelerinizi yasal güvencelerle ortadan kaldırıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-brand-darker p-8 rounded-2xl border border-white/10 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 space-y-4 shadow-sm text-white">
                <div className="bg-brand-accent/10 text-brand-accent p-3.5 rounded-xl w-fit">
                  <BadgeCheck className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">Sabit Fiyat Sözleşmesi</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Taşıma öncesinde hazırladığımız resmi sözleşme ile anlaşılan fiyatı sabitliyoruz. Taşınma günü veya yol bittiğinde hiçbir ad altında ek ücret talep etmiyoruz.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-brand-darker p-8 rounded-2xl border border-white/10 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 space-y-4 shadow-sm text-white">
                <div className="bg-brand-accent/10 text-brand-accent p-3.5 rounded-xl w-fit">
                  <Users2 className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">Eğitimli Kadrolu Personel</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ekiplerimizin tamamı marangozluk ve beyaz eşya tesisatı konularında deneyimli kendi çalışanlarımızdır. Günlük yevmiyeli veya güvencesiz hamal çalıştırmıyoruz.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-brand-darker p-8 rounded-2xl border border-white/10 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 space-y-4 shadow-sm text-white">
                <div className="bg-brand-accent/10 text-brand-accent p-3.5 rounded-xl w-fit">
                  <Building2 className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">Kendi Mobil Asansör Filomuz</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Dışarıdan kiralık asansör aramak yerine, 25. kata kadar ulaşan kendi araç filomuzdaki mobil asansör sistemlerini sevk ederek işlerin aksamasını önlüyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Services */}
        <ServicesGrid />

        {/* Call to Action banner (YELLOW) */}
        <section className="py-20 bg-brand-accent text-brand-dark text-center relative overflow-hidden">
          {/* Background contrast glow */}
          <div className="absolute right-[-10%] top-[-10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto px-4">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight text-brand-dark">
              Hemen Sabit Fiyatlı Teklifinizi Alın
            </h2>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed font-medium">
              Dairenizin oda durumunu seçin, asansör ihtiyacınızı belirterek taşınma bedelinizi hemen hesaplayın.
            </p>
            <Link
              href="/teklif-al"
              className="bg-brand-dark hover:bg-brand-darker text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-200 inline-block text-base shadow-lg hover:shadow-xl active:scale-95"
            >
              Maliyeti Hesapla
            </Link>
          </div>
        </section>

        {/* Operational Steps (DARK) */}
        <section className="py-24 bg-[#111111] border-t border-white/5" id="surec">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
                İşleyiş Modeli
              </span>
              <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-tight">
                Nasıl Taşıyoruz?
              </h2>
              <p className="text-slate-300 text-sm md:text-base">
                Taşınma gününün karmaşasını ortadan kaldıran 4 adımlı standart çalışma modelimiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-white">
              {/* Step 1 */}
              <div className="space-y-4 text-center md:text-left relative">
                <span className="font-display font-extrabold text-brand-accent/20 text-5xl md:text-6xl block">01</span>
                <h3 className="font-display font-bold text-white text-lg">Hızlı Keşif ve Fiyatlama</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Oda sayınızı ve eşya miktarınızı analiz edip net, sabit fiyat teklifimizi sözleşmeyle sunarız.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 text-center md:text-left">
                <span className="font-display font-extrabold text-brand-accent/20 text-5xl md:text-6xl block">02</span>
                <h3 className="font-display font-bold text-white text-lg">Özenli Paketleme</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Eşyalarınızı çift katlı havalı balonlu naylonlar ve kalın Kraft karton kutularla darbeye karşı sararız.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 text-center md:text-left">
                <span className="font-display font-extrabold text-brand-accent/20 text-5xl md:text-6xl block">03</span>
                <h3 className="font-display font-bold text-white text-lg">Asansörlü Yükleme</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Kendi dış cephe asansörlerimizle eşyaları dar apartman merdivenlerine sokmadan doğrudan araca indiririz.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-4 text-center md:text-left">
                <span className="font-display font-extrabold text-brand-accent/20 text-5xl md:text-6xl block">04</span>
                <h3 className="font-display font-bold text-white text-lg">Montaj ve Yerleşim</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Yeni evinizde gardırop marangoz montajını yapar, beyaz eşyaları bağlar ve çalışır halde teslim ederiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kırşehir'in Tüm İlçelerinde Hizmetteyiz Section (WHITE) */}
        <section className="py-24 bg-white border-t border-slate-200/60" id="ilcelerimiz">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
                Geniş Hizmet Ağı
              </span>
              <h2 className="font-display font-extrabold text-brand-dark text-3xl md:text-4xl tracking-tight leading-tight">
                Kırşehir'in Tüm İlçelerinde Hizmetteyiz
              </h2>
              <p className="text-brand-gray text-base leading-relaxed">
                Kırşehir merkezli araç filomuzla Merkez'den Akçakent'e kadar 7 ilçenin tamamında asansörlü ve sigortalı ev taşıma desteği sağlıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {DISTRICTS.map((d, idx) => {
                const anchors = [
                  `${d.name} evden eve nakliyat`,
                  `${d.name} ev taşıma firması`,
                  `${d.name} asansörlü nakliye`,
                  `${d.name} nakliyat hizmetleri`,
                ];
                const anchorText = anchors[idx % anchors.length];
                return (
                  <div key={d.slug} className="bg-white p-6 rounded-2xl border border-slate-200/60 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-3 shadow-sm text-brand-dark">
                    <h3 className="font-display font-bold text-brand-dark text-base">{d.name} Şubesi</h3>
                    <p className="text-brand-gray text-xs leading-relaxed">
                      {d.name} ilçesinde yüksek katlı daireler için modüler dış cephe asansörlerimizle sabit fiyatlı ev nakliyat hizmeti vermekteyiz.
                    </p>
                    <Link
                      href={`/bolgeler/${d.slug}`}
                      className="text-brand-dark font-extrabold hover:text-brand-accent transition-colors block text-xs"
                    >
                      {anchorText} ➔
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Google Maps Reviews Section (DARK) */}
        <section className="py-24 bg-[#111111] border-t border-white/5" id="yorumlar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
                Müşteri Deneyimleri
              </span>
              <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-tight">
                Google Harita Yorumlarımız
              </h2>
              
              {/* Average rating badge */}
              <div className="flex items-center justify-center gap-2 mt-4 bg-white/5 px-4 py-2 rounded-full w-fit mx-auto border border-white/10 shadow-sm">
                <Star className="w-5 h-5 fill-brand-accent text-brand-accent" />
                <span className="text-white font-bold text-sm">4.9 / 5.0</span>
                <span className="text-slate-400 font-semibold text-xs border-l border-white/10 pl-2">184 Değerlendirme</span>
              </div>
            </div>

            {/* Reviews Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <div 
                  key={idx}
                  className="bg-brand-darker p-8 rounded-2xl border border-white/10 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div className="space-y-3">
                    {/* Stars */}
                    <div className="flex gap-1 text-brand-accent">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {/* Comment */}
                    <p className="text-slate-200 text-sm leading-relaxed font-semibold italic">
                      "{review.comment}"
                    </p>
                  </div>
                  {/* User Meta */}
                  <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{review.name}</span>
                    <span className="text-brand-accent font-bold tracking-wider">{review.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Google Review action */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
              <a
                href="https://share.google/oWZjSKYFsORoE2olK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm flex items-center gap-2 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
              >
                <Star className="w-4 h-4 fill-current" />
                <span>Google'da Yorum Yazın (Değerlendirin)</span>
              </a>
              <a
                href="https://share.google/oWZjSKYFsORoE2olK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-brand-accent font-bold text-sm flex items-center gap-1.5 transition-colors py-3"
              >
                <span>Tüm Yorumları Google Haritalar'da Oku</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>



        {/* FAQ Area */}
        <FAQAccordion />
      </main>

      {/* Floating CTA */}
      <StickyMobileCTA />
    </>
  );
}
