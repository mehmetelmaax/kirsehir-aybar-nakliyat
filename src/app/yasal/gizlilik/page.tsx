import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Aybar Nakliyat',
  description: `${SITE.legalName} evden eve taşımacılık gizlilik ve güvenlik politikaları hakkında bilgilendirme sayfası.`,
  alternates: {
    canonical: '/yasal/gizlilik',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GizlilikPage() {
  const fullAddress = `${SITE.address.street} ${SITE.address.locality}/${SITE.address.region}`;

  return (
    <main id="main" className="min-h-screen bg-off-white text-charcoal py-24 px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: 'Yasal', url: '/yasal/gizlilik' }, { name: 'Gizlilik Politikası', url: '/yasal/gizlilik' }]} className="pt-4 max-w-3xl mx-auto px-0 mb-4" />
      <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-light rounded-xl shadow-sm space-y-6">
        <Link href="/" className="text-orange-text font-bold text-sm hover:underline block mb-4">
          &larr; Ana Sayfaya Dön
        </Link>
        <h1 className="font-display font-black text-navy text-2xl md:text-3xl border-b border-gray-light pb-4">
          Gizlilik Politikası
        </h1>
        
        <p className="text-sm leading-relaxed text-charcoal">
          <strong>{SITE.legalName}</strong> olarak gizliliğinize büyük önem veriyoruz. Bu gizlilik politikası, web sitemizi ziyaret ederken veya teklif formlarını doldururken kişisel verilerinizin nasıl toplandığını, işlendiğini, aktarıldığını ve korunduğunu açıklamaktadır.
        </p>

        <div className="space-y-4 text-sm text-charcoal">
          <h2 className="font-display font-bold text-navy text-lg">1. Veri Sorumlusu</h2>
          <p className="leading-relaxed">
            - <strong>Ünvanı:</strong> {SITE.legalName}<br />
            - <strong>Adres:</strong> {fullAddress}<br />
            - <strong>E-posta:</strong> <a href={`mailto:${SITE.email}`} className="text-orange-text hover:underline">{SITE.email}</a><br />
            - <strong>Telefon:</strong> {SITE.phoneDisplay}
          </p>

          <h2 className="font-display font-bold text-navy text-lg">2. Toplanan Veriler ve Amacı</h2>
          <p className="leading-relaxed">
            Teklif istekleri ve iletişim formlarında girilen adınız, soyadınız, telefon numaranız, taşınma çıkış/varış lokasyonları ve daire büyüklüğü bilgileri yalnızca size uygun fiyat teklifleri sunabilmek ve taşınma operasyonlarını organize edebilmek amacıyla toplanır.
          </p>

          <h2 className="font-display font-bold text-navy text-lg">3. Veri Güvenliği, Saklama ve Yurt Dışı Aktarım</h2>
          <p className="leading-relaxed">
            Formda girdiğiniz tüm veriler, güvenliğiniz için yerel bir veritabanında saklanmaz. Form gönderildiğinde veriler anlık olarak **WhatsApp (Meta Platforms, Inc.)** API altyapısı üzerinden şifrelenmiş olarak doğrudan firmamıza iletilir. WhatsApp sunucularının yurt dışında bulunması teknik olarak yurt dışına aktarım sayıldığından, gönderim yapmadan önce onayınız talep edilmektedir. Ayrıca, altyapı hizmeti aldığımız **Vercel** sunucuları üzerinde de geçici işleme süreçleri yürütülmektedir.
          </p>

          <h2 className="font-display font-bold text-navy text-lg">4. Çerez Tercihleri ve Analiz Araçları</h2>
          <p className="leading-relaxed">
            Sitemizde kullanıcı deneyimini analiz etmek amacıyla **Google Analytics** ve **Microsoft Clarity** oturum kaydı araçları kullanılmaktadır. Bu araçlar, çerez onay bannerında &quot;Kabul Et&quot; butonuna tıklamadığınız sürece kesinlikle devre dışıdır ve hiçbir izleme çerezi yerleştirilmez. Kabul etmeniz halinde ise verileriniz tamamen anonimleştirilmiş ve maskelenmiş olarak (ad soyad ve telefon gibi kişisel alanlar Clarity üzerinde maskelenmektedir) işlenir.
          </p>

          <h2 className="font-display font-bold text-navy text-lg">5. Saklama Süresi ve Veri Sahibi Hakları</h2>
          <p className="leading-relaxed">
            Toplanan kişisel verileriniz yasal olarak taşımacılık hizmetinin kurulması ve yasal zamanaşımı süreleri (10 yıl) boyunca saklanır, ardından güvenli imha kurallarına göre silinir veya anonim hale getirilir. KVKK’nın 11. maddesi kapsamındaki haklarınızı kullanmak ve verilerinizin silinmesini istemek için doğrudan <a href={`mailto:${SITE.email}`} className="text-orange-text hover:underline">{SITE.email}</a> adresine e-posta göndererek başvurabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
