export interface RouteData {
  slug: string;
  city: string;
  distanceKm: number;
  durationHours: number;
  priceRangeMin: number;
  priceRangeMax: number;
  viaRoute: string;
  notes: string;
  introText: string;
  distanceText: string;
  pricingText: string;
  routeText: string;
  insuranceText: string;
  tipsText: string;
  faq: { question: string; answer: string }[];
}

export const routesDatabase: Record<string, RouteData> = {
  'kirsehir-istanbul-evden-eve-nakliyat': {
    slug: 'kirsehir-istanbul-evden-eve-nakliyat',
    city: 'İstanbul',
    distanceKm: 700,
    durationHours: 8,
    priceRangeMin: 45000,
    priceRangeMax: 72000,
    viaRoute: 'Kırıkkale, Ankara, Bolu güzergâhı ve Kuzey Marmara Otoyolu',
    notes: 'İstanbul girişinde nakliye kamyonları için uygulanan Yavuz Sultan Selim Köprüsü zorunluluğu ve şehir içi saat kısıtlamaları dikkate alınmalıdır.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den İstanbul'un tüm ilçelerine (Kadıköy, Beşiktaş, Ümraniye, Başakşehir, Esenyurt dahil) profesyonel, K3 yetki belgeli ve sigortalı şehirlerarası evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığında uzman kadromuz, eşyalarınızın yol boyunca sarsıntı ve darbelere karşı zarar görmemesi için ambalaj malzemeleriyle koruma sağlar. Sabit fiyat garantimiz ile Kırşehir'den yola çıkan kamyonumuz, İstanbul'da kapıda ek ücret sürprizi yaşatmadan eşyalarınızı yeni dairenize teslim eder.",
    distanceText: "Kırşehir ile İstanbul arası karayolu mesafesi yaklaşık 700 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Taşıma sürecinde otoyol güzergâhı üzerinden seyreden kamyonlarımız, şoförlerimizin dinlenme ve sürüş güvenliği kurallarına uygun olarak hareket eder. İlk gün Kırşehir'de eşyaların de-montaj, paketleme ve yükleme işlemleri tamamlanarak kamyonumuz yola çıkar. İkinci gün sabahı İstanbul'daki yeni adresinize ulaşan ekiplerimiz, eşyaları asansör yardımıyla dairenize çıkartır ve mobilyaların montaj işlemlerini gerçekleştirerek taşınmayı tamamlar.",
    pricingText: "Kırşehir ile İstanbul arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 45.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. İstanbul taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 45.000 TL ile 56.000 TL arasında değişirken; 2+1 daire taşıma 49.000 TL ile 61.000 TL, 3+1 daire taşıma ise 53.000 TL ile 66.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den İstanbul'a taşıma yaparken tırlarımız ve büyük kamyonlarımız sırasıyla Kırşehir - Kırıkkale - Ankara - Bolu - Düzce - Sakarya - Kocaeli güzergâhını takip eder. İstanbul sınırlarına girildiğinde ağır vasıtalar için zorunlu olan Yavuz Sultan Selim Köprüsü ve Kuzey Marmara Otoyolu bağlantısı kullanılır. Avrupa Yakası'na geçecek araçlarımız için bu güzergâh trafik yoğunluğunu atlatmak ve güvenli sürüş sağlamak açısından son derece önemlidir. Her sevkiyatımız GPS araç takip sistemiyle donatılmış olup müşterilerimize anlık konum bilgisi paylaşılmaktadır.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Kırşehir'den yüklenen eşyalarınız İstanbul'daki yeni adresinizde teslim edilene kadar oluşabilecek kaza, yangın, doğal afet ve yol sarsıntı hasarlarına karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan nakliyat poliçesi, taşınma sabahında adınıza düzenlenerek sözleşmeyle birlikte tarafınıza teslim edilir. Eşyaların taşınması sırasında oluşabilecek çizik ve sürtünme gibi küçük hasarlar ise firma içi sorumluluk garantimiz kapsamındadır.",
    tipsText: "İstanbul'a taşınırken dikkat edilmesi gereken en kritik husus, şehir içi dar sokaklar ve site yönetimlerinin taşıma saatleri kısıtlamalarıdır. Kadıköy, Beşiktaş, Şişli gibi dar tarihi sokaklara sahip ilçelerde büyük nakliye kamyonlarının yanaşması zor olabilir. Bu durumlarda küçük nakliye kamyonetlerimizle transfer (aktarma) hizmeti organize etmekteyiz. Ayrıca yüksek katlı binalarda asansör kurulum izinlerinin ve site içi park yeri rezervasyonlarının taşınmadan en az 2 gün önce apartman yönetimleriyle görüşülerek alınmış olması, taşınma gününün sorunsuz geçmesini sağlayacaktır.",
    faq: [
      {
        question: "Kırşehir İstanbul nakliye süreci kaç gün sürer?",
        answer: "Eşyaların Kırşehir'de yüklenmesi ve İstanbul'da yeni adrese boşaltılarak kurulması toplamda 1-2 iş günü sürmektedir."
      },
      {
        question: "İstanbul'da dar sokaklarda taşıma nasıl yapılıyor?",
        answer: "Kamyonumuzun yanaşamadığı dar sokaklarda küçük aktarma araçları (pikap/kamyonet) kullanarak eşyaları güvenle dairenize taşıyoruz."
      },
      {
        question: "Sigorta poliçesi neleri kapsar, ücreti ne kadardır?",
        answer: "Sigorta poliçemiz yol kazaları, devrilme, yangın ve hırsızlık gibi riskleri kapsar. Poliçe bedeli teklif fiyatımıza dahildir, ekstra ücret alınmaz."
      },
      {
        question: "İstanbul'da asansörlü taşıma hizmeti veriyor musunuz?",
        answer: "Evet, İstanbul'daki yeni adresinizde dış cephe nakliye asansörü kurulumuna uygunluk varsa mobil asansör sistemimizi kurarak taşıma yapıyoruz."
      },
      {
        question: "Gardırop ve beyaz eşyaların montajını yapıyor musunuz?",
        answer: "Marangozumuz gardıropları kurar, tesisat ustamız ise çamaşır ve bulaşık makinesinin bağlantılarını tamamlar."
      },
      {
        question: "Ödemeyi ne zaman ve nasıl yapıyoruz?",
        answer: "Sözleşme anında küçük bir kapora alınır. Kalan tutarın yarısı Kırşehir'de yükleme bitiminde, kalan yarısı ise İstanbul'da teslimat sonrasında ödenir."
      }
    ]
  },
  'kirsehir-ankara-evden-eve-nakliyat': {
    slug: 'kirsehir-ankara-evden-eve-nakliyat',
    city: 'Ankara',
    distanceKm: 185,
    durationHours: 2.5,
    priceRangeMin: 26000,
    priceRangeMax: 49000,
    viaRoute: 'Kırıkkale, Bala doğrudan karayolu hattı',
    notes: 'Ankara merkezinde yüksek katlı konutlarda asansörlü taşımacılık yaygın olarak tercih edilmektedir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den başkent Ankara'nın tüm ilçelerine (Çankaya, Yenimahalle, Keçiören, Etimesgut, Gölbaşı dahil) asansörlü ve marangozlu evden eve nakliyat çözümleri sunmaktadır. İç Anadolu nakliye hattında haftalık düzenli seferler düzenleyen firmamız, parça eşyalarınızı veya komple evinizi profesyonel standartlarda taşır. Aybar Nakliyat güvencesiyle K3 yetki belgeli araçlarımız ve kadrolu ekibimiz, Kırşehir'deki de-montaj işlemlerinden Ankara'daki anahtar teslim montaj sürecine kadar tüm adımları büyük bir titizlikle yürütmektedir.",
    distanceText: "Kırşehir ile Ankara arası karayolu mesafesi yaklaşık 185 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Sabah saat 08:00'de Kırşehir'deki evinizde başlayan paketleme ve yükleme işlemleri öğleden sonra tamamlanır. Kamyonumuz karayolu üzerinden hareket ederek yaklaşık 2.5 saatlik sürüşün ardından aynı gün Ankara'daki yeni adresinize ulaşır ve eşyalarınızın kurulumuna başlanır.",
    pricingText: "Kırşehir ile Ankara arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 26.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Ankara taşımalarında yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 26.000 TL ile 33.000 TL arasında değişirken; 2+1 daire taşıma 30.000 TL ile 38.000 TL, 3+1 daire taşıma ise 34.000 TL ile 43.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Ankara'ya giden nakliye araçlarımız Kırıkkale - Bala - Gölbaşı hattı üzerinden veya doğrudan karayolu bağlantısı ile Ankara merkeze ulaşır. Toros dağları veya Niğde otoyolu Ankara rotasında bulunmamaktadır. Yol kalitesi sayesinde eşyalarınız minimum sarsıntıya maruz kalır. Araçlarımızın tümü karayolu taşıma kanunlarına uygun hız sınırlarında ilerler.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız otoyollarda seyir halindeyken yaşanabilecek her türlü kaza, devrilme, yangın riskine karşı tam bedel üzerinden sigortalanır. Sigorta poliçesi detaylarıyla birlikte taşınma öncesinde size teslim edilir. Eşyalarınızın yükleme esnasında apartman içinde veya asansörde görebileceği hasarlar da firmamızın güvencesi altındadır.",
    tipsText: "Ankara'ya taşınırken dikkat edilmesi gereken en önemli konu, özellikle Çankaya, Eryaman ve Batıkent gibi bölgelerde yoğun olarak yer alan çok katlı rezidans ve yüksek apartman yapılarıdır. Bu binalarda asansör kurulum alanının açık olması ve site yönetiminin yük asansörü kullanım saatlerine izin vermesi gerekir. Ayrıca kış aylarındaki kar ve buzlanma risklerine karşı araçlarımızın kar lastiği ve zincir donanımları tam olarak sevk edilmektedir.",
    faq: [
      {
        question: "Kırşehir Ankara nakliyat kaç saat sürer?",
        answer: "Yükleme bittikten sonra iki şehir arası sürüş süresi ortalama 2.5 saattir. Genellikle aynı gün kurulum tamamlanır."
      },
      {
        question: "Ankara'da yüksek katlı dairelere asansör kuruluyor mu?",
        answer: "Evet, Ankara'daki yeni daireniz kaçıncı katta olursa olsun 25. kata kadar ulaşabilen teleskopik asansörlerimizle hizmet veriyoruz."
      },
      {
        question: "Paketleme malzemeleriniz kaliteli mi?",
        answer: "Eşyalarınız için kalın ambalaj naylonları, Kraft kağıtlı mukavva koliler ve mobilyalara özel stretch sargılar kullanıyoruz."
      },
      {
        question: "Ankara'da askılı tekstil taşıma yapıyor musunuz?",
        answer: "Evet, gardıroptaki kıyafetleriniz için araçlarımızda özel askılı dolap sistemleri yer almaktadır, kırışmadan taşınırlar."
      },
      {
        question: "Ekstra ücret çıkma ihtimali var mı?",
        answer: "Hayır. Sözleşmede anlaştığımız sabit fiyat dışında hiçbir koşulda ek ücret talep etmiyoruz."
      },
      {
        question: "Rezervasyon işlemini ne kadar süre önce yapmalıyım?",
        answer: "Özellikle yaz dönemlerinde ve hafta sonlarında yoğunluk yaşandığı için taşınmadan en az 1 hafta önce rezervasyon yaptırmanızı öneririz."
      }
    ]
  },
  'kirsehir-mersin-evden-eve-nakliyat': {
    slug: 'kirsehir-mersin-evden-eve-nakliyat',
    city: 'Mersin',
    distanceKm: 430,
    durationHours: 5,
    priceRangeMin: 35000,
    priceRangeMax: 60000,
    viaRoute: 'Nevşehir, Niğde ve O-21 (Ankara-Tarsus Otoyolu) hattı',
    notes: 'Taşıma işlemleri genellikle mesafe ve yükleme sürelerine bağlı olarak planlı şekilde tamamlanır.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Mersin'e (Mezitli, Yenişehir, Tarsus, Toroslar, Erdemli dahil) hızlı, güvenilir ve profesyonel evden eve nakliyat hizmeti sağlamaktadır. Lojistik ağımız sayesinde eşyalarınızı paketliyor, yüklüyor ve yeni adresinizde montajını tamamlayarak teslim ediyoruz. Aybar Nakliyat olarak, Kırşehir-Mersin otoyol hattındaki taşımacılık süreçlerinde müşterilerimize hem ekonomik fiyatlar sunuyor hem de asansörlü taşıma kolaylığı sağlıyoruz.",
    distanceText: "Kırşehir ile Mersin arası karayolu mesafesi yaklaşık 430 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Taşınma sabahı başlayan yükleme işlemi sonrasında kamyonumuz karayolu üzerinden yaklaşık 5 saatlik sürüşle Mersin'e ulaşır. Mersin'deki yeni adresinizde eşyaların indirilmesi, kurulması ve tesisat bağlantılarının yapılmasıyla birlikte tüm taşınma süreci tamamlanmış olur.",
    pricingText: "Kırşehir ile Mersin arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 35.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Mersin taşımalarında yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 35.000 TL ile 44.000 TL arasında değişirken; 2+1 daire taşıma 39.000 TL ile 49.000 TL, 3+1 daire taşıma ise 43.000 TL ile 54.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Mersin'e giden nakliye araçlarımız O-21 otoyolunu kullanır. Araçlarımız sırasıyla Nevşehir - Niğde - Tarsus güzergâhını geçerek Mersin merkeze ve ardından Mezitli/Erdemli bölgesine ulaşır. Yol tamamen düz ve otoyol standartlarında olduğundan eşyaların sarsılma riski son derece düşüktür. Güvenli ve konforlu bir sürüşle eşyalarınız Mersin'deki yeni evinize teslim edilir.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınızın yol üzerinde seyir halindeyken veya yükleme-boşaltma esnasında yaşayabileceği tüm riskler poliçemiz kapsamındadır. Taşıma öncesinde hazırlanan poliçemiz sayesinde kafanız rahat bir şekilde yeni evinize yerleşebilirsiniz.",
    tipsText: "Mersin'e taşınırken dikkat edilmesi gereken husus, özellikle Mezitli ve Yenişehir sahil şeridindeki binaların rüzgar durumudur. Mersin'de deniz esintisi nedeniyle yüksek katlarda asansör kurulumu yapılırken rüzgar hızı ekiplerimizce kontrol edilir. Ayrıca yaz aylarındaki aşırı nem ve sıcaklık nedeniyle beyaz eşyaların ve elektroniklerin zarar görmemesi için havalandırmalı ambalaj malzemeleri kullanmaktayız.",
    faq: [
      {
        question: "Kırşehir'den Mersin'e taşınma kaç saat sürer?",
        answer: "Kırşehir ile Mersin arası sürüş süresi ortalama 5 saattir. Süreç genellikle 1-2 gün içerisinde tamamen bitmektedir."
      },
      {
        question: "Tarsus ilçesine de hizmet veriyor musunuz?",
        answer: "Evet, Kırşehir-Mersin yolu üzerindeki Tarsus ilçesine ve tüm Mersin ilçelerine günlük hizmetimiz vardır."
      },
      {
        question: "Mersin'de asansör kuruyor musunuz?",
        answer: "Evet, Mersin'deki yeni dairenizde balkon veya pencere açısı uygunsa dış cephe mobil asansörümüzü kuruyoruz."
      },
      {
        question: "Aynı gün içinde taşınmak mümkün mü?",
        answer: "Mesafe ve yükleme durumuna bağlı olarak planlama yapıyoruz. Eşyalarınızın durumuna göre teslimat süresi belirlenir."
      },
      {
        question: "Fiyatlarınıza klima söküm ve montajı dahil mi?",
        answer: "Klima montajı uzmanlık gerektirdiğinden fiyatlarımıza dahil değildir, ancak anlaşmalı klima servisimizle yönlendirme yapabiliriz."
      },
      {
        question: "Mersin yazlık evlerine parça eşya taşıyor musunuz?",
        answer: "Evet, yazlık bölgelere (Erdemli, Silifke, Çeşmeli) parça eşya ve yazlık eşya taşıma seferlerimiz mevcuttur."
      }
    ]
  },
  'kirsehir-gaziantep-evden-eve-nakliyat': {
    slug: 'kirsehir-gaziantep-evden-eve-nakliyat',
    city: 'Gaziantep',
    distanceKm: 570,
    durationHours: 6.5,
    priceRangeMin: 40000,
    priceRangeMax: 66000,
    viaRoute: 'Nevşehir, Niğde, Adana, Osmaniye otoyol güzergâhı',
    notes: 'TAG Otoyolu kullanılarak hızlı teslimat sağlanır. Gaziantep dik ve yokuşlu sokaklarında asansör kurulum alanı önceden tespit edilmelidir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Gaziantep'in tüm ilçelerine (Şahinbey, Şehitkamil, İslahiye, Nizip dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Güneydoğu lojistik hattında tecrübeli şoförlerimiz ve kadrolu taşıma ekiplerimizle eşyalarınızı özenle taşıyoruz. Paketlemeden montaja kadar tüm adımlarda ambalajlama ve koruma önlemlerini en üst düzeyde uygulayarak Gaziantep'teki yeni evinize sorunsuzca yerleşmenizi sağlıyoruz.",
    distanceText: "Kırşehir ile Gaziantep arası karayolu mesafesi yaklaşık 570 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Karayolu sürüş süresi nakliye araçlarımız için yaklaşık 6.5 saattir. Kırşehir'de yüklenen kamyonumuz, Gaziantep'teki yeni adresinize ulaşır ve ekiplerimiz tüm mobilyaları kurarak teslimatı gerçekleştirir.",
    pricingText: "Kırşehir ile Gaziantep arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 40.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Gaziantep taşımalarında yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 40.000 TL ile 50.000 TL arasında değişirken; 2+1 daire taşıma 44.000 TL ile 55.000 TL, 3+1 daire taşıma ise 48.000 TL ile 60.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Gaziantep'e giden nakliye araçlarımız Nevşehir - Niğde - Adana - Osmaniye - Gaziantep otoyol güzergâhını takip eder. TAG otoyolu üzerinden ulaşım sağlanır. Rampalarda ve virajlı yollarda araçlarımızın güvenliği için sürüş hız sınırlarına tam olarak uyulmaktadır.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Kırşehir'de yüklenen eşyalarınız Gaziantep'teki yeni evinize teslim edilene kadar yol kazaları, doğal afet ve hırsızlık risklerine karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçemiz taşınma öncesinde size sunulur.",
    tipsText: "Gaziantep'e taşınırken dikkat edilmesi gereken husus, Şahinbey ve Şehitkamil ilçelerindeki dik yokuşlar ve dar sokaklardır. Bu bölgelerde asansörlü nakliye kamyonunun yanaşabilmesi için sokak durumunun önceden analiz edilmesi gerekir. Ekiplerimiz gerekli durumlarda asansör kurulum alanını rezerve eder. Ayrıca yeni binaların yüksek katlarında asansör boşluklarının durumu önceden bina yönetimine sorulmalıdır.",
    faq: [
      {
        question: "Kırşehir Gaziantep nakliyat kaç saat sürer?",
        answer: "İki şehir arası karayolu sürüş mesafesi ortalama 6.5 saattir. Yükleme ve montaj dahil süreç genellikle 1-2 iş gününde tamamlanır."
      },
      {
        question: "Gaziantep Nizip ilçesine taşıma yapıyor musunuz?",
        answer: "Evet, Gaziantep'in Nizip, İslahiye, Nurdağı ve diğer tüm dış ilçelerine nakliye hizmeti sunuyoruz."
      },
      {
        question: "Asansör kurulumu fiyata dahil midir?",
        answer: "Evet, hem Kırşehir'de hem de Gaziantep'te asansör kurulumu fiyata dahildir, sonradan ek ücret talep edilmez."
      },
      {
        question: "Kırılacak eşyaları kim paketliyor?",
        answer: "Talebiniz doğrultusunda mutfak kırılacakları, bardaklar ve tabaklar ambalaj kağıtlarıyla ekiplerimizce kolilenir."
      },
      {
        question: "Gaziantep'te montaj işlerini kim yapıyor?",
        answer: "Ekiplerimizde yer alan marangozumuz gardırop, yatak ve ünitelerin kurulumunu Gaziantep'teki yeni evinizde tamamlar."
      },
      {
        question: "Ödeme seçenekleriniz nelerdir?",
        answer: "Ödemelerinizi teslimat sonrasında nakit, banka havalesi veya EFT yoluyla gerçekleştirebilirsiniz."
      }
    ]
  },
  'kirsehir-izmir-evden-eve-nakliyat': {
    slug: 'kirsehir-izmir-evden-eve-nakliyat',
    city: 'İzmir',
    distanceKm: 750,
    durationHours: 9,
    priceRangeMin: 46000,
    priceRangeMax: 74000,
    viaRoute: 'Ankara, Eskişehir, Afyonkarahisar, Uşak karayolu hattı',
    notes: 'Ege Bölgesi taşımalarında uzun yol nedeniyle eşyaların tır içinde sarsıntılara karşı ambalajlanması zorunludur.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Ege'nin incisi İzmir'in tüm ilçelerine (Karşıyaka, Bornova, Konak, Buca, Çeşme dahil) asansörlü, sigortalı ve profesyonel evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığındaki tecrübemizle, eşyalarınızın 750 kilometrelik İzmir yolculuğunu hasarsız tamamlaması için sabitleme ve koruma yöntemleri uyguluyoruz. K3 yetki belgeli araç filomuz ve uzman marangozlarımızla Kırşehir'den İzmir'e taşınma sürecinizi stressiz bir deneyime dönüştürüyoruz.",
    distanceText: "Kırşehir ile İzmir arası karayolu mesafesi yaklaşık 750 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. İlk gün Kırşehir'deki adresinizde eşyalarınız uzman ekiplerimizce ambalajlanır ve kapalı nakliye kamyonumuza yüklenir. Kamyonumuz İzmir'deki yeni adresinize ulaşır ve hemen asansör kurulumu yapılarak eşyaların daireye taşınması sağlanır.",
    pricingText: "Kırşehir ile İzmir arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 46.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. İzmir taşımalarında yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 46.000 TL ile 58.000 TL arasında değişirken; 2+1 daire taşıma 50.000 TL ile 63.000 TL, 3+1 daire taşıma ise 54.000 TL ile 68.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den İzmir'e giden nakliye araçlarımız Kırşehir - Kırıkkale - Ankara - Eskişehir - Afyonkarahisar - Uşak - Manisa - İzmir güzergâhını takip eder. Bu hat şehirlerarası ağır vasıta taşımacılığı için en güvenli yoldur. Yol boyunca şoförlerimiz yasal dinlenme sürelerine uyarak sürüş güvenliğini en üst seviyede tutarlar.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren İzmir'deki yeni adresinizde kurulana kadar oluşabilecek kaza, devrilme, yangın, sel gibi risklere karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçe nüshası taşınma sabahında adınıza düzenlenerek size takdim edilir.",
    tipsText: "İzmir'e taşınırken dikkat edilmesi gereken en önemli husus, özellikle Karşıyaka, Alsancak ve Göztepe gibi merkezi bölgelerdeki otopark sıkıntısı ve dar sokaklardır. Bu bölgelerde taşıma günü belediyeden park izni alınması veya otopark yerinin rezerve edilmesi süreci kolaylaştırır. Ayrıca Çeşme, Urla ve Seferihisar gibi yazlık bölgelere yapılacak taşımalarda uzun yol depolama ihtiyaçları önceden planlanmalıdır.",
    faq: [
      {
        question: "Kırşehir İzmir arası nakliye kaç gün sürer?",
        answer: "Yükleme ve yol dahil olmak üzere Kırşehir'den İzmir'e taşınma süreci toplam 1-2 iş gününde tamamlanmaktadır."
      },
      {
        question: "Çeşme ve Urla ilçelerine de hizmetiniz var mı?",
        answer: "Evet, İzmir'in Çeşme, Urla, Seferihisar, Aliağa gibi tüm dış ilçelerine ve yazlık bölgelerine taşıma yapıyoruz."
      },
      {
        question: "İzmir'de dış cephe asansörü kurulabiliyor mu?",
        answer: "Yeni adresinizde dış cephe asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörümüzü kuruyoruz."
      },
      {
        question: "Eşyalar araç içinde nasıl korunuyor?",
        answer: "Araç kasalarımız sunta kaplamalı olup, ambalajlandıktan sonra özel sabitleme ipleriyle kasa içine bağlanır."
      },
      {
        question: "Beyaz eşyaların bağlantısını yapıyor musunuz?",
        answer: "Evet, çamaşır ve bulaşık makinenizi yeni evinizde tesisata bağlayıp çalışır durumda teslim ediyoruz."
      },
      {
        question: "İzmir'den Kırşehir'e dönüş taşımaları da yapıyor musunuz?",
        answer: "Evet, İzmir-Kırşehir yönünde de aynı şekilde dönüş aracı avantajıyla ev taşıma hizmeti vermekteyiz."
      }
    ]
  },
  'kirsehir-antalya-evden-eve-nakliyat': {
    slug: 'kirsehir-antalya-evden-eve-nakliyat',
    city: 'Antalya',
    distanceKm: 570,
    durationHours: 7,
    priceRangeMin: 40000,
    priceRangeMax: 66000,
    viaRoute: 'Aksaray, Konya, Seydişehir karayolu hattı',
    notes: 'Antalya geçişindeki virajlı dağ yolları nedeniyle usta şoförler ve kapalı kasa araçlar tercih edilmelidir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Antalya'nın tüm bölgelerine (Muratpaşa, Konyaaltı, Kepez, Alanya, Manavgat dahil) K3 yetki belgeli, sigortalı ve marangozlu evden eve nakliyat hizmeti sunmaktadır. Antalya güzergâhında profesyonel şoförlerimiz ve kapalı nakliye tırlarımızla eşyalarınızı sarsıntısız bir şekilde taşıyoruz. Sabit fiyat garantimiz ile taşınma gününde hiçbir ek maliyet çıkarmadan eşyalarınızı Antalya'daki yeni adresinize teslim ediyoruz.",
    distanceText: "Kırşehir ile Antalya arası karayolu mesafesi yaklaşık 570 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Yol durumuna göre nakliye araçlarımızın varış süresi ortalama 7 saattir. Kırşehir'de yüklenen eşyalar genellikle ertesi gün Antalya'da yeni adrese ulaştırılır ve kurulum işlemleri başlatılır.",
    pricingText: "Kırşehir ile Antalya arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 40.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Antalya taşımalarında yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 40.000 TL ile 50.000 TL arasında değişirken; 2+1 daire taşıma 44.000 TL ile 55.000 TL, 3+1 daire taşıma ise 48.000 TL ile 60.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Antalya'ya giden araçlarımız Konya - Seydişehir - Akseki veya Konya - Isparta - Antalya güzergâhını takip eder. Konya-Seydişehir güzergâhı üzerinden Toros dağ geçişleri en güvenli şekilde tamamlanır. Eşyalarınız konforlu ve güvenli sürüşle Antalya'daki yeni evinize teslim edilir.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren Antalya'daki yeni adresinizde teslim edilene kadar Anadolu Sigorta güvencesiyle korunur. Yol boyunca yaşanabilecek olumsuzluklara karşı poliçeniz adınıza taşınma öncesinde düzenlenir.",
    tipsText: "Antalya'ya taşınırken dikkat edilmesi gereken husus, yaz aylarında yaşanan sıcaklık durumudur. Sıcak hava şartlarında ambalaj malzemelerinin eşyalara zarar vermemesi için kraft ambalaj kağıtları kullanmaktayız. Ayrıca Konyaaltı ve Muratpaşa bölgelerindeki dar sokaklı binalarda dış cephe asansör kurulum alanı kontrol edilmelidir.",
    faq: [
      {
        question: "Kırşehir Antalya arası nakliyat kaç saat sürer?",
        answer: "İki şehir arası karayolu sürüş süresi ortalama 7 saattir. Genellikle yüklemeden sonraki gün kurulum tamamlanmış olur."
      },
      {
        question: "Alanya ve Manavgat ilçelerine de hizmet veriyor musunuz?",
        answer: "Evet, Antalya'nın Alanya, Manavgat, Serik, Kemer, Kumluca dahil tüm ilçelerine taşıma hizmetimiz mevcuttur."
      },
      {
        question: "Antalya'da yüksek katlı dairelere asansör kuruluyor mu?",
        answer: "Evet, Antalya'daki yeni dairenizde asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörümüzü kuruyoruz."
      },
      {
        question: "Ödemeyi kredi kartı ile yapabilir miyim?",
        answer: "Ödemeleri banka havalesi, EFT veya nakit olarak kabul ediyoruz. Detayları sözleşme esnasında netleştiriyoruz."
      },
      {
        question: "Mobilyaların sökümünü ve kurulumunu kim yapıyor?",
        answer: "Araç ekiplerimizde yer alan uzman marangozumuz mobilyalarınızın de-montaj ve montaj işlemlerini tamamlar."
      },
      {
        question: "Parça eşya taşıma hizmetiniz var mı?",
        answer: "Evet, Antalya yönüne gidecek olan diğer müşterilerimizin eşyalarıyla birleştirerek uygun fiyatlı parça eşya taşıma hizmeti de sunuyoruz."
      }
    ]
  },
  'kirsehir-kayseri-evden-eve-nakliyat': {
    slug: 'kirsehir-kayseri-evden-eve-nakliyat',
    city: 'Kayseri',
    distanceKm: 140,
    durationHours: 2,
    priceRangeMin: 25000,
    priceRangeMax: 47000,
    viaRoute: 'Hacıbektaş, Himmetdede doğrudan duble yol hattı',
    notes: 'Kış şartlarında kış lastiği ve zincir donanımlı araçlarımızla güvenli geçiş sağlanmaktadır.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Kayseri'nin tüm bölgelerine (Melikgazi, Kocasinan, Talas dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Doğrudan Mucur - Hacıbektaş güzergâhı üzerinden Kayseri'ye en hızlı ve hasarsız lojistik akışı sağlıyoruz. Aybar Nakliyat güvencesiyle K3 belgeli kapalı kasa kamyonlarımız ve uzman personelimiz, Kırşehir'den Kayseri'ye taşınma sürecinizin sorunsuz geçmesi için tüm detayları yönetmektedir.",
    distanceText: "Kırşehir ile Kayseri arası karayolu mesafesi yaklaşık 140 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Nakliye araçlarımızın iki şehir arasındaki sürüş süresi ortalama 2 saattir. Sabah saat 08:00'de Kırşehir'deki dairenizde başlayan paketleme ve yükleme işlemleri tamamlanır ve kamyonumuz Kayseri'ye ulaşarak aynı gün içerisinde eşyalarınızın kurulumunu tamamlar.",
    pricingText: "Kırşehir ile Kayseri arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 25.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Kayseri taşımalarında yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 25.000 TL ile 31.000 TL arasında değişirken; 2+1 daire taşıma 29.000 TL ile 36.000 TL, 3+1 daire taşıma ise 33.000 TL ile 41.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Kayseri'ye giden nakliye araçlarımız Mucur - Hacıbektaş - Himmetdede karayolu hattını takip eder. Yol tamamen bölünmüş duble yol kalitesindedir. Kış aylarında kar yağışlı bölgelerde araçlarımızın sürüş güvenliği kurallarına azami derecede dikkat edilmektedir.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren Kayseri'deki yeni adresinizde teslim edilene kadar oluşabilecek kaza, devrilme, yangın riskine karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçe sözleşmeyle birlikte size teslim edilir.",
    tipsText: "Kayseri'ye taşınırken dikkat edilmesi gereken en kritik konu, özellikle kış aylarındaki yoğun kar yağışlarıdır. Kış geçişlerinde buzlanmalara karşı tüm araçlarımızın kış lastiği ve zincir donanımları tam olarak sevk edilir. Ayrıca Kayseri Talas bölgesindeki yüksek katlı binalarda asansör kurulum açısı kontrol edilmelidir.",
    faq: [
      {
        question: "Kırşehir Kayseri nakliyat kaç saat sürer?",
        answer: "İki şehir arası karayolu mesafesi ortalama 2 saattir. Yükleme ve montaj dahil süreç genellikle aynı gün içinde tamamlanır."
      },
      {
        question: "Talas ilçesine de asansör kuruyor musunuz?",
        answer: "Evet, Kayseri'nin Melikgazi, Kocasinan ve Talas ilçeleri dahil tüm bölgelerine asansörlü nakliye hizmeti sunuyoruz."
      },
      {
        question: "Fiyatlarınıza paketleme dahil midir?",
        answer: "Evet, tüm mobilya, beyaz eşya ve hassas eşyalarınızın paketlenmesi fiyat teklifimize dahildir."
      },
      {
        question: "Kayseri'den Kırşehir'e dönüş taşımaları yapıyor musunuz?",
        answer: "Evet, Kayseri-Kırşehir yönündeki geri dönüş seferlerimizde uygun fiyat avantajıyla ev taşıma hizmeti sunmaktayız."
      },
      {
        question: "Hassas eşyalar için ek önlem alıyor musunuz?",
        answer: "Evet, kırılacak cam eşyalar ve elektronikler için koruyucu sargılar kullanarak paketleme yapıyoruz."
      },
      {
        question: "Sözleşme yapıyor musunuz?",
        answer: "Evet, taşıma öncesinde tüm şartları, fiyatı ve teslimat tarihini belirten resmi yazılı evden eve nakliyat sözleşmesi imzalıyoruz."
      }
    ]
  },
  'kirsehir-bursa-evden-eve-nakliyat': {
    slug: 'kirsehir-bursa-evden-eve-nakliyat',
    city: 'Bursa',
    distanceKm: 540,
    durationHours: 6.5,
    priceRangeMin: 39000,
    priceRangeMax: 65000,
    viaRoute: 'Ankara, Eskişehir, Bozüyük, İnegöl geçişli karayolu hattı',
    notes: 'İnegöl geçişindeki yoğun mobilya lojistik trafiğine dikkat edilmelidir. Bursa merkezindeki dar tarihi sokaklar için mobil asansör desteği verilir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Bursa'nın tüm ilçelerine (Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl dahil) profesyonel asansörlü ve sigortalı evden eve nakliyat hizmeti vermektedir. 540 kilometrelik Bursa yolculuğunda eşyalarınızın zarar görmemesi için K3 yetki belgeli araç filomuz, tecrübeli şoförlerimiz ve kadrolu marangozlarımızla hizmetinizdeyiz. Sabit fiyat garantisiyle Kırşehir'den Bursa'ya taşınırken ek ücret sürprizi yaşamazsınız.",
    distanceText: "Kırşehir ile Bursa arası karayolu mesafesi yaklaşık 540 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Nakliye kamyonlarımızın sürüş süresi ortalama 6.5 saattir. İlk gün Kırşehir'de de-montaj, ambalajlama ve kamyona yükleme işlemleri tamamlanır ve kamyonumuz yola çıkar. Bursa'daki yeni adresinize ulaşan ekiplerimiz, asansör yardımıyla eşyaların dairenize taşınmasını gerçekleştirir.",
    pricingText: "Kırşehir ile Bursa arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 39.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Bursa taşımalarında yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, ambalaj malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 39.000 TL ile 49.000 TL arasında değişirken; 2+1 daire taşıma 43.000 TL ile 54.000 TL, 3+1 daire taşıma ise 47.000 TL ile 59.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Bursa'ya giden nakliye araçlarımız Kırıkkale - Ankara - Eskişehir - Bozüyük - İnegöl - Bursa güzergâhını takip eder. Bu hat şehirlerarası nakliyat için en güvenli karayolu hattıdır. Özellikle İnegöl geçişindeki yoğun mobilya lojistik trafiğinde şoförlerimiz sürüş güvenliği kurallarına tam olarak uymaktadır.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren Bursa'daki yeni evinize teslim edilip kurulana kadar yaşanabilecek tüm kaza, yangın, devrilme ve yol sarsıntı hasarlarına karşı Anadolu Sigorta güvencesiyle sigortalanır. Poliçe evrakı adınıza düzenlenerek size takdim edilir.",
    tipsText: "Bursa'ya taşınırken dikkat edilmesi gereken husus, özellikle Osmangazi ve Yıldırım gibi eski merkez ilçelerdeki dik yokuşlu sokaklar ve dar yerleşim yerleridir. Bu bölgelerde dış cephe nakliye asansörünün kurulabilmesi için sokak yapısının önceden analiz edilmesi önem taşır. Nilüfer gibi yeni yerleşim bölgelerinde ise site yönetimlerinin asansör kurulum kuralları öğrenilmelidir.",
    faq: [
      {
        question: "Kırşehir Bursa arası nakliyat kaç gün sürer?",
        answer: "Eşyaların yüklenmesi, yolculuk ve Bursa'da yeni adreste kurulup teslim edilmesi toplam 1-2 iş günü sürmektedir."
      },
      {
        question: "Nilüfer ve Mudanya ilçelerine hizmet veriyor musunuz?",
        answer: "Evet, Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl, Gemlik dahil tüm Bursa ilçelerine taşıma yapıyoruz."
      },
      {
        question: "Bursa'da asansörlü nakliye yapıyor musunuz?",
        answer: "Evet, Bursa'daki yeni dairenizin balkon veya pencere açısı asansör kurulumuna uygunsa mobil asansör sistemimizi kuruyoruz."
      },
      {
        question: "Fiyatlarınıza gardırop montajı dahil midir?",
        answer: "Evet, gardırop ve yatakların sökümünü ve kurulumunu ek ücret almadan marangozumuz tamamlar."
      },
      {
        question: "Eşyaların zarar görmesi durumunda ne yapıyorsunuz?",
        answer: "Tüm taşımalarımız sigorta güvencesindedir. Herhangi bir hasar durumunda sigorta poliçesi kapsamında zararınız karşılanır."
      },
      {
        question: "Bursa'dan Kırşehir'e dönüş taşımacılığı yapıyor musunuz?",
        answer: "Evet, Bursa-Kırşehir yönünde de uygun fiyatlı dönüş aracı seçenekleri sunuyoruz."
      }
    ]
  }
};
