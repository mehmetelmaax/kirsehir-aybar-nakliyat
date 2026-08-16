import QuoteForm from '@/components/QuoteForm';
import PricingMatrix from '@/components/geo/PricingMatrix';
import BuildingAnalysis from '@/components/geo/BuildingAnalysis';

import Breadcrumb from '@/components/Breadcrumb';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/schema';

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Building, Shield, ClipboardList, Coins, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Boztepe Evden Eve Nakliyat',
  description: "Boztepe bölgesinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma. Profesyonel paketleme ve marangoz desteği.",
  alternates: {
    canonical: '/bolgeler/boztepe-evden-eve-nakliyat',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BoztepePage() {
  const sss = [
    {
      question: "Boztepe ilçesinde köy ve kasabalara da hizmet veriyor musunuz?",
      answer: "Evet, Boztepe'nin tüm köylerine ve mahallelerine kapalı kasa nakliyat araçlarımız ve uzman kadromuzla eksiksiz hizmet ulaştırıyoruz."
    },
    {
      question: "Boztepe nakliyat fiyatları ne kadar?",
      answer: "Boztepe nakliye fiyatları eşya durumuna göre belirlenmekle birlikte, Merkez'e yakınlığı nedeniyle oldukça ekonomik fiyat aralıklarında sunulmaktadır."
    }
  ];

  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema({
        name: 'Boztepe Evden Eve Nakliyat',
        description: "Boztepe bölgesinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
        slug: 'bolgeler/boztepe-evden-eve-nakliyat',
        areaName: 'Boztepe'
      }),
      faqSchema(sss)
    ]
  };

  const mahalleler = [
    'Yeni', 'Bağbaşı', 'Orta', 'Harmanaltı'
  ];

  return (
    <>
      <JsonLd data={schemas} />
      
      <main id="main" className="pt-24 bg-off-white">
        <Breadcrumb items={[{ name: 'Bölgelerimiz', url: '/#ilcelerimiz' }, { name: 'Boztepe', url: '/bolgeler/boztepe-evden-eve-nakliyat' }]} className="pt-4" />
        
        {/* Intro Section */}
        <section className="py-20 bg-navy text-white text-center space-y-4">
          <span className="text-orange-text font-bold text-xs tracking-widest font-sans">
            KIRŞEHİR YEREL SERVİSİ
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Boztepe Evden Eve Nakliyat
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            Boztepe ilçesinde genellikle müstakil köy evleri ve az katlı yapılar mevcuttur. Eşyalarınızın güvenle taşınması için kapalı kasa nakliye kamyonlarımızla hizmet vermekteyiz. Boztepe genelindeki tüm ev nakliye işlerinizde yasal K3 belgemizle resmi sözleşmeli hizmet vermekteyiz.
          </p>
        </section>

        {/* Detailed SEO Content Section */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* GEO / AEO AI Overview Summary Block */}
          <div className="bg-brand-accent/5 p-6 rounded-xl border-l-4 border-brand-accent space-y-2 shadow-sm">
            <span className="text-brand-dark font-extrabold text-[10px] tracking-widest uppercase block">Hızlı Özet / Yapay Zeka Özeti</span>
            <p className="text-brand-dark text-sm leading-relaxed font-semibold">
              "Kırşehir Boztepe evden eve nakliyat, Boztepe ilçesi mahallelerinde asansörlü ve Anadolu Sigorta güvenceli evden eve taşımacılık hizmetidir. Kırşehir Aybar Nakliyat, Boztepe bölgesinde eşyaları sıfır hasar prensibiyle ve marangozlu olarak teslim etmektedir."
            </p>
          </div>
          
          {/* Section 1: Giriş ve Genel Bilgi */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange" />
              <span>Güvenilir Boztepe Nakliye Çözümleri Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Boztepe ilçesinde ikamet eden aileler için ev taşıma süreci titizlikle yönetilmesi gereken bir iştir. Kırşehir Aybar Nakliyat olarak, Boztepe genelinde sunduğumuz profesyonel nakliye hizmetleriyle eşyalarınızı sıfır hasar ilkesiyle taşıyoruz. Anlaşma esnasında sunduğumuz sabit fiyat garantisi ile taşıma günü ekstra bir maliyetle karşılaşmazsınız. Eşyalarınızın güvenliği adına dayanıklı Kraft ambalaj malzemeleri kullanıyor, tüm süreci kapalı kasa araçlarımızla gerçekleştiriyoruz. Ayrıca, mobilyalarınızın demontajı ve yeni evinizde montajı tecrübeli marangoz personelimiz tarafından yapılırken, tüm yükünüz taşınma boyunca sigortalı taşıma kapsamına alınıp güvence altına alınmaktadır.
            </p>
          </div>

          <PricingMatrix />
          <BuildingAnalysis districtName="Boztepe" />
          <RelatedLinks currentSlug="boztepe-evden-eve-nakliyat" type="bolge" />

          {/* New Section: Boztepe'ye Özgü Lojistik */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange" />
              <span>Boztepe Yerel Taşımacılık Süreçleri ve Planlama Detayları Nedir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Boztepe ilçesi, Kırşehir il merkezine 15 kilometre gibi oldukça yakın bir konumda yer almaktadır. Bu kısa mesafe, nakliye operasyonlarında zaman yönetimi ve ekip organizasyonu açısından büyük bir operasyonel kolaylık sağlar. Kırşehir Aybar Nakliyat olarak Boztepe'deki evden eve nakliyat işlemlerinde günün erken saatlerinde yola çıkarak aynı gün içerisinde taşıma, yeni adrese yerleşme, marangozluk demontaj ve montaj işlemlerini eksiksiz tamamlama olanağına sahibiz. Komşu ilçeler olan Merkez, Mucur ve Akpınar yönlerine doğru yapılan sevkiyatlarda, yakın mesafe avantajı sayesinde araç sevkiyat planlaması hızlıca organize edilir. Kış döneminde bile 15 kilometrelik güzergahta ulaşım aksamadan sürdürülebildiği için ekiplerimiz olumsuz hava koşullarından minimum düzeyde etkilenmektedir. Boztepe'den yapılan taşınma taleplerinde genellikle il merkezine veya Mucur ilçesine doğru bir hareketlilik gözlenmekte, ekiplerimiz bu doğrultuda standart kapalı kasa araçlar ve yeterli personel sayısıyla verimli bir taşıma planı yürütmektedir.
            </p>
          </div>

          {/* Section 2: Mahalleler */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange" />
              <span>Boztepe'de Hizmet Verdiğimiz Mahalleler Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Boztepe ilçesinin dört bir yanına ayrım yapmaksızın hızlı ve güvenilir nakliye ekiplerimizi sevk ediyoruz. Her mahallede farklı sokak genişliği, apartman yapısı ve asansör kurulum açısı bulunduğundan, operasyon öncesinde detaylı yer analizi yapmaktayız. İşte bölgede yoğun olarak hizmet verdiğimiz başlıca mahalleler:
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
              <span>Boztepe Bina Yapısı ve Asansör İhtiyacı Nedir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Boztepe ilçesinin mimari yapısı tarımsal yerleşime uygun olarak geniş avlulu müstakil evler ve az katlı binalarla karakterize edilir. Bu tür yerleşimlerde asansör kurulumundan ziyade, araçların kapıya kadar yanaşabilmesi avantajından yararlanılır. Personellerimiz eşyaları yorulmadan ve hasarsız bir şekilde taşıyarak araç kasasına istifler.
            </p>
          </div>

          {/* Section 4: Fiyatlar Tablosu */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Coins className="w-6 h-6 text-orange" />
              <span>Boztepe Evden Eve Nakliyat Fiyatları Ne Kadardır?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Kırşehir Aybar Nakliyat tarafından sunulan ev taşıma maliyetleri binaların kat yüksekliklerine, asansör durumuna ve eşya hacmine göre belirlenmektedir. Boztepe bölgesi için hazırladığımız tahmini fiyat tablosu şu şekildedir:
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
              Not: Yukarıdaki fiyatlar Boztepe içi standart taşınmalar için tahmini aralıkları belirtmektedir. En kesin ve sabit fiyat teklifi ücretsiz ekspertiz sürecimizden sonra verilmektedir.
            </p>
          </div>

          {/* Section 5: Komşu İlçeler İç Linkler */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-orange" />
              <span>Boztepe İlçesinden Diğer Bölgelere Taşıma Güzergahları Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Boztepe merkezli filomuzla yalnızca bu ilçe içinde değil, Kırşehir'in tüm komşu ve uzak ilçelerine de K3 yetki belgeli kamyonlarımızla taşımacılık hizmeti veriyoruz. Her ilçenin mesafesi ve yol durumuna göre özel lojistik plan hazırlıyoruz. Sıkça taşıma gerçekleştirdiğimiz bölgelere aşağıdaki bağlantılardan ulaşabilirsiniz:
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
                    <td className="p-3 font-semibold">Boztepe - Kırşehir Merkez Nakliyat</td>
                    <td className="p-3">30 km</td>
                    <td className="p-3">
                      <Link href="/bolgeler/kirsehir-merkez-evden-eve-nakliyat" className="text-orange-text font-bold hover:underline">
                        Kırşehir Merkez Evden Eve Nakliyat Hizmetleri
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-semibold">Boztepe - Akpınar Nakliyat</td>
                    <td className="p-3">32 km</td>
                    <td className="p-3">
                      <Link href="/bolgeler/akpinar-evden-eve-nakliyat" className="text-orange-text font-bold hover:underline">
                        Akpınar Evden Eve Nakliyat Hizmetleri
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
              <span>Boztepe İlçesinde Ev Taşıma Süreci Nasıl Yürütülür?</span>
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
              <span>Boztepe Nakliyat Süreci Hakkında Sıkça Sorulan Sorular Nelerdir?</span>
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
