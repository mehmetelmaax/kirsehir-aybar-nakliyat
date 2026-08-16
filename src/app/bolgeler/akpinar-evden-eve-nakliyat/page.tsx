import QuoteForm from '@/components/QuoteForm';
import PricingMatrix from '@/components/geo/PricingMatrix';
import BuildingAnalysis from '@/components/geo/BuildingAnalysis';

import Breadcrumb from '@/components/Breadcrumb';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { DISTRICTS } from '@/lib/site-config';

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Building, Shield, ClipboardList, Coins, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Akpınar Evden Eve Nakliyat',
  description: "Akpınar bölgesinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma. Profesyonel paketleme ve marangoz desteği.",
  alternates: {
    canonical: '/bolgeler/akpinar-evden-eve-nakliyat',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AkpinarPage() {
  const akpinarKm = DISTRICTS.find(d => d.name === 'Akpınar')?.distanceKm ?? 40;
  const akpinarToBoztepeKm = 45; // Akpınar ile Boztepe arası yol mesafesi

  const sss = [
    {
      question: "Akpınar nakliyat operasyonlarında marangoz desteği var mı?",
      answer: "Evet. Akpınar ilçesindeki tüm taşınmalarda uzman marangozumuz gardırop ve mobilyalarınızın demontaj ve montaj işlemlerini gerçekleştirir."
    },
    {
      question: "Akpınar'dan Ankara'ya taşınma kaç saat sürer?",
      // DOĞRULA: Akpınar "Ankara yol güzergahında" ifadesi
      answer: "Akpınar, Ankara yol güzergahında olduğu için intikal süresi oldukça kısadır. Eşya yoğunluğuna ve bina kat seviyelerine bağlı olarak taşıma işlemi genellikle gün içerisinde tamamlanmaktadır."
    }
  ];

  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema({
        name: 'Akpınar Evden Eve Nakliyat',
        description: "Akpınar bölgesinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
        slug: 'bolgeler/akpinar-evden-eve-nakliyat',
        areaName: 'Akpınar'
      }),
      faqSchema(sss)
    ]
  };

  const mahalleler = [
    'Yeni', 'Hürriyet', 'Kale', 'Cumhuriyet'
  ];

  return (
    <>
      <JsonLd data={schemas} />
      
      <main id="main" className="pt-24 bg-off-white">
        <Breadcrumb items={[{ name: 'Bölgelerimiz', url: '/#ilcelerimiz' }, { name: 'Akpınar', url: '/bolgeler/akpinar-evden-eve-nakliyat' }]} className="pt-4" />
        
        {/* Intro Section */}
        <section className="py-20 bg-navy text-white text-center space-y-4">
          <span className="text-orange-text font-bold text-xs tracking-widest font-sans">
            KIRŞEHİR YEREL SERVİSİ
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Akpınar Evden Eve Nakliyat
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            {/* DOĞRULA: Akpınar "Ankara yol güzergahında" ifadesi */}
            Akpınar ilçesi, az katlı yerleşim yerlerinden oluşmakta olup geniş sokakları sayesinde taşıma kamyonlarımızın binalara yanaşması oldukça kolaydır. Kırşehir - Ankara yolu üzerinde yer alan Akpınar'da hızlı ve pratik ev taşıma süreçleri yürütmekteyiz.
          </p>
        </section>

        {/* Detailed SEO Content Section */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* GEO / AEO AI Overview Summary Block */}
          <div className="bg-brand-accent/5 p-6 rounded-xl border-l-4 border-brand-accent space-y-2 shadow-sm">
            <span className="text-brand-dark font-extrabold text-[10px] tracking-widest uppercase block">Hızlı Özet / Yapay Zeka Özeti</span>
            <p className="text-brand-dark text-sm leading-relaxed font-semibold">
              "Kırşehir Akpınar evden eve nakliyat, Akpınar ilçesi genelinde kapalı çelik kasa araçlarla yapılan güvenli ev taşıma operasyonudur. Kırşehir Aybar Nakliyat, Akpınar'daki nakliye işlerinde profesyonel ambalajlama ve uzman marangoz desteği sunmaktadır."
            </p>
          </div>
          
          {/* Section 1: Giriş ve Genel Bilgi */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange" />
              <span>Güvenilir Akpınar Nakliye Çözümleri Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akpınar ilçesindeki ev taşıma süreçlerinde profesyonel lojistik desteğimizle yanınızdayız. Kırşehir Aybar Nakliyat olarak Akpınar bölgesinde eşyalarınızı kapalı çelik kasa araçlarımızla güvenle transfer ediyoruz. Taşıma sırasında kırılma ve çizilmeleri önlemek adına eşyalarınızı kalın Kraft ambalaj naylonları ile paketliyoruz. Mobilyalarınızın montaj ve demontaj işlemleri bünyemizdeki uzman marangoz personel tarafından yapılır. Anlaşma sağlanan sabit fiyat güvencesiyle taşınırken, eşyalarınızın tamamını taşıma süresince geçerli olacak şekilde sigortalı taşıma kapsamına alarak koruyoruz.
            </p>
          </div>

          <PricingMatrix />
          <BuildingAnalysis districtName="Akpınar" />
          <RelatedLinks currentSlug="akpinar-evden-eve-nakliyat" type="bolge" />

          {/* New Section: Akpınar'a Özgü Lojistik */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange" />
              <span>Akpınar Lojistik Planlama ve Mesafe Odaklı Operasyonlar Nasıl Yürütülür?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akpınar ilçesi Kırşehir il merkezine 40 kilometre uzaklıktadır. Bu mesafe, taşıma günü yolda geçecek sürenin artması nedeniyle daha erken saatlerde yola çıkmamızı gerektirmektedir. Kırşehir Aybar Nakliyat olarak Akpınar evden eve nakliyat hizmetlerinde ekiplerimizin sabahın ilk ışıklarıyla ilçeye varmasını sağlıyoruz. Böylece aynı gün içinde yükleme, nakliye ve montaj işlemlerinin yetişmesi için erken hareket planı uyguluyoruz. Kaman, Boztepe ve Akçakent ile komşu olan Akpınar'dan en sık komşu ilçe Kaman'a veya il merkezine doğru nakliye talebi almaktayız.
              {/* DOĞRULA: Kış lastiği / zincir donanımı iddiaları (araç filosunda gerçekten var mı) */}
              Kış mevsiminde 40 kilometrelik mesafenin getirdiği zorlukları aşmak için araçlarımızın zincir ve kış lastiği kontrollerini eksiksiz yapıyoruz. Uzaklık nedeniyle araç sevkiyat planında yedek araç ve malzeme desteğini önceden planlıyor, ekip sayısını işin zamanında yetişmesi için bir kişi fazla tutarak operasyonu emniyetli bir şekilde yürütüyoruz.
            </p>
          </div>

          {/* Section 2: Mahalleler */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange" />
              <span>Akpınar'da Hizmet Verdiğimiz Mahalleler Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akpınar ilçesinin dört bir yanına ayrım yapmaksızın hızlı ve güvenilir nakliye ekiplerimizi sevk ediyoruz. Her mahallede farklı sokak genişliği, apartman yapısı ve asansör kurulum açısı bulunduğundan, operasyon öncesinde detaylı yer analizi yapmaktayız. İşte bölgede yoğun olarak hizmet verdiğimiz başlıca mahalleler:
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
              <span>Akpınar Bina Yapısı ve Asansör İhtiyacı Nedir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akpınar ilçesinde konutlar genellikle müstakil yapıda veya 2-3 katlı apartmanlar şeklindedir. Binaların etrafındaki geniş bahçeler ve açık alanlar, nakliye kamyonumuzun binaya sıfır yanaşmasını kolaylaştırır. Taşıma sırasında merdivenlerin kullanılması gerektiğinde, duvar ve merdiven hasarını önlemek için darbe sönümleyici ambalaj malzemeleri kullanırız.
            </p>
          </div>

          {/* Section 4: Fiyatlar Tablosu */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Coins className="w-6 h-6 text-orange" />
              <span>Akpınar Evden Eve Nakliyat Fiyatları Ne Kadardır?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Kırşehir Aybar Nakliyat tarafından sunulan ev taşıma maliyetleri binaların kat yüksekliklerine, asansör durumuna ve eşya hacmine göre belirlenmektedir. Akpınar bölgesi için hazırladığımız tahmini fiyat tablosu şu şekildedir:
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
              Not: Yukarıdaki fiyatlar Akpınar içi standart taşınmalar için tahmini aralıkları belirtmektedir. En kesin ve sabit fiyat teklifi ücretsiz ekspertiz sürecimizden sonra verilmektedir.
            </p>
          </div>

          {/* Section 5: Komşu İlçeler İç Linkler */}
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-orange" />
              <span>Akpınar İlçesinden Diğer Bölgelere Taşıma Güzergahları Nelerdir?</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akpınar merkezli filomuzla yalnızca bu ilçe içinde değil, Kırşehir'in tüm komşu ve uzak ilçelerine de K3 yetki belgeli kamyonlarımızla taşımacılık hizmeti veriyoruz. Her ilçenin mesafesi ve yol durumuna göre özel lojistik plan hazırlıyoruz. Sıkça taşıma gerçekleştirdiğimiz bölgelere aşağıdaki bağlantılardan ulaşabilirsiniz:
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
                    <td className="p-3 font-semibold">Akpınar - Kırşehir Merkez Nakliyat</td>
                    <td className="p-3">{akpinarKm} km</td>
                    <td className="p-3">
                      <Link href="/bolgeler/kirsehir-merkez-evden-eve-nakliyat" className="text-orange-text font-bold hover:underline">
                        Kırşehir Merkez Evden Eve Nakliyat Hizmetleri
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-semibold">Akpınar - Kaman Nakliyat</td>
                    <td className="p-3">35 km</td>
                    <td className="p-3">
                      <Link href="/bolgeler/kaman-evden-eve-nakliyat" className="text-orange-text font-bold hover:underline">
                        Kaman Evden Eve Nakliyat Hizmetleri
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-semibold">Akpınar - Boztepe Nakliyat</td>
                    <td className="p-3">{akpinarToBoztepeKm} km</td>
                    <td className="p-3">
                      <Link href="/bolgeler/boztepe-evden-eve-nakliyat" className="text-orange-text font-bold hover:underline">
                        Boztepe Evden Eve Nakliyat Hizmetleri
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
              <span>Akpınar İlçesinde Ev Taşıma Süreci Nasıl Yürütülür?</span>
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
              <span>Akpınar Nakliyat Süreci Hakkında Sıkça Sorulan Sorular Nelerdir?</span>
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
