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
    distanceKm: 930,
    durationHours: 12,
    priceRangeMin: 32500,
    priceRangeMax: 42000,
    viaRoute: 'O-21 Otoyolu (Ankara-Tarsus Otoyolu) ve Kuzey Marmara Otoyolu',
    notes: 'İstanbul girişinde nakliye kamyonları için uygulanan Yavuz Sultan Selim Köprüsü zorunluluğu ve şehir içi saat kısıtlamaları dikkate alınmalıdır.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den İstanbul'un tüm ilçelerine (Kadıköy, Beşiktaş, Ümraniye, Başakşehir, Esenyurt dahil) profesyonel, K3 yetki belgeli ve sigortalı şehirlerarası evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığında uzman kadromuz, eşyalarınızın yol boyunca sarsıntı ve darbelere karşı zarar görmemesi için çift kat pıtpıt naylon ve özel kalın Kraft ambalaj malzemeleriyle koruma sağlar. Sabit fiyat garantimiz ile Kırşehir'den yola çıkan kamyonumuz, İstanbul'da kapıda ek ücret sürprizi yaşatmadan eşyalarınızı yeni dairenize teslim eder.",
    distanceText: "Kırşehir ile İstanbul arası karayolu mesafesi yaklaşık 930 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. Taşıma sürecinde O-21 otoyolu güzergâhı üzerinden seyreden kamyonlarımız, şoförlerimizin dinlenme ve sürüş güvenliği kurallarına uygun olarak hareket eder. İlk gün Kırşehir'de eşyaların de-montaj, paketleme ve yükleme işlemleri tamamlanarak kamyonumuz yola çıkar. İkinci gün sabahı İstanbul'daki yeni adresinize ulaşan ekiplerimiz, eşyaları asansör yardımıyla dairenize çıkartır ve mobilyaların montaj işlemlerini gerçekleştirerek taşınmayı tamamlar.",
    pricingText: "Kırşehir ile İstanbul arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 32.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. İstanbul taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 32.500 TL ile 34.500 TL arasında değişirken; 2+1 daire taşıma 35.500 TL ile 38.000 TL, 3+1 daire taşıma ise 38.500 TL ile 41.500 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den İstanbul'a taşıma yaparken tırlarımız ve büyük kamyonlarımız sırasıyla Kırşehir - Akçakent - Niğde - Aksaray - Ankara - Bolu - Düzce - Sakarya - Kocaeli güzergâhını takip eder. İstanbul sınırlarına girildiğinde ağır vasıtalar için zorunlu olan Yavuz Sultan Selim Köprüsü ve Kuzey Marmara Otoyolu bağlantısı kullanılır. Avrupa Yakası'na geçecek araçlarımız için bu güzergâh trafik yoğunluğunu atlatmak ve güvenli sürüş sağlamak açısından son derece önemlidir. Her sevkiyatımız GPS araç takip sistemiyle donatılmış olup müşterilerimize anlık konum bilgisi paylaşılmaktadır.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Kırşehir'den yüklenen eşyalarınız İstanbul'daki yeni adresinizde teslim edilene kadar oluşabilecek kaza, yangın, doğal afet ve yol sarsıntı hasarlarına karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan nakliyat poliçesi, taşınma sabahında adınıza düzenlenerek ıslak imzalı sözleşmeyle birlikte tarafınıza teslim edilir. Eşyaların taşınması sırasında oluşabilecek çizik ve sürtünme gibi küçük hasarlar ise firma içi sorumluluk garantimiz kapsamındadır.",
    tipsText: "İstanbul'a taşınırken dikkat edilmesi gereken en kritik husus, şehir içi dar sokaklar ve site yönetimlerinin taşıma saatleri kısıtlamalarıdır. Kadıköy, Beşiktaş, Şişli gibi dar tarihi sokaklara sahip ilçelerde büyük nakliye kamyonlerinin yanaşması zor olabilir. Bu durumlarda küçük nakliye kamyonetlerimizle transfer (aktarma) hizmeti organize etmekteyiz. Ayrıca yüksek katlı binalarda asansör kurulum izinlerinin ve site içi park yeri rezervasyonlarının taşınmadan en az 2 gün önce apartman yönetimleriyle görüşülerek alınmış olması, taşınma gününün sorunsuz geçmesini sağlayacaktır.",
    faq: [
      {
            "question": "Kırşehir İstanbul nakliye süreci kaç gün sürer?",
            "answer": "Eşyaların Kırşehir'de yüklenmesi ve İstanbul'da yeni adrese boşaltılarak kurulması toplamda 2 iş günü sürmektedir."
      },
      {
            "question": "İstanbul'da dar sokaklarda taşıma nasıl yapılıyor?",
            "answer": "Kamyonumuzun yanaşamadığı dar sokaklarda küçük aktarma araçları (pikap/kamyonet) kullanarak eşyaları güvenle dairenize taşıyoruz."
      },
      {
            "question": "Sigorta poliçesi neleri kapsar, ücreti ne kadardır?",
            "answer": "Sigorta poliçemiz yol kazaları, devrilme, yangın ve hırsızlık gibi majör riskleri kapsar. Poliçe bedeli teklif fiyatımıza dahildir, ekstra ücret alınmaz."
      },
      {
            "question": "İstanbul'da asansörlü taşıma hizmeti veriyor musunuz?",
            "answer": "Evet, İstanbul'daki yeni adresinizde dış cephe nakliye asansörü kurulumuna uygunluk varsa mobil asansör sistemimizi kurarak taşıma yapıyoruz."
      },
      {
            "question": "Gardırop ve beyaz eşyaların montajını yapıyor musunuz?",
            "answer": "Kadrolu marangozumuz gardıropları kurar, tesisat ustamız ise çamaşır ve bulaşık makinesinin bağlantılarını ücretsiz olarak tamamlar."
      },
      {
            "question": "Ödemeyi ne zaman ve nasıl yapıyoruz?",
            "answer": "Sözleşme anında küçük bir kapora alınır. Kalan tutarın yarısı Kırşehir'de yükleme bitiminde, kalan yarısı ise İstanbul'da teslimat sonrasında ödenir."
      }
]
  },
  'kirsehir-ankara-evden-eve-nakliyat': {
    slug: 'kirsehir-ankara-evden-eve-nakliyat',
    city: 'Ankara',
    distanceKm: 490,
    durationHours: 6,
    priceRangeMin: 17000,
    priceRangeMax: 26000,
    viaRoute: 'O-21 Otoyolu (Kırşehir-Ankara Otoyolu doğrudan hat)',
    notes: 'Ankara merkezinde yüksek katlı konutlarda asansörlü taşımacılık yaygın olarak tercih edilmektedir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den başkent Ankara'nın tüm ilçelerine (Çankaya, Yenimahalle, Keçiören, Etimesgut, Gölbaşı dahil) asansörlü ve marangozlu evden eve nakliyat çözümleri sunmaktadır. İç Anadolu nakliye hattında haftalık düzenli seferler düzenleyen firmamız, parça eşyalarınızı veya komple evinizi profesyonel standartlarda taşır. Aybar Nakliyat güvencesiyle K3 yetki belgeli araçlarımız ve kadrolu ekibimiz, Kırşehir'deki de-montaj işlemlerinden Ankara'daki anahtar teslim montaj sürecine kadar tüm adımları büyük bir titizlikle yürütmektedir.",
    distanceText: "Kırşehir ile Ankara arası karayolu mesafesi yaklaşık 490 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Sabah saat 08:00'de Kırşehir'deki evinizde başlayan paketleme ve yükleme işlemleri öğleden sonra saat 14:00 civarında tamamlanır. Kamyonumuz O-21 Kırşehir-Ankara otoyolu üzerinden hareket ederek yaklaşık 6 saatlik sürüşün ardından aynı gün akşamı veya ertesi gün sabahı Ankara'daki yeni adresinize ulaşır ve eşyalarınızın kurulumuna başlanır.",
    pricingText: "Kırşehir ile Ankara arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 17.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Ankara taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 17.000 TL ile 19.000 TL arasında değişirken; 2+1 daire taşıma 20.000 TL ile 22.500 TL, 3+1 daire taşıma ise 23.000 TL ile 26.000 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Ankara'ya giden nakliye araçlarımız, tamamen otoyol konforu sunan O-21 Niğde-Ankara otoyolunu kullanır. Güzergâh sırasıyla Kırşehir - Akçakent - Ulukışla - Niğde - Aksaray - Şereflikoçhisar - Gölbaşı hattı üzerinden Ankara merkeze ulaşır. Toros dağları geçişindeki Akçakent rampalarında araçlarımızın güvenliği için yavaş ve kontrollü seyredilir. Otoyol kalitesi sayesinde eşyalarınız minimum sarsıntıya maruz kalır. Araçlarımızın tümü karayolu taşıma kanunlarına uygun hız sınırlarında ilerler.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Akçakent ve İç Anadolu otoyollarında seyir halindeyken yaşanabilecek her türlü kaza, devrilme, yangın riskine karşı tam bedel üzerinden sigortalanır. Sigorta poliçesi poliçe no ve şirket detaylarıyla birlikte taşınma öncesinde size teslim edilir. Eşyalarınızın yükleme esnasında apartman içinde veya asansörde görebileceği hasarlar da firmamızın güvencesi altındadır.",
    tipsText: "Ankara'ya taşınırken dikkat edilmesi gereken en önemli konu, özellikle Çankaya, Eryaman ve Batıkent gibi bölgelerde yoğun olarak yer alan çok katlı rezidans ve yüksek apartman yapılarıdır. Bu binalarda asansör kurulum alanının açık olması ve site yönetiminin yük asansörü kullanım saatlerine izin vermesi gerekir. Ayrıca kış aylarında Akçakent ve Aksaray geçişlerindeki yoğun kar ve buzlanma risklerine karşı araçlarımızın kar lastiği ve zincir donanımları tam olarak sevk edilmektedir.",
    faq: [
      {
            "question": "Kırşehir Ankara nakliyat kaç saat sürer?",
            "answer": "Yükleme bittikten sonra iki şehir arası sürüş süresi ortalama 6 saattir. Genellikle ertesi gün sabah kurulum tamamlanır."
      },
      {
            "question": "Ankara'da yüksek katlı dairelere asansör kuruluyor mu?",
            "answer": "Evet, Ankara'daki yeni daireniz kaçıncı katta olursa olsun 25. kata kadar ulaşabilen teleskopik asansörlerimizle hizmet veriyoruz."
      },
      {
            "question": "Paketleme malzemeleriniz kaliteli mi?",
            "answer": "Eşyalarınız için kalın havalı ambalaj naylonları, Kraft kağıtlı mukavva koliler ve mobilyalara özel stretch sargılar kullanıyoruz."
      },
      {
            "question": "Ankara'da askılı tekstil taşıma yapıyor musunuz?",
            "answer": "Evet, gardıroptaki kıyafetleriniz için araçlarımızda özel askılı dolap sistemleri yer almaktadır, kırışmadan taşınırlar."
      },
      {
            "question": "Ekstra ücret çıkma ihtimali var mı?",
            "answer": "Hayır. Sözleşmede anlaştığımız ve imzaladığımız sabit fiyat dışında hiçbir koşulda ek ücret talep etmiyoruz."
      },
      {
            "question": "Rezervasyon işlemini ne kadar süre önce yapmalıyım?",
            "answer": "Özellikle yaz dönemlerinde ve hafta sonlarında yoğunluk yaşveığı için taşınmadan en az 1 hafta önce rezervasyon yaptırmanızı öneririz."
      }
]
  },
  'kirsehir-mersin-evden-eve-nakliyat': {
    slug: 'kirsehir-mersin-evden-eve-nakliyat',
    city: 'Mersin',
    distanceKm: 75,
    durationHours: 1,
    priceRangeMin: 14500,
    priceRangeMax: 25500,
    viaRoute: 'O-51 Otoyolu (Kırşehir-Mersin Otoyolu)',
    notes: 'Kısa mesafe avantajı sayesinde yükleme ve boşaltma işlemleri aynı gün içerisinde hızlıca tamamlanır.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den komşu ilimiz Mersin'e (Mezitli, Yenişehir, Tarsus, Toroslar, Erdemli dahil) hızlı, güvenilir ve uygun fiyatlı evden eve nakliyat hizmeti sağlamaktadır. Yakın mesafe lojistik ağımız sayesinde eşyalarınızı aynı gün içerisinde paketliyor, yüklüyor ve yeni adresinizde montajını tamamlayarak teslim ediyoruz. Aybar Nakliyat olarak, Kırşehir-Mersin otoyol hattındaki yoğun taşıma trafiğimiz sayesinde müşterilerimize hem ekonomik fiyatlar sunuyor hem de asansörlü taşıma kolaylığı sağlıyoruz.",
    distanceText: "Kırşehir ile Mersin arası karayolu mesafesi yaklaşık 75 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Taşınma sabahı saat 08:00'de başlayan yükleme işlemi ortalama 4 saat sürer. Kamyonumuz otoyol üzerinden yaklaşık 1 saatlik sürüşle Mersin'e ulaşır. Mersin'deki yeni adresinizde eşyaların indirilmesi, kurulması ve tesisat bağlantılarının yapılmasıyla birlikte tüm taşınma süreci 6-8 saat içinde tamamlanmış olur.",
    pricingText: "Kırşehir ile Mersin arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 14.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Mersin taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 14.500 TL ile 16.500 TL arasında değişirken; 2+1 daire taşıma 17.500 TL ile 20.000 TL, 3+1 daire taşıma ise 20.500 TL ile 23.500 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Mersin'e giden nakliye araçlarımız O-51 Kırşehir-Erdemli otoyolunu kullanır. Merkez otoyol katılımından yola çıkan araçlarımız sırasıyla Yenice - Tarsus güzergâhını geçerek Mersin merkeze ve ardından Mezitli/Erdemli bölgesine ulaşır. Yol tamamen düz ve otoyol standartlarında olduğundan eşyaların sarsılma riski son derece düşüktür. Güvenli ve konforlu bir sürüşle eşyalarınız aynı gün Mersin'deki yeni evinize teslim edilir.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınızın otoyol üzerinde seyir halindeyken veya yükleme-boşaltma esnasında yaşayabileceği tüm riskler poliçemiz kapsamındadır. Taşıma öncesinde hazırlanan poliçemiz sayesinde kafanız rahat bir şekilde yeni evinize yerleşebilirsiniz. Oluşabilecek en küçük çizik veya hasar da firmamızın garantisi altındadır.",
    tipsText: "Mersin'e taşınırken dikkat edilmesi gereken husus, özellikle Mezitli ve Yenişehir sahil şeridindeki yeni yapılan çok katlı binaların rüzgar durumudur. Mersin'de deniz esintisi nedeniyle yüksek katlarda asansör kurulumu yapılırken rüzgar hızı ekiplerimizce kontrol edilir. Ayrıca yaz aylarındaki aşırı nem ve sıcaklık nedeniyle beyaz eşyaların ve elektroniklerin terleme yapmaması için havalandırmalı özel ambalaj malzemeleri kullanmaktayız.",
    faq: [
      {
            "question": "Kırşehir'den Mersin'e taşınma kaç saat sürer?",
            "answer": "Tüm süreç (paketleme, yükleme, yol ve montaj dahil) ortalama 6 ila 8 saat arasında tamamen bitmektedir."
      },
      {
            "question": "Tarsus ilçesine de hizmet veriyor musunuz?",
            "answer": "Evet, Kırşehir-Mersin yolu üzerindeki Tarsus ilçesine ve tüm Mersin ilçelerine günlük hizmetimiz vardır."
      },
      {
            "question": "Mersin'de asansör kuruyor musunuz?",
            "answer": "Evet, Mersin'deki yeni dairenizde balkon veya pencere açısı uygunsa dış cephe mobil asansörümüzü kuruyoruz."
      },
      {
            "question": "Aynı gün içinde taşınmak mümkün mü?",
            "answer": "Mesafe kısa olduğu için Kırşehir-Mersin taşınmaları kesinlikle aynı gün içerisinde tamamlanır."
      },
      {
            "question": "Fiyatlarınıza klima söküm ve montajı dahil mi?",
            "answer": "Klima montajı uzmanlık gerektirdiğinden fiyatlarımıza dahil değildir, ancak anlaşmalı klima servisimizle yönlendirme yapabiliriz."
      },
      {
            "question": "Mersin yazlık evlerine parça eşya taşıyor musunuz?",
            "answer": "Evet, yazlık bölgelere (Erdemli, Silifke, Çeşmeli) parça eşya ve yazlık eşya taşıma seferlerimiz mevcuttur."
      }
]
  },
  'kirsehir-gaziantep-evden-eve-nakliyat': {
    slug: 'kirsehir-gaziantep-evden-eve-nakliyat',
    city: 'Gaziantep',
    distanceKm: 220,
    durationHours: 3,
    priceRangeMin: 19500,
    priceRangeMax: 30500,
    viaRoute: 'O-52 Otoyolu (Kırşehir-Gaziantep Otoyolu, Osmaniye ve Nizip güzergâhı)',
    notes: 'TAG Otoyolu kullanılarak hızlı teslimat sağlanır. Gaziantep dik ve yokuşlu sokaklarında asansör kurulum alanı önceden tespit edilmelidir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den bölgenin lokomotif şehirlerinden Gaziantep'in tüm ilçelerine (Şahinbey, Şehitkamil, İslahiye, Nizip dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Güneydoğu lojistik hattında tecrübeli şoförlerimiz ve kadrolu taşıma ekiplerimizle, eşyalarınızı sıfır hasar ilkesiyle taşıyoruz. Paketlemeden montaja kadar tüm adımlarda sabitleme ve koruma önlemlerini en üst düzeyde uygulayarak Gaziantep'teki yeni evinize sorunsuzca yerleşmenizi sağlıyoruz.",
    distanceText: "Kırşehir ile Gaziantep arası karayolu mesafesi yaklaşık 220 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Karayolu sürüş süresi nakliye araçlarımız için yaklaşık 3 saattir. Sabah saat 08:00'de Kırşehir'de başlayan yükleme işlemi sonrasında öğlen yola çıkan kamyonumuz, öğleden sonra Gaziantep'teki yeni adresinize ulaşır. Ekiplerimiz aynı gün akşam saatlerine kadar tüm mobilyaları kurarak teslimatı gerçekleştirir.",
    pricingText: "Kırşehir ile Gaziantep arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 14.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Gaziantep taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 14.500 TL ile 16.500 TL arasında değişirken; 2+1 daire taşıma 17.500 TL ile 20.000 TL, 3+1 daire taşıma ise 20.500 TL ile 23.500 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Gaziantep'e giden nakliye araçlarımız O-52 otoyolunu (TAG Otoyolu - Tarsus Kırşehir Gaziantep Otoyolu) kullanır. Güzergâh sırasıyla Kırşehir - Akpınar - Osmaniye - Bahçe - Nurdağı - Şehitkamil - Şahinbey hattını takip eder. Yol tamamen bölünmüş otoyol standartlarındadır. Nurdağı geçişindeki virajlı dağ yollarında ve rampalarda araçlarımızın güvenliği için sürüş hız sınırlarına tam olarak uyulmaktadır.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Kırşehir'de yüklenen eşyalarınız Gaziantep'teki yeni evinize teslim edilene kadar yol kazaları, doğal afet ve hırsızlık risklerine karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçemiz taşınma öncesinde size sunulur. Eşyaların taşınması sırasında oluşabilecek küçük hasarlar da firmamızın garantisindedir.",
    tipsText: "Gaziantep'e taşınırken dikkat edilmesi gereken husus, Şahinbey ve Şehitkamil ilçelerindeki bazı eski yerleşim yerlerinde yer alan dik yokuşlar ve dar sokaklardır. Bu bölgelerde asansörlü nakliye kamyonunun yanaşabilmesi için sokak durumunun önceden analiz edilmesi gerekir. Ekiplerimiz gerekli durumlarda ek güvenlik şeritleri kullanarak asansör kurulum alanını rezerve eder. Ayrıca yeni binaların yüksek katlarında asansör boşluklarının durumu önceden bina yönetimine sorulmalıdır.",
    faq: [
      {
            "question": "Kırşehir Gaziantep nakliyat kaç saat sürer?",
            "answer": "İki şehir arası karayolu mesafesi ortalama 3 saattir. Yükleme ve boşaltma dahil tüm süreç aynı gün içinde biter."
      },
      {
            "question": "Gaziantep Nizip ilçesine taşıma yapıyor musunuz?",
            "answer": "Evet, Gaziantep'in Nizip, İslahiye, Nurdağı ve diğer tüm dış ilçelerine nakliye hizmeti sunuyoruz."
      },
      {
            "question": "Asansör kurulumu fiyata dahil midir?",
            "answer": "Evet, hem Kırşehir'de hem de Gaziantep'te asansör kurulumu fiyata dahildir, sonradan ek ücret talep edilmez."
      },
      {
            "question": "Kırılacak eşyaları kim paketliyor?",
            "answer": "Talebiniz doğrultusunda mutfak kırılacakları, bardaklar ve tabaklar özel havalı ambalaj kağıtlarıyla ekiplerimizce kolilenir."
      },
      {
            "question": "Gaziantep'te montaj işlerini kim yapıyor?",
            "answer": "Araç ekiplerimizde yer alan kadrolu marangozumuz gardırop, yatak ve ünitelerin kurulumunu Gaziantep'teki yeni evinizde tamamlar."
      },
      {
            "question": "Ödeme seçenekleriniz nelerdir?",
            "answer": "Ödemelerinizi teslimat sonrasında nakit, banka havalesi veya EFT yoluyla güvenle gerçekleştirebilirsiniz."
      }
]
  },
  'kirsehir-izmir-evden-eve-nakliyat': {
    slug: 'kirsehir-izmir-evden-eve-nakliyat',
    city: 'İzmir',
    distanceKm: 900,
    durationHours: 11,
    priceRangeMin: 31500,
    priceRangeMax: 41000,
    viaRoute: 'Konya - Afyonkarahisar - Uşak - Manisa - İzmir karayolu hattı',
    notes: 'Ege Bölgesi taşımalarında uzun yol nedeniyle eşyaların tır içinde sarsıntılara karşı mükemmel sabitlenmesi ve ambalajlanması zorunludur.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Ege'nin incisi İzmir'in tüm ilçelerine (Karşıyaka, Bornova, Konak, Buca, Çeşme dahil) asansörlü, sigortalı ve profesyonel evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığındaki köklü tecrübemizle, eşyalarınızın 900 kilometrelik İzmir yolculuğunu hasarsız tamamlaması için özel sabitleme ve askılama yöntemleri uyguluyoruz. K3 yetki belgeli geniş araç filomuz ve uzman marangozlarımızla Kırşehir'den İzmir'e taşınma sürecinizi tamamen stressiz bir deneyime dönüştürüyoruz.",
    distanceText: "Kırşehir ile İzmir arası karayolu mesafesi yaklaşık 900 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. İlk gün Kırşehir'deki adresinizde eşyalarınız uzman marangoz ve ambalaj ekiplerimizce de-monte edilir, paketlenir ve kapalı çelik kasa nakliye kamyonumuza yüklenir. Akşam saatlerinde yola çıkan kamyonumuz, ertesi gün sabah saatlerinde İzmir'deki yeni adresinize ulaşır ve hemen asansör kurulumu yapılarak eşyaların daireye taşınması sağlanır.",
    pricingText: "Kırşehir ile İzmir arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 31.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. İzmir taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 31.500 TL ile 33.500 TL arasında değişirken; 2+1 daire taşıma 34.500 TL ile 37.000 TL, 3+1 daire taşıma ise 37.500 TL ile 40.500 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den İzmir'e giden nakliye araçlarımız Kırşehir - Akçakent - Ereğli - Konya - Akşehir - Afyonkarahisar - Uşak - Kula - Salihli - Manisa - İzmir güzergâhını takip eder. Bu hat şehirlerarası ağır vasıta taşımacılığı için en güvenli ve en düz yoldur. Akçakent geçişi dışındaki yollar genellikle düz otoyol ve duble yol kalitesindedir. Yol boyunca şoförlerimiz yasal dinlenme sürelerine uyarak sürüş güvenliğini en üst seviyede tutarlar.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren İzmir'deki yeni adresinizde kurulana kadar oluşabilecek kaza, devrilme, yangın, sel gibi majör risklere karşı tam değeriyle sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçe nüshası taşınma sabahında adınıza düzenlenerek size takdim edilir.",
    tipsText: "İzmir'e taşınırken dikkat edilmesi gereken en önemli husus, özellikle Karşıyaka, Alsancak ve Göztepe gibi merkezi bölgelerdeki otopark sıkıntısı ve dar sokaklardır. Bu bölgelerde taşıma günü belediyeden park izni alınması veya otopark yerinin rezerve edilmesi süreci kolaylaştırır. Ayrıca Çeşme, Urla ve Seferihisar gibi yazlık bölgelere yapılacak taşımalarda uzun yol depolama ihtiyaçları ve yazlık nem koruması önceden planlanmalıdır.",
    faq: [
      {
            "question": "Kırşehir İzmir arası nakliye kaç gün sürer?",
            "answer": "Yükleme ve yol dahil olmak üzere Kırşehir'den İzmir'e taşınma süreci toplam 2 iş gününde tamamlanmaktadır."
      },
      {
            "question": "Çeşme ve Urla ilçelerine de hizmetiniz var mı?",
            "answer": "Evet, İzmir'in Çeşme, Urla, Seferihisar, Aliağa gibi tüm dış ilçelerine ve yazlık bölgelerine taşıma yapıyoruz."
      },
      {
            "question": "İzmir'de dış cephe asansörü kurulabiliyor mu?",
            "answer": "Yeni adresinizde dış cephe asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörürümüzü kuruyoruz."
      },
      {
            "question": "Eşyalar araç içinde nasıl korunuyor?",
            "answer": "Araç kasalarımız sunta kaplamalı olup, eşyalar ambalajlandıktan sonra özel sabitleme ipleriyle kasa içine sıkıca bağlanır."
      },
      {
            "question": "Beyaz eşyaların bağlantısını yapıyor musunuz?",
            "answer": "Evet, çamaşır ve bulaşık makinenizi yeni evinizde tesisata bağlayıp çalışır durumda teslim ediyoruz."
      },
      {
            "question": "İzmir'den Kırşehir'e dönüş taşımaları da yapıyor musunuz?",
            "answer": "Evet, İzmir-Kırşehir yönünde de aynı şekilde profesyonel evden eve nakliye ve dönüş aracı avantajıyla uygun fiyatlı hizmet vermekteyiz."
      }
]
  },
  'kirsehir-antalya-evden-eve-nakliyat': {
    slug: 'kirsehir-antalya-evden-eve-nakliyat',
    city: 'Antalya',
    distanceKm: 560,
    durationHours: 8,
    priceRangeMin: 19500,
    priceRangeMax: 28500,
    viaRoute: 'Mersin - Silifke - Mut - Karaman - Alanya sahil ve yayla yolları geçişi',
    notes: 'Antalya geçişindeki virajlı Toros dağ yolları nedeniyle usta şoförler ve kapalı kasa araçlar tercih edilmelidir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Akdeniz'in turizm merkezi Antalya'nın tüm bölgelerine (Muratpaşa, Konyaaltı, Kepez, Alanya, Manavgat dahil) K3 yetki belgeli, sigortalı ve marangozlu evden eve nakliyat hizmeti sunmaktadır. Toroslar geçişli zorlu Antalya güzergâhında profesyonel şoförlerimiz ve kapalı çelik kasalı nakliye tırlarımızla eşyalarınızı sarsıntısız bir şekilde taşıyoruz. Sabit fiyat garantimiz ile taşınma gününde hiçbir ek maliyet çıkarmadan eşyalarınızı Antalya'daki yeni adresinize teslim ediyoruz.",
    distanceText: "Kırşehir ile Antalya arası karayolu mesafesi yaklaşık 560 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Yol durumuna ve kullanılan güzergâhla göre nakliye araçlarımızın varış süresi ortalama 8 saattir. Kırşehir'de sabah yüklenen eşyalar genellikle aynı günün gecesinde veya ertesi gün sabah saatlerinde Antalya'da yeni adrese ulaştırılır ve kurulum işlemleri hızlıca başlatılır.",
    pricingText: "Kırşehir ile Antalya arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 19.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Antalya taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 19.500 TL ile 21.500 TL arasında değişirken; 2+1 daire taşıma 22.500 TL ile 25.000 TL, 3+1 daire taşıma ise 25.500 TL ile 28.500 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Antalya'ya giden araçlarımız iki alternatif rotayı kullanabilir. Birinci rota Kırşehir - Akçakent - Ereğli - Karaman - Mut - Alanya - Antalya hattıdır. İkinci alternatif ise Mersin sahil yolu üzerinden Silifke - Anamur - Bağbaşı - Alanya hattıdır. Genellikle ağır vasıtalar için daha güvenli ve virajı daha az olan Konya-Karaman-Mut güzergâhı tercih edilerek Toros dağ geçişleri en güvenli şekilde tamamlanır.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren Antalya'daki yeni adresinizde teslim edilene kadar Anadolu Sigorta güvencesiyle korunur. Yol boyunca yaşanabilecek tüm kaza, yangın, devrilme gibi olumsuzluklara karşı poliçeniz tam bedel üzerinden adınıza taşınma öncesinde düzenlenir.",
    tipsText: "Antalya'ya taşınırken dikkat edilmesi gereken husus, yaz aylarında yaşanan aşırı sıcaklık ve nem durumudur. Sıcak hava şartlarında ambalaj malzemelerinin eşyalara yapışmaması veya nem yapmaması için özel gözenekli kraft ambalaj kağıtları ve havalandırmalı sargılar kullanmaktayız. Ayrıca Konyaaltı ve Muratpaşa bölgelerindeki çok katlı ve dar sokaklı binalarda dış cephe asansör kurulum alanı önceden kontrol edilmelidir.",
    faq: [
      {
            "question": "Kırşehir Antalya arası nakliyat kaç saat sürer?",
            "answer": "İki şehir arası sürüş süresi ortalama 8 saattir. Genellikle yüklemeden sonraki gün kurulum tamamlanmış olur."
      },
      {
            "question": "Alanya ve Manavgat ilçelerine de hizmet veriyor musunuz?",
            "answer": "Evet, Antalya'nın Alanya, Manavgat, Serik, Kemer, Kumluca dahil tüm ilçelerine taşıma hizmetimiz mevcuttur."
      },
      {
            "question": "Antalya'da yüksek katlı dairelere asansör kuruluyor mu?",
            "answer": "Evet, Antalya'daki yeni dairenizde asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörümüzü kuruyoruz."
      },
      {
            "question": "Ödemeyi kredi kartı ile yapabilir miyim?",
            "answer": "Ödemeleri genellikle banka havalesi, EFT veya nakit olarak kabul ediyoruz. Detayları sözleşme esnasında netleştiriyoruz."
      },
      {
            "question": "Mobilyaların sökümünü ve kurulumunu kim yapıyor?",
            "answer": "Araç ekiplerimizde yer alan kadrolu uzman marangozumuz mobilyalarınızın de-montaj ve montaj işlemlerini eksiksiz tamamlar."
      },
      {
            "question": "Parça eşya taşıma hizmetiniz var mı?",
            "answer": "Evet, Antalya yönüne gidecek olan diğer müşterilerimizin eşyalarıyla birleştirerek uygun fiyatlı parça eşya taşıma hizmeti de sunuyoruz."
      }
]
  },
  'kirsehir-kayseri-evden-eve-nakliyat': {
    slug: 'kirsehir-kayseri-evden-eve-nakliyat',
    city: 'Kayseri',
    distanceKm: 335,
    durationHours: 4.5,
    priceRangeMin: 14500,
    priceRangeMax: 23500,
    viaRoute: 'Akçakent - Niğde - Develi - Kayseri karayolu hattı',
    notes: 'İç Anadolu kış şartlarında kış lastiği ve zincir donanımlı araçlarımızla güvenli geçiş sağlanmaktadır.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den İç Anadolu'nun sanayi ve ticaret merkezlerinden Kayseri'nin tüm bölgelerine (Melikgazi, Kocasinan, Talas dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Akçakent ve Niğde güzergâhı üzerinden Kayseri'ye en hızlı ve hasarsız lojistik akışı sağlıyoruz. Aybar Nakliyat güvencesiyle K3 belgeli kapalı kasa kamyonlarımız ve uzman personelimiz, Kırşehir'den Kayseri'ye taşınma sürecinizin sorunsuz geçmesi için tüm detayları yönetmektedir.",
    distanceText: "Kırşehir ile Kayseri arası karayolu mesafesi yaklaşık 335 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Nakliye araçlarımızın iki şehir arasındaki sürüş süresi ortalama 4.5 saattir. Sabah saat 08:00'de Kırşehir'deki dairenizde başlayan paketleme ve yükleme işlemleri öğle saatlerinde tamamlanır. Kamyonumuz öğleden sonra Kayseri'ye ulaşarak aynı gün içerisinde eşyalarınızın kurulumunu tamamlar.",
    pricingText: "Kırşehir ile Kayseri arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 14.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Kayseri taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 14.500 TL ile 16.500 TL arasında değişirken; 2+1 daire taşıma 17.500 TL ile 20.000 TL, 3+1 daire taşıma ise 20.500 TL ile 23.500 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Kayseri'ye giden nakliye araçlarımız Akçakent otoyolunu kullanarak sırasıyla Kırşehir - Akçakent - Niğde - Yeşilhisar - Yahyalı - İncesu - Melikgazi hattını takip eder. Yolun büyük bölümü duble yol ve otoyol kalitesindedir. Akçakent geçişindeki Toros dağ yollarında ve kış aylarında Niğde-Kayseri arasındaki yoğun kar yağışlı bölgelerde araçlarımızın sürüş güvenliği kurallarına azami derecede dikkat edilmektedir.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren Kayseri'deki yeni adresinizde teslim edilene kadar oluşabilecek kaza, devrilme, yangın riskine karşı Anadolu Sigorta güvencesindedir. Sigorta poliçesi taşınma öncesinde adınıza düzenlenerek ıslak imzalı sözleşmeyle birlikte size teslim edilir.",
    tipsText: "Kayseri'ye taşınırken dikkat edilmesi gereken en kritik konu, özellikle kış aylarında yaşanan yoğun kar yağışı ve don olaylarıdır. Kış geçişlerinde Akçakent ve Niğde makaslarındaki buzlanmalara karşı tüm araçlarımızın kış lastiği, zincir ve çekme halatı donanımları tam olarak sevk edilir. Ayrıca Kayseri Talas bölgesindeki yüksek katlı binalarda asansör kurulum açısı taşınma öncesinde kontrol edilmelidir.",
    faq: [
      {
            "question": "Kırşehir Kayseri nakliyat kaç saat sürer?",
            "answer": "İki şehir arası karayolu mesafesi ortalama 4.5 saattir. Yükleme ve montaj dahil süreç genellikle aynı gün içinde tamamlanır."
      },
      {
            "question": "Talas ilçesine de asansör kuruyor musunuz?",
            "answer": "Evet, Kayseri'nin Melikgazi, Kocasinan ve Talas ilçeleri dahil tüm bölgelerine asansörlü nakliye hizmeti sunuyoruz."
      },
      {
            "question": "Fiyatlarınıza paketleme dahil midir?",
            "answer": "Evet, tüm mobilya, beyaz eşya ve hassas eşyalarınızın çift kat ambalajlanması fiyat teklifimize dahildir."
      },
      {
            "question": "Kayseri'den Kırşehir'e dönüş taşımaları yapıyor musunuz?",
            "answer": "Evet, Kayseri-Kırşehir yönündeki geri dönüş seferlerimizde uygun fiyat avantajısıyla ev taşıma hizmeti sunmaktayız."
      },
      {
            "question": "Hassas eşyalar için ek önlem alıyor musunuz?",
            "answer": "Evet, kırılacak cam eşyalar ve elektronikler için özel koruyucu köpükler ve kalın koliler kullanarak paketleme yapıyoruz."
      },
      {
            "question": "Sözleşme yapıyor musunuz?",
            "answer": "Evet, taşıma öncesinde tüm şartları, fiyatı ve teslimat tarihini belirten resmi yazılı evden eve nakliyat sözleşmesi imzalıyoruz."
      }
]
  },
  'kirsehir-bursa-evden-eve-nakliyat': {
    slug: 'kirsehir-bursa-evden-eve-nakliyat',
    city: 'Bursa',
    distanceKm: 840,
    durationHours: 10,
    priceRangeMin: 29500,
    priceRangeMax: 38400,
    viaRoute: 'O-21 Otoyolu, Eskişehir ve İnegöl geçişli kuzeybatı güzergâhı',
    notes: 'İnegöl geçişindeki yoğun mobilya lojistik trafiğine dikkat edilmelidir. Bursa merkezindeki dar tarihi sokaklar için mobil asansör desteği verilir.',
    introText: "Kırşehir Aybar Nakliyat, Kırşehir'den Marmara Bölgesi'nin sanayi devlerinden Bursa'nın tüm ilçelerine (Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl dahil) profesyonel asansörlü ve sigortalı evden eve nakliyat hizmeti vermektedir. 840 kilometrelik Bursa yolculuğunda eşyalarınızın zarar görmemesi için K3 yetki belgeli araç filomuz, tecrübeli şoförlerimiz ve kadrolu marangozlarımızla hizmetinizdeyiz. Sabit fiyat garantisiyle Kırşehir'den Bursa'ya taşınırken ek ücret sürprizi yaşamazsınız.",
    distanceText: "Kırşehir ile Bursa arası karayolu mesafesi yaklaşık 840 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. Nakliye kamyonlarımızın sürüş süresi ortalama 10 saattir. İlk gün Kırşehir'de de-montaj, ambalajlama ve kamyona yükleme işlemleri tamamlanır ve kamyonumuz yola çıkar. Ertesi gün sabah saatlerinde Bursa'daki yeni adresinize ulaşan ekiplerimiz, asansör yardımıyla eşyaların dairenize taşınmasını gerçekleştirir.",
    pricingText: "Kırşehir ile Bursa arası nakliyat fiyatları Kırşehir Aybar Nakliyat tarafından 29.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Bursa taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 29.500 TL ile 31.500 TL arasında değişirken; 2+1 daire taşıma 32.500 TL ile 35.000 TL, 3+1 daire taşıma ise 35.500 TL ile 38.500 TL arasında bütçelendirilir.",
    routeText: "Kırşehir'den Bursa'ya giden nakliye araçlarımız Akçakent otoyolundan yola çıkarak sırasıyla Kırşehir - Akçakent - Niğde - Aksaray - Ankara - Eskişehir - Bozüyük - İnegöl - Bursa güzergâhını takip eder. Bu hat şehirlerarası nakliyat için en güvenli karayolu hattıdır. Özellikle İnegöl geçişindeki yoğun mobilya lojistik trafiğinde ve kış aylarındaki dağ geçişlerinde araç şoförlerimiz sürüş güvenliği kurallarına tam olarak uymaktadır.",
    insuranceText: "Kırşehir Aybar Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Kırşehir'den yüklendiği andan itibaren Bursa'daki yeni evinize teslim edilip kurulana kadar yaşanabilecek tüm kaza, yangın, devrilme ve yol sarsıntı hasarlarına karşı Anadolu Sigorta güvencesiyle sigortalanır. Poliçe evrakı taşınma günü sabahı adınıza düzenlenerek size takdim edilir.",
    tipsText: "Bursa'ya taşınırken dikkat edilmesi gereken husus, özellikle Osmangazi ve Yıldırım gibi eski merkez ilçelerdeki dik yokuşlu sokaklar ve dar yerleşim yerleridir. Bu bölgelerde dış cephe nakliye asansörünün kurulabilmesi için sokak yapısının önceden analiz edilmesi önem taşır. Nilüfer gibi yeni yerleşim bölgelerinde ise site yönetimlerinin asansör kurulum alanlarına ve yükleme saatlerine dair kuralları önceden öğrenilmelidir.",
    faq: [
      {
            "question": "Kırşehir Bursa arası nakliyat kaç gün sürer?",
            "answer": "Eşyaların yüklenmesi, yolculuk ve Bursa'da yeni adreste kurulup teslim edilmesi toplam 2 iş günü sürmektedir."
      },
      {
            "question": "Nilüfer ve Mudanya ilçelerine hizmet veriyor musunuz?",
            "answer": "Evet, Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl, Gemlik dahil tüm Bursa ilçelerine taşıma yapıyoruz."
      },
      {
            "question": "Bursa'da asansörlü nakliye yapıyor musunuz?",
            "answer": "Evet, Bursa'daki yeni dairenizin balkon veya pencere açısı asansör kurulumuna uygunsa mobil asansör sistemimizi kuruyoruz."
      },
      {
            "question": "Fiyatlarınıza gardırop montajı dahil midir?",
            "answer": "Evet, gardırop ve yatakların sökümünü ve kurulumunu ek ücret almadan tamamlar."
      },
      {
            "question": "Eşyaların zarar görmesi durumunda ne yapıyorsunuz?",
            "answer": "Tüm taşımalarımız sigorta güvencesindedir. Herhangi bir hasar durumunda sigorta poliçesi kapsamında hasar tespiti yapılarak zararınız karşılanır."
      },
      {
            "question": "Bursa'dan Kırşehir'e dönüş taşımacılığı yapıyor musunuz?",
            "answer": "Evet, Bursa-Kırşehir yönünde de profesyonel evden eve nakliye ve uygun fiyatlı dönüş aracı seçenekleri sunuyoruz."
      }
]
  }
};
