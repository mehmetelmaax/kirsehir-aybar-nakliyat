import React from 'react';
import { estimatePrice, PriceInput } from '@/lib/pricing';
import { FACTS } from '@/lib/facts';

export default function PricingMatrix() {
  const getCalculatedPrice = (rooms: PriceInput['rooms'], distanceType: PriceInput['distanceType'], distanceKm?: number) => {
    const input: PriceInput = {
      rooms,
      fromFloor: 3,
      toFloor: 3,
      fromElevator: true,
      toElevator: true,
      distanceType,
      distanceKm,
      packing: true,
      carpentry: true,
      storage: false
    };
    const est = estimatePrice(input);
    return `₺${est.min.toLocaleString('tr-TR')} - ₺${est.max.toLocaleString('tr-TR')}`;
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6 overflow-hidden text-charcoal">
      <h2 className="font-display font-bold text-navy text-xl md:text-2xl border-b border-gray-light pb-3">
        Kırşehir Ev Taşıma Başlangıç Fiyat Matrisi
      </h2>
      <p className="text-xs md:text-sm text-charcoal leading-relaxed">
        Kırşehir genelindeki evden eve nakliyat operasyonlarında tahmini maliyet aralıkları daire büyüklüğüne (oda sayısına), gidilecek yol mesafesine ve kat yüksekliklerine göre belirlenmektedir. <strong>Aşağıda listelenen fiyatlar tahmini başlangıç fiyatlarıdır; net ve kesin fiyat ücretsiz ekspertiz sonrasında belirlenmektedir:</strong>
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <caption>Kırşehir Ev Taşıma Fiyat Tarifeleri Matrisi (Güncelleme: {FACTS.priceUpdateDate})</caption>
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="p-3 font-display rounded-tl-lg">Daire Tipi</th>
              <th scope="col" className="p-3 font-display">Şehiriçi (Merkez/Kaman)</th>
              <th scope="col" className="p-3 font-display">İlçeler Arası (Boztepe/Akpınar vb.)</th>
              <th scope="col" className="p-3 font-display rounded-tr-lg">Şehirlerarası (300 Km)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-light text-slate-700">
            <tr className="hover:bg-slate-50">
              <th scope="row" className="p-3 font-bold text-navy">1+1 Daire</th>
              <td className="p-3">{getCalculatedPrice('1+1', 'sehirici')}</td>
              <td className="p-3">{getCalculatedPrice('1+1', 'ilceler')}</td>
              <td className="p-3 font-semibold text-orange-text">{getCalculatedPrice('1+1', 'sehirlerarasi', 300)}</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <th scope="row" className="p-3 font-bold text-navy">2+1 Daire</th>
              <td className="p-3">{getCalculatedPrice('2+1', 'sehirici')}</td>
              <td className="p-3">{getCalculatedPrice('2+1', 'ilceler')}</td>
              <td className="p-3 font-semibold text-orange-text">{getCalculatedPrice('2+1', 'sehirlerarasi', 300)}</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <th scope="row" className="p-3 font-bold text-navy">3+1 Daire</th>
              <td className="p-3">{getCalculatedPrice('3+1', 'sehirici')}</td>
              <td className="p-3">{getCalculatedPrice('3+1', 'ilceler')}</td>
              <td className="p-3 font-semibold text-orange-text">{getCalculatedPrice('3+1', 'sehirlerarasi', 300)}</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <th scope="row" className="p-3 font-bold text-navy">4+1 Daire</th>
              <td className="p-3">{getCalculatedPrice('4+1+', 'sehirici')}</td>
              <td className="p-3">{getCalculatedPrice('4+1+', 'ilceler')}</td>
              <td className="p-3 font-semibold text-orange-text">{getCalculatedPrice('4+1+', 'sehirlerarasi', 300)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="text-[10px] text-charcoal/70 italic border-l-2 border-orange pl-3">
        * Başlangıç fiyatıdır, kesin fiyat ücretsiz ekspertiz sonrası verilir. Fiyat Güncelleme Tarihi: {FACTS.priceUpdateDate}. Tablodaki fiyatlar normal eşya yoğunluğuna sahip binalardaki asansör kurulumlarını kapsayan tahmini başlangıç rakamlarıdır. Net ve kesin taşıma teklifiniz, eşya yoğunluğu ve kat yüksekliğine göre ücretsiz ekspertiz sonrasında verilecektir.
      </p>
    </div>
  );
}
