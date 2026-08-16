import { FACTS } from './facts';

export const SITE = {
  name: 'Kırşehir Aybar Nakliyat',
  legalName: 'Aybar Evden Eve Nakliyat ve Asansörlü Taşımacılık',
  shortName: 'Aybar Nakliyat',
  url: 'https://kirsehiraybarnakliyat.com.tr',
  locale: 'tr_TR',
  description: "Kırşehir'de sabit fiyat garantili, K3 belgeli, sigortalı asansörlü evden eve nakliyat.",
  phone: '+905373123447',
  phoneDisplay: '0537 312 34 47',
  phoneHref: 'tel:+905373123447',
  whatsapp: '905414645890',
  whatsappHref: 'https://wa.me/905414645890',
  email: 'info@kirsehiraybarnakliyat.com.tr',
  address: {
    street: 'Ahi Evran Mahallesi', // DOĞRULA: Açık adres doğruluğunu firma sahibi teyit etmeli.
    locality: 'Merkez',
    region: 'Kırşehir',
    postalCode: '40100',
    country: 'TR',
  },
  geo: { lat: 39.145, lng: 34.163 },
  hours: { opens: '08:00', closes: '20:00' },
  foundingYear: FACTS.foundedYear,
  priceRange: '$$',
  social: { facebook: '', instagram: '', youtube: '' },
} as const;

export const SERVICES = [
  {
    slug: 'sehirici-evden-eve-nakliyat',
    name: 'Şehiriçi Evden Eve Nakliyat',
    shortName: 'Şehiriçi Nakliyat',
    title: 'Kırşehir Şehir İçi Ev Taşıma | Aybar Nakliyat',
    description: "Kırşehir merkez ve ilçelerinde aynı gün içinde asansörlü, sigortalı ve marangoz montaj dahil şehir içi evden eve nakliyat hizmeti. Hemen sabit fiyat alın.",
    icon: 'Truck'
  },
  {
    slug: 'sehirlerarasi-evden-eve-nakliyat',
    name: 'Şehirlerarası Evden Eve Nakliyat',
    shortName: 'Şehirlerarası Nakliyat',
    title: 'Kırşehir Şehirlerarası Ev Taşıma | Aybar Nakliyat',
    description: "Kırşehir'den Türkiye genelinde 81 ile sigortalı, marangozlu ve sözleşmeli şehirlerarası evden eve nakliyat hizmeti. Sabit fiyat garantisiyle taşının.",
    icon: 'Globe'
  },
  {
    slug: 'asansorlu-evden-eve-nakliyat',
    name: 'Asansörlü Evden Eve Nakliyat',
    shortName: 'Asansörlü Nakliyat',
    title: 'Kırşehir Asansörlü Ev Taşıma | Aybar Nakliyat',
    description: "Kırşehir'de yüksek katlı daireler için 25. kata kadar ulaşan mobil dış cephe eşya asansörü kiralama ve güvenli asansörlü evden eve nakliye hizmeti.",
    icon: 'ArrowUpRight'
  },
  {
    slug: 'ofis-ve-isyeri-tasimaciligi',
    name: 'Ofis ve İşyeri Taşımacılığı',
    shortName: 'Ofis Taşıma',
    title: 'Kırşehir Ofis ve İşyeri Taşıma | Aybar Nakliyat',
    description: "Kırşehir'de kurumsal ofis, arşiv, büro ve işyeri taşıma hizmeti. Numaralı etiketli kutulama, asansörlü taşıma ve sigorta güvencesiyle sıfır kayıp.",
    icon: 'Building2'
  },
  {
    slug: 'profesyonel-esya-paketleme',
    name: 'Profesyonel Eşya Paketleme',
    shortName: 'Eşya Paketleme',
    title: 'Profesyonel Eşya Paketleme Hizmeti | Aybar Nakliyat',
    description: "Kırşehir'de ev taşırken mobilya, beyaz eşya ve kırılacak cam eşyaların çift kat balonlu naylon, Kraft kağıt ve koruma kutularıyla ambalajlanması.",
    icon: 'ShieldCheck'
  },
  {
    slug: 'ucretsiz-ekspertiz',
    name: 'Ücretsiz Ekspertiz',
    shortName: 'Ücretsiz Ekspertiz',
    title: 'Ücretsiz Ekspertiz Hizmeti | Aybar Nakliyat',
    description: "Kırşehir'de taşınma öncesinde eşya hacmini, kat durumunu ve asansör kurulum açısını yerinde veya görüntülü inceleyerek sabit fiyat teklifi sunma süreci.",
    icon: 'FileText'
  },
  {
    slug: 'esya-depolama',
    name: 'Eşya Depolama',
    shortName: 'Eşya Depolama',
    title: 'Kırşehir Eşya Depolama Hizmeti | Aybar Nakliyat',
    description: "Kırşehir'de aylık kiralık eşya depolama çözümleri. Güvenlik kameralı, rutubetsiz ve sigortalı konteyner depolarımızda eşyalarınızı güvenle saklayın.",
    icon: 'Warehouse'
  },
  {
    slug: 'parca-esya-tasima',
    name: 'Parça Eşya Taşıma',
    shortName: 'Parça Eşya Taşıma',
    title: 'Kırşehir Parça Eşya Taşıma | Aybar Nakliyat',
    description: "Kırşehir'de tek parça, az eşya veya öğrenci evi taşımacılığı. Uygun fiyatlı parça eşya nakliye tır ve kamyonetlerimizle hızlı taşıma hizmeti.",
    icon: 'Package'
  },
  {
    slug: 'piyano-ve-kasa-tasima',
    name: 'Piyano ve Kasa Taşıma',
    shortName: 'Piyano ve Kasa Taşıma',
    title: 'Kırşehir Piyano ve Ağır Kasa Taşıma | Aybar Nakliyat',
    description: "Kırşehir'de kuyruklu/duvar piyanosu, çelik para kasası ve hassas ağır yük taşımacılığı. Özel liftli araçlar ve askı sistemleriyle hasarsız transfer.",
    icon: 'Boxes'
  }
] as const;

export const DISTRICTS = [
  {
    slug: 'kirsehir-merkez-evden-eve-nakliyat',
    name: 'Merkez',
    tier: 'merkez',
    neighbors: ['kaman', 'mucur', 'boztepe'],
    distanceKm: 0,
    indexable: true,
    updatedAt: '2026-08-16'
  },
  {
    slug: 'kaman-evden-eve-nakliyat',
    name: 'Kaman',
    tier: 'ilce',
    neighbors: ['merkez', 'akpinar', 'cicekdagi'],
    distanceKm: 55,
    indexable: true,
    updatedAt: '2026-08-16'
  },
  {
    slug: 'mucur-evden-eve-nakliyat',
    name: 'Mucur',
    tier: 'ilce',
    neighbors: ['merkez', 'boztepe'],
    distanceKm: 20,
    indexable: true,
    updatedAt: '2026-08-16'
  },
  {
    slug: 'cicekdagi-evden-eve-nakliyat',
    name: 'Çiçekdağı',
    tier: 'ilce',
    neighbors: ['akcakent', 'kaman'],
    distanceKm: 65,
    indexable: true,
    updatedAt: '2026-08-16'
  },
  {
    slug: 'akpinar-evden-eve-nakliyat',
    name: 'Akpınar',
    tier: 'ilce',
    neighbors: ['kaman', 'boztepe', 'akcakent'],
    distanceKm: 40,
    indexable: true,
    updatedAt: '2026-08-16'
  },
  {
    slug: 'boztepe-evden-eve-nakliyat',
    name: 'Boztepe',
    tier: 'ilce',
    neighbors: ['merkez', 'mucur', 'akpinar'],
    distanceKm: 15,
    indexable: true,
    updatedAt: '2026-08-16'
  },
  {
    slug: 'akcakent-evden-eve-nakliyat',
    name: 'Akçakent',
    tier: 'ilce',
    neighbors: ['cicekdagi', 'akpinar'],
    distanceKm: 70,
    indexable: true,
    updatedAt: '2026-08-16'
  }
] as const;


