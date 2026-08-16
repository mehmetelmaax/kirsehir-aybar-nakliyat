import React from 'react';


interface BuildingAnalysisProps {
  districtName: string;
}

interface DistrictBuildingData {
  buildingType: string;
  typicalFloors: string;
  elevatorRequirement: string;
  streetWidth: string;
  specialCondition: string;
}

const DISTRICT_BUILDING_MAP: Record<string, DistrictBuildingData> = {
  'Akçakent': {
    buildingType: 'Ahşap ve Müstakil Konut Yapıları',
    typicalFloors: '1 - 3 Kat',
    elevatorRequirement: 'Çok Düşük (%5 asansör ihtiyacı)',
    streetWidth: 'Dar ve Kayalık Yamaç Yolları',
    specialCondition: 'Kayalık zemin dik yamaçlarda araç sabitleme ve fren takozları kullanılır.'
  },
  'Akpınar': {
    buildingType: 'Müstakil Konutlar ve Apartmanlar',
    typicalFloors: '2 - 5 Kat',
    elevatorRequirement: 'Düşük (%25 mobil asansör ihtiyacı)',
    streetWidth: 'Orta ve Rahat Geçişli Sokaklar',
    specialCondition: 'Giriş katı bahçe mesafelerinde yatay taşıma planlanır.'
  },
  'Boztepe': {
    buildingType: 'Müstakil Evler ve Yayla Konutları',
    typicalFloors: '1 - 3 Kat',
    elevatorRequirement: 'Çok Düşük (%5 asansör ihtiyacı)',
    streetWidth: 'Dar ve Dik Yokuşlu Köy Yolları',
    specialCondition: 'Dağlık arazi koşullarında araç hızı limitlere uygun tutulur.'
  },
  'Çiçekdağı': {
    buildingType: 'Yeni TOKİ Konutları ve Modern Bloklar',
    typicalFloors: '5 - 12 Kat',
    elevatorRequirement: 'Yüksek (%80 dış cephe asansörü kurulumu)',
    streetWidth: 'Geniş Sokaklar ve Bulvarlar',
    specialCondition: 'Yeni sitelerde bina asansörü yasakları nedeniyle dış cephe asansörü şarttır.'
  },
  'Kaman': {
    buildingType: 'Yüksek Rezidanslar ve Lüks Konut Blokları',
    typicalFloors: '10 - 25 Kat',
    elevatorRequirement: 'Çok Yüksek (%95 teleskopik asansör zorunludur)',
    streetWidth: 'Geniş Bulvarlar ve Orta Sokaklar',
    specialCondition: 'Peyzaj ve yeşil alan zeminlerine koruyucu kauçuk plaka serilmesi zorunludur.'
  },
  'Kırşehir Merkez': {
    buildingType: 'Eski Apartmanlar ve Yeni Rezidanslar',
    typicalFloors: '5 - 15 Kat',
    elevatorRequirement: 'Çok Yüksek (%85 dış cephe asansör kullanımı)',
    streetWidth: 'Dar ve Yoğun Araç Parklı Sokaklar',
    specialCondition: 'Ağaç dalları ve elektrik telleri asansör kurulum açısına göre temizlenmelidir.'
  },
  'Merkez': {
    buildingType: 'Eski Apartmanlar ve Yeni Rezidanslar',
    typicalFloors: '5 - 15 Kat',
    elevatorRequirement: 'Çok Yüksek (%85 dış cephe asansör kullanımı)',
    streetWidth: 'Dar ve Yoğun Araç Parklı Sokaklar',
    specialCondition: 'Ağaç dalları ve elektrik telleri asansör kurulum açısına göre temizlenmelidir.'
  },
  'Mucur': {
    buildingType: 'Eski Yerleşim Apartmanları ve Müstakiller',
    typicalFloors: '3 - 8 Kat',
    elevatorRequirement: 'Orta (%50 asansör kurulum ihtiyacı)',
    streetWidth: 'Dar ve Bitişik Nizam Sokaklar',
    specialCondition: 'Bina içi dar merdiven boşlukları nedeniyle taşımada ekstra dikkat gösterilmelidir.'
  }
};

export default function BuildingAnalysis({ districtName }: BuildingAnalysisProps) {
  // Normalize district name to prevent lookup issues
  const cleanName = districtName.trim();
  const info = DISTRICT_BUILDING_MAP[cleanName];

  if (!info) return null;

  return (
    <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6 text-charcoal">
      <h3 className="font-display font-bold text-navy text-lg md:text-xl border-b border-gray-light pb-2">
        {cleanName} İlçesi Bina Yapısı ve Nakliye Analiz Tablosu
      </h3>
      <p className="text-xs md:text-sm leading-relaxed text-charcoal/90">
        Kırşehir Aybar Nakliyat tarafından {cleanName} ilçesinde gerçekleştirilen ev taşıma süreçlerinde, ilçenin yerleşim mimarisi ve bina yapı durumlarına göre belirlenen lojistik analiz tablosu şu şekildedir:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <caption>{cleanName} Bölgesi Konut Mimarisi ve Asansör İhtiyaç Analizi</caption>
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="p-3 rounded-tl-lg">Kriter</th>
              <th scope="col" className="p-3 rounded-tr-lg">Analiz ve Tespit Sonucu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-light">
            <tr className="hover:bg-off-white/50">
              <th scope="row" className="p-3 font-bold text-navy">Mecra / Yapı Tipi</th>
              <td className="p-3">{info.buildingType}</td>
            </tr>
            <tr className="hover:bg-off-white/50">
              <th scope="row" className="p-3 font-bold text-navy">Ortalama Kat Seviyeleri</th>
              <td className="p-3">{info.typicalFloors}</td>
            </tr>
            <tr className="hover:bg-off-white/50">
              <th scope="row" className="p-3 font-bold text-navy">Dış Cephe Asansör İhtiyacı</th>
              <td className="p-3 text-green-600 font-bold">{info.elevatorRequirement}</td>
            </tr>
            <tr className="hover:bg-off-white/50">
              <th scope="row" className="p-3 font-bold text-navy">Sokak ve Ulaşım Durumu</th>
              <td className="p-3">{info.streetWidth}</td>
            </tr>
            <tr className="hover:bg-off-white/50">
              <th scope="row" className="p-3 font-bold text-navy">Özel Lojistik Tedbirleri</th>
              <td className="p-3 font-medium text-orange-text">{info.specialCondition}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
