import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Aybar Nakliyat',
  description: 'Kırşehir Aybar Evden Eve Nakliyat Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri işleme faaliyetlerimiz hakkında veri sorumlusu aydınlatma metni.',
  alternates: {
    canonical: '/yasal/kvkk',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KVKKPage() {
  const fullAddress = `${SITE.address.street} ${SITE.address.locality}/${SITE.address.region}`;

  return (
    <main id="main" className="min-h-screen bg-off-white text-charcoal py-24 px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: 'Yasal', url: '/yasal/kvkk' }, { name: 'KVKK Aydınlatma Metni', url: '/yasal/kvkk' }]} className="pt-4 max-w-3xl mx-auto px-0 mb-4" />
      <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-light rounded-xl shadow-sm space-y-6">
        <Link href="/" className="text-orange-text font-bold text-sm hover:underline block mb-4">
          &larr; Ana Sayfaya Dön
        </Link>
        <h1 className="font-display font-black text-navy text-2xl md:text-3xl border-b border-gray-light pb-4">
          Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
        </h1>
        
        <p className="text-sm leading-relaxed text-charcoal">
          <strong>{SITE.legalName}</strong> (&quot;Veri Sorumlusu&quot;) olarak, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, veri sorumlusu sıfatıyla, kişisel verilerinizin toplanması, işlenmesi, aktarılması ve saklanması süreçleri hakkında sizi bilgilendirmek isteriz.
        </p>

        <div className="space-y-4 text-sm text-charcoal">
          <h2 className="font-display font-bold text-navy text-lg">1. Veri Sorumlusu Bilgileri</h2>
          <p className="leading-relaxed">
            - <strong>Ünvanı:</strong> {SITE.legalName}<br />
            - <strong>Adres:</strong> {fullAddress}<br />
            - <strong>E-posta:</strong> <a href={`mailto:${SITE.email}`} className="text-orange-text hover:underline">{SITE.email}</a><br />
            - <strong>Telefon:</strong> {SITE.phoneDisplay}
          </p>

          <h2 className="font-display font-bold text-navy text-lg">2. Toplanan Kişisel Verileriniz</h2>
          <p className="leading-relaxed">
            Hizmet teklif formu ve web sitemizdeki araçlar üzerinden bizimle paylaştığınız adınız, soyadınız, telefon numaranız, taşınma çıkış ve varış adresleri (ilçe/şehir bilgileri), eşya hacmi (oda sayısı) ve asansör tercihi gibi kişisel verileriniz işlenmektedir.
          </p>

          <h2 className="font-display font-bold text-navy text-lg">3. Kişisel Verilerin İşlenme Amacı ve Hukuki Sebebi</h2>
          <p className="leading-relaxed">
            Kişisel verileriniz, KVKK’nın 5/2-c maddesinde belirtilen <strong>&quot;Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması&quot;</strong> hukuki sebebine dayanarak evden eve nakliye teklifinin hazırlanması ve hizmetin organize edilmesi amacıyla işlenmektedir. Ayrıca, KVKK’nın 5/2-f maddesi uyarınca <strong>&quot;Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması&quot;</strong> hukuki sebebiyle sitenin güvenliğini sağlama ve bot istekleri Turnstile ile engelleme süreçleri kapsamında işleme yürütülür.
          </p>

          <h2 className="font-display font-bold text-navy text-lg">4. İşlenen Kişisel Verilerin Aktarılması ve Yurt Dışı Aktarım</h2>
          <p className="leading-relaxed">
            Kişisel verileriniz, herhangi bir yerel veritabanında kalıcı olarak saklanmamakta; doğrudan form gönderimi ile güvenli bir şekilde **WhatsApp (Meta Platforms, Inc.)** API altyapısı üzerinden firmamıza mesaj olarak iletilmektedir. WhatsApp sunucularının yurt dışında bulunması nedeniyle bu işlem teknik olarak yurt dışı veri aktarımı niteliğindedir. Form gönderimi sırasında bu duruma açık rıza göstermiş olursunuz. Ayrıca, altyapı hizmeti aldığımız **Vercel** barındırma sunucuları ile site genelindeki çerez tercihlerinize göre kabul etmeniz halinde **Google Analytics** ve **Microsoft Clarity** analitik servislerine anonim davranışsal veriler aktarılabilmektedir.
          </p>

          <h2 className="font-display font-bold text-navy text-lg">5. Kişisel Verilerin Saklanması ve İmha Politikası</h2>
          <p className="leading-relaxed">
            İletişim ve teklif verileriniz, nakliye sözleşmesi ilişkisinin kurulması, ifası ve Türk Borçlar Kanunu uyarınca doğabilecek uyuşmazlıklara ilişkin yasal zamanaşımı süreleri (10 yıl) boyunca saklanır. Sürelerin sona ermesinin ardından, kişisel verileriniz periyodik imha süreçlerinde güvenli bir şekilde silinir, yok edilir veya anonim hale getirilir.
          </p>

          <h2 className="font-display font-bold text-navy text-lg">6. KVKK Madde 11 Uyarınca Haklarınız ve Başvuru</h2>
          <p className="leading-relaxed">
            KVKK’nın 11. maddesi kapsamında, kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme, verilerin silinmesini veya düzeltilmesini talep etme haklarına sahipsiniz. Haklarınıza ilişkin taleplerinizi, güvenli elektronik imza ile imzalayarak veya yazılı bir dilekçe ile yukarıda belirtilen fiziki adresimize ya da <a href={`mailto:${SITE.email}`} className="text-orange-text hover:underline">{SITE.email}</a> e-posta adresimize doğrudan iletebilirsiniz. Başvurularınız en geç 30 gün içinde sonuçlandırılacaktır.
          </p>
        </div>
      </div>
    </main>
  );
}
