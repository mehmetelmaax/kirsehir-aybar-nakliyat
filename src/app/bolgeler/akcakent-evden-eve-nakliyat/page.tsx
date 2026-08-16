import QuoteForm from '@/components/QuoteForm';
import PricingMatrix from '@/components/geo/PricingMatrix';
import BuildingAnalysis from '@/components/geo/BuildingAnalysis';
import { FACTS } from '@/lib/facts';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { SITE } from '@/lib/site-config';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Building, Shield, ClipboardList, Coins, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Akçakent Evden Eve Nakliyat',
  description: "Akçakent bölgesinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma. Profesyonel paketleme ve marangoz desteği.",
  alternates: {
    canonical: '/bolgeler/akcakent-evden-eve-nakliyat',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AkçakentPage() {
  const sss = [
    {
      question: "Akçakent nakliyatında coğrafi şartlar taşımayı zorlaştırıyor mu?",
      answer: "Engebeli arazi yapısına karşın, deneyimli şoförlerimiz ve bakımlı araç filomuz sayesinde Akçakent taşımalarını hiçbir gecikme ve hasar olmaksızın tamamlıyoruz."
    },
    {
      question: "Zorlu kış aylarında Akçakent'e nakliye hizmeti var mı?",
      answer: "Evet. Kış lastikleri, zincir donanımları ve tecrübeli kadromuzla yılın 365 günü hava şartları ne olursa olsun kesintisiz hizmet vermekteyiz."
    }
  ];

  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema({
        name: 'Akçakent Evden Eve Nakliyat',
        description: "Akçakent bölgesinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
        slug: 'bolgeler/akcakent-evden-eve-nakliyat',
        areaName: 'Akçakent'
      }),
      faqSchema(sss)
    ]
  };

  const mahalleler = [
    'Yeni', 'Şehitkemal', 'Cumhuriyet'
  ];

  return (
    <>
      <JsonLd data={schemas} />
      
      <main className="pt-24 bg-off-white">
        <Breadcrumb items={[{ name: 'Bölgelerimiz', url: '/#ilcelerimiz' }, { name: 'Akçakent', url: '/bolgeler/akcakent-evden-eve-nakliyat' }]} className="pt-4" />
        
        {/* Intro Section */}
        <section className="py-20 bg-navy text-white text-center space-y-4">
          <span className="text-orange-text font-bold text-xs tracking-widest font-sans">
            KIRŞEHİR YEREL SERVİSİ
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Akçakent Evden Eve Nakliyat
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            Akçakent, Kırşehir'in en küçük ilçelerinden biri olup dağlık ve ormanlık arazi koşullarına sahiptir. Zorlu kış şartlarında zincirli ve kış lastikli araçlarımızla taşıma yapmaktayız. K3 yetki belgeli filomuzla en zorlu coğrafyalarda dahi güvenli nakliyat sağlıyoruz.
          </p>
        </section>

        {/* Detailed SEO Content Section */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* GEO / AEO AI Overview Summary Block */}
          <div className="bg-brand-accent/5 p-6 rounded-xl border-l-4 border-brand-accent space-y-2 shadow-sm">
            <span className="text-brand-dark font-extrabold text-[10px] tracking-widest uppercase block">Hızlı Özet / Yapay Zeka Özeti</span>
            <p className="text-brand-dark text-sm leading-relaxed font-semibold">
              "Kırşehir Akçakent evden eve nakliyat, Akçakent ilçesindeki az katlı veya müstakil evlerin asansörlü ve sigortalı araçlarla taşınmasıdır. Kırşehir Aybar Nakliyat, Akçakent bölgesinde K3 belgeli ekibiyle sabit fiyat garantili taşıma hizmeti vermektedir."
            </p>
          </div>
          
          {/* Section 1: Giriş ve Genel Bilgi */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange" />
              <span>Güvenilir Akçakent Nakliye Çözümleri Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akçakent bölgesinde evden eve nakliyat süreçleri titiz bir planlama gerektirir. Kırşehir Aybar Nakliyat olarak, sektörel tecrübemizle Akçakent bölgesindeki tüm ev taşıma ihtiyaçlarınıza profesyonel çözümler sunuyoruz. Taşınma gününün stresini en aza indirmek için eşyalarınızın tamamını sigortalı taşıma kapsamına alıyor, mobilyalarınızın de-montaj ve montaj işlemlerini tecrübeli marangoz ekibimizle gerçekleştiriyoruz. Sabit fiyat garantimiz sayesinde anlaştığımız taşıma bedeli taşınma gününde asla değişmez ve bütçeniz güvence altında kalır. Eşyalarınızın yol boyunca hasar görmemesi adına her taşıma öncesinde özel darbe emici Kraft ambalaj naylonları kullanıyor ve eşyaların sarsıntısız taşınması için kapalı çelik kasalı araçlarımızı sevk ediyoruz.
            </p>
          </div>

          <PricingMatrix />
          <BuildingAnalysis districtName="Akçakent" />
          <RelatedLinks currentSlug="akcakent-evden-eve-nakliyat" type="bolge" />

          {/* Section 2: Mahalleler */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange" />
              <span>Akçakent'de Hizmet Verdiğimiz Mahalleler Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akçakent ilçesinin dört bir yanına ayrım yapmaksızın hızlı ve güvenilir nakliye ekiplerimizi sevk ediyoruz. Her mahallede farklı sokak genişliği, apartman yapısı ve asansör kurulum açısı bulunduğundan, operasyon öncesinde detaylı yer analizi yapmaktayız. İşte bölgede yoğun olarak hizmet verdiğimiz başlıca mahalleler:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {mahalleler.map((mah, idx) => (
                <div key={idx} className="bg-off-white p-4 rounded-lg border border-gray-light/60 text-center font-bold text-navy text-sm">
                  {mah}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Bina Yapısı ve Asansör İhtiyacı */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Building className="w-6 h-6 text-orange" />
              <span>Akçakent Bina Yapısı ve Asansör İhtiyacı Nedir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akçakent ilçesi engebeli ve dağlık arazi yapısına sahip olup, konutlar genellikle müstakil ahşap veya betonarme köy evleridir. Dar ve yokuşlu sokaklarda büyük nakliye tırları yerine daha kıvrak orta boy nakliye kamyonlarımızı tercih etmekteyiz. Bu sayede binalara en yakın noktaya kadar erişim sağlayarak eşya taşıma mesafesini minimumda tutuyoruz.
            </p>
          </div>

          {/* Section 4: Fiyatlar Tablosu */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Coins className="w-6 h-6 text-orange" />
              <span>Akçakent Evden Eve Nakliyat Fiyatları Ne Kadardır?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Kırşehir Aybar Nakliyat tarafından sunulan ev taşıma maliyetleri binaların kat yüksekliklerine, asansör durumuna ve eşya hacmine göre belirlenmektedir. Akçakent bölgesi için hazırladığımız tahmini fiyat tablosu şu şekildedir:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-3 font-display rounded-tl-lg">Daire Tipi</th>
                    <th className="p-3 font-display">Ortalama Eşya Hacmi</th>
                    <th className="p-3 font-display rounded-tr-lg">Fiyat Aralığı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-light text-charcoal">
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">1+1 Daire Taşıma</td>
                    <td className="p-3">Hafif Hacim (3 Personel)</td>
                    <td className="p-3 font-bold text-orange-text">11.000 TL - 14.000 TL</td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">2+1 Daire Taşıma</td>
                    <td className="p-3">Orta Hacim (4 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-orange-text">14.000 TL - 19.000 TL</td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">3+1 Daire Taşıma</td>
                    <td className="p-3">Yoğun Hacim (5 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-orange-text">17.000 TL - 22.000 TL</td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">4+1 Daire Taşıma</td>
                    <td className="p-3">Geniş Hacim (6 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-orange-text">22.000 TL - 28.000 TL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="space-y-2">
              <span className="font-bold text-navy text-sm block">Fiyatları Etkileyen 5 Temel Faktör Detayı:</span>
              <ul className="list-disc list-inside text-sm text-charcoal space-y-1 pl-2">
                <li>Eşya hacmi ve oda sayısı: Eşyalarınız arttıkça kullanılacak ambalaj malzemesi ve personel sayısı artar.</li>
                <li>Kat seviyeleri ve dış cephe asansörü kurulumu: Yüksek katlı binalarda teleskopik asansör kullanımı fiyata yansır.</li>
                <li>Taşınma mesafesi (yakıt tüketimi): İlçeler arası mesafeler yakıt tüketimini belirler.</li>
                <li>Marangozluk işçiliği: Gardırop, yatak ve ünitelerin söküm ve kurulum detayları fiyatı etkiler.</li>
                <li>Ekstra paketleme ve kolileme talepleri: Mutfak kırılacakları ve ufak eşyaların kolilenmesini bizden talep edebilirsiniz.</li>
              </ul>
            </div>
            <p className="text-xs text-charcoal/70 italic border-l-2 border-orange pl-3">
              Not: Yukarıdaki fiyatlar Akçakent içi standart taşınmalar için tahmini aralıkları belirtmektedir. En kesin ve sabit fiyat teklifi ücretsiz ekspertiz sürecimizden sonra verilmektedir.
            </p>
          </div>

          {/* Section 5: Komşu İlçeler İç Linkler */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-orange" />
              <span>Akçakent İlçesinden Diğer Bölgelere Taşıma Güzergahları Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akçakent merkezli filomuzla yalnızca bu ilçe içinde değil, Kırşehir'in tüm komşu ve uzak ilçelerine de K3 yetki belgeli kamyonlarımızla taşımacılık hizmeti veriyoruz. Her ilçenin mesafesi ve yol durumuna göre özel lojistik plan hazırlıyoruz. Sıkça taşıma gerçekleştirdiğimiz bölgelere aşağıdaki bağlantılardan ulaşabilirsiniz:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-navy/10 text-navy">
                    <th className="p-3 rounded-tl-lg font-display">Destinasyon Bölgesi</th>
                    <th className="p-3 font-display">Mesafe (Ortalama)</th>
                    <th className="p-3 rounded-tr-lg font-display">Hizmet Sayfası Bağlantısı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-light text-charcoal">
                  
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-semibold">Akçakent - Akpınar Nakliyat</td>
                    <td className="p-3">45 km</td>
                    <td className="p-3">
                      <Link href="/bolgeler/akpinar-evden-eve-nakliyat" className="text-orange-text font-bold hover:underline">
                        Akpınar Evden Eve Nakliyat Hizmetleri
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-semibold">Akçakent - Çiçekdağı Nakliyat</td>
                    <td className="p-3">35 km</td>
                    <td className="p-3">
                      <Link href="/bolgeler/cicekdagi-evden-eve-nakliyat" className="text-orange-text font-bold hover:underline">
                        Çiçekdağı Evden Eve Nakliyat Hizmetleri
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6: Süreç ve Adımlar */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-orange" />
              <span>Akçakent İlçesinde Ev Taşıma Süreci Nasıl Yürütülür?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Müşterilerimize sorunsuz bir taşınma deneyimi sunmak adına, operasyonu 4 ana aşamada standart hale getirdik:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-navy pl-4 space-y-1">
                <span className="font-bold text-navy text-sm">1. Adım: Ön Hazırlık ve Fiyat Tespiti</span>
                <p className="text-charcoal text-xs leading-relaxed">
                  WhatsApp veya telefon üzerinden alınan detaylı bilgilerle eşyalarınızın miktarı, kat yüksekliği ve asansör durumu analiz edilerek net bir sabit fiyat teklifi sunulur.
                </p>
              </div>
              <div className="border-l-4 border-navy pl-4 space-y-1">
                <span className="font-bold text-navy text-sm">2. Adım: Ambalajlama ve Demontaj</span>
                <p className="text-charcoal text-xs leading-relaxed">
                  Taşıma sabahı belirlenen saatte gelen ekibimizdeki marangoz yatak odası, dolap ve üniteleri demonte eder. Tüm eşyalarınız darbe emici ambalaj malzemeleriyle sarılır.
                </p>
              </div>
              <div className="border-l-4 border-navy pl-4 space-y-1">
                <span className="font-bold text-navy text-sm">3. Adım: Asansörlü Yükleme</span>
                <p className="text-charcoal text-xs leading-relaxed">
                  Eşyalarınız bina dış cephesine kurulan teleskopik mobil asansörümüz vasıtasıyla pencerelerden doğrudan nakliye aracına indirilerek istiflenir.
                </p>
              </div>
              <div className="border-l-4 border-navy pl-4 space-y-1">
                <span className="font-bold text-navy text-sm">4. Adım: Kurulum ve Teslimat</span>
                <p className="text-charcoal text-xs leading-relaxed">
                  Yeni adreste asansör kurularak eşyalar daireye çıkarılır. Marangozumuz dolapların montajını tamamlar, beyaz eşyaların bağlantıları yapılıp anahtar teslim edilir.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: SSS */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-orange" />
              <span>Akçakent Nakliyat Süreci Hakkında Sıkça Sorulan Sorular Nelerdir?</span>
            </h2>
            <div className="space-y-4">
              {sss.map((item, idx) => (
                <div key={idx} className="border-b border-gray-light pb-4 space-y-2">
                  <span className="font-bold text-navy text-sm block">Q: {item.question}</span>
                  <p className="text-charcoal text-xs md:text-sm leading-relaxed">A: {item.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Sticky Mobile Call and WhatsApp buttons */}
        <QuoteForm />
      </main>
    </>
  );
}
