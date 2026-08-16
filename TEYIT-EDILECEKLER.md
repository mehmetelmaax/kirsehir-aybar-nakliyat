# Firma Sahibi Teyit ve Onay Belgesi (TEYIT-EDILECEKLER.md)

Bu belge, web sitesinin canlı sunucuya yüklenmesinden önce firma sahibi tarafından doğrulanması ve teyit edilmesi gereken tüm yerel verileri, iş koşullarını ve teknik yapılandırmaları listelemektedir. Değerler kod dosyalarından derlenmiştir.

---

## 1. Kritik İletişim Numaraları (Telefon & WhatsApp)

Sitede iki farklı telefon numarası tanımlanmıştır. Bu durumun bilinçli olup olmadığı teyit edilmelidir:

- **Arama / İletişim Numarası (`SITE.phone`):** `0537 312 34 47` (Görünen: `0537 312 34 47`, Link: `tel:+905373123447`)
- **WhatsApp Mesaj Alıcı Numarası (`SITE.whatsapp`):** `905414645890` (Görünen: `0541 464 58 90`, Link: `https://wa.me/905414645890`)

> [!IMPORTANT]
> Arama numarası ile WhatsApp numarasının birbirinden farklı olması bilinçli bir tercih midir? Eğer tüm taleplerin tek bir telefona gitmesi isteniyorsa, bu iki numara eşitlenmelidir.

---

## 2. Şirket Adresi ve Google Business Profile Uyumu

Sitedeki yerel SEO şemalarında (`LocalBusiness`) kullanılan resmi adres bilgisi:

- **Cadde/Mahalle:** `Ahi Evran Mahallesi`
- **İlçe/Semt:** `Merkez`
- **Şehir:** `Kırşehir`
- **Posta Kodu:** `40100`

> [!IMPORTANT]
> Bu adresin, firmanın **Google Business Profile (Google Haritalar)** üzerindeki resmi adresiyle harfi harfine aynı olması yerel arama motoru görünürlüğü (Local SEO) açısından zorunludur. Farklılık varsa düzeltilmelidir.

---

## 3. Fiyat Hesaplama Katsayıları ve Tarifeler (`PRICING_TABLE`)

`src/lib/pricing.ts` dosyasında yer alan ve fiyat hesaplayıcı robot ile fiyat matrisini besleyen fiyat katsayılarının doğruluğu teyit edilmelidir:

| Kalem | Sitede Tanımlı Değer | Açıklama |
| :--- | :--- | :--- |
| **1+1 Daire Başlangıç Fiyatı** | ₺12.000 - ₺14.000 | Şehiriçi baz nakliye bütçesi. |
| **2+1 Daire Başlangıç Fiyatı** | ₺15.000 - ₺18.000 | Şehiriçi baz nakliye bütçesi. |
| **3+1 Daire Başlangıç Fiyatı** | ₺18.000 - ₺22.000 | Şehiriçi baz nakliye bütçesi. |
| **4+1+ Daire Başlangıç Fiyatı**| ₺22.000 - ₺26.000 | Şehiriçi baz nakliye bütçesi. |
| **Ofis Taşıma Başlangıç Fiyatı**| ₺20.000 - ₺25.000 | Baz ofis lojistik bütçesi. |
| **Asansör Modül Kurulum Ücreti**| ₺2.500 | Modül başına mobil asansör kurulum bedeli. |
| **Yol Km Ücreti (Şehirlerarası)**| Km başına ₺35 | Şehirlerarası taşıma ücret katsayısı. |
| **İlçeler Yakıt/Zaman Farkı** | ₺4.000 | Merkez dışı ilçelere taşıma fark ücreti. |
| **Depolama Aylık Kira Bedeli** | ₺3.000 | Eşya depolama aylık kira katsayısı. |
| **Marangoz İşçilik Bedeli** | ₺1.500 | Gardırop/dolap de-montaj ve montaj ücreti. |
| **Kat Başına İşçilik Farkı** | ₺200 | Asansörsüz taşıma durumunda kat başına ek bedel. |

---

## 4. Diğer Firma Künye Bilgileri

- **Kuruluş Yılı (`foundedYear`):** `2012` (SEO şemalarında ve lisans bilgilerinde kullanılır)
- **Sigorta Sağlayıcısı (`insurer`):** `Anadolu Sigorta` (Eşya sigorta poliçesi açıklamalarında geçer)
- **Coğrafi Koordinatlar (`geo`):** `lat: 39.145, lng: 34.163` (Harita şemasının merkezi için)
- **Çalışma Saatleri (`hours`):** `08:00 - 20:00` (LocalBusiness şemasında çalışma saatleri)

---

## 5. İlçe Sayfalarındaki Yerel Beyanlar

Aşağıdaki coğrafi ve donanımsal iddiaların doğruluğu teyit edilmelidir:

- **Akçakent:** Dağlık ve ormanlık arazi yapısı, engebeli yol koşulları iddiaları.
- **Boztepe:** Boztepe yol durumları.
- **Akpınar:** Ankara yol güzergahı üzerinde yer aldığı iddiası.
- **Çiçekdağı:** Engebeli yol koşulları iddiası.
- **Kaman:** TOKİ konutları ve yüksek katlı binaların varlığı ile asansörlerin 25. kata kadar kurulabildiği iddiası.
- **Kış Lastiği / Zincir Donanımı:** Kış koşullarında tüm araç filosunda bu donanımların eksiksiz bulunduğu iddiası.
