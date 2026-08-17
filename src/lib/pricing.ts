export interface PriceInput {
  rooms: '1+1' | '2+1' | '3+1' | '4+1+' | 'ofis';
  fromFloor: number;
  toFloor: number;
  fromElevator: boolean;
  toElevator: boolean;
  distanceType: 'sehirici' | 'ilceler' | 'sehirlerarasi';
  distanceKm?: number;
  packing: boolean;
  carpentry: boolean;
  storage: boolean;
}

export interface PriceEstimate {
  min: number;
  max: number;
  breakdown: {
    base: number;
    floorSurcharge: number;
    elevatorFee: number;
    packingFee: number;
    distanceFee: number;
    storageFee: number;
  };
  disclaimer: string;
}

// DOĞRULA: Fiyat katsayıları firma sahibi tarafından teyit edilmelidir.
export const PRICING_TABLE = {
  base: {
    '1+1': { min: 12000, max: 14000 }, // DOĞRULA: 1+1 baz şehiriçi fiyatı
    '2+1': { min: 15000, max: 18000 }, // DOĞRULA: 2+1 baz şehiriçi fiyatı
    '3+1': { min: 18000, max: 22000 }, // DOĞRULA: 3+1 baz şehiriçi fiyatı
    '4+1+': { min: 22000, max: 26000 }, // DOĞRULA: 4+1+ baz şehiriçi fiyatı
    'ofis': { min: 20000, max: 25000 }, // DOĞRULA: Ofis taşıma baz fiyatı
  },
  floorSurcharge: 200, // DOĞRULA: Kat başına işçilik farkı (asansör yoksa)
  elevatorFee: 2500, // DOĞRULA: Modül başına mobil asansör kurulum ücreti
  packingFee: {
    '1+1': 1500, // DOĞRULA: 1+1 paketleme malzeme/işçilik ücreti
    '2+1': 2500, // DOĞRULA: 2+1 paketleme malzeme/işçilik ücreti
    '3+1': 3500, // DOĞRULA: 3+1 paketleme malzeme/işçilik ücreti
    '4+1+': 4500, // DOĞRULA: 4+1+ paketleme malzeme/işçilik ücreti
    'ofis': 3000, // DOĞRULA: Ofis paketleme malzeme/işçilik ücreti
  },
  carpentryFee: 1500, // DOĞRULA: Marangoz de-montaj ve montaj ücreti
  storageFee: 3000, // DOĞRULA: Eşya depolama aylık kira bedeli
  distanceKmRate: 35, // DOĞRULA: Şehirlerarası km başına taşıma bedeli (TL)
  ilcelerFuelDiff: 4000, // DOĞRULA: Kırşehir içi ilçeler yakıt/zaman farkı
} as const;

export function estimatePrice(input: PriceInput): PriceEstimate {
  const disclaimer = 'Bu tahmini bir hesaplamadır, kesin fiyat ücretsiz ekspertiz sonrası verilir.';
  
  const roomKey = input.rooms;
  const basePrices = PRICING_TABLE.base[roomKey] || PRICING_TABLE.base['3+1'];
  
  const baseVal = basePrices.min;
  let floorSurchargeVal = 0;
  let elevatorFeeVal = 0;
  let packingFeeVal = 0;
  let distanceFeeVal = 0;
  let storageFeeVal = 0;

  // 1. Floor Surcharges (only if elevator is not used)
  if (!input.fromElevator && input.fromFloor > 1) {
    floorSurchargeVal += (input.fromFloor - 1) * PRICING_TABLE.floorSurcharge;
  }
  if (!input.toElevator && input.toFloor > 1) {
    floorSurchargeVal += (input.toFloor - 1) * PRICING_TABLE.floorSurcharge;
  }
  
  // 2. Elevator Fees
  if (input.fromElevator) {
    elevatorFeeVal += PRICING_TABLE.elevatorFee;
  }
  if (input.toElevator) {
    elevatorFeeVal += PRICING_TABLE.elevatorFee;
  }

  // 3. Packing Fees
  if (input.packing) {
    packingFeeVal += PRICING_TABLE.packingFee[roomKey] || 3500;
  }

  // 4. Carpentry
  if (input.carpentry) {
    packingFeeVal += PRICING_TABLE.carpentryFee;
  }

  // 5. Storage
  if (input.storage) {
    storageFeeVal += PRICING_TABLE.storageFee;
  }

  // 6. Distance Type
  if (input.distanceType === 'ilceler') {
    distanceFeeVal += PRICING_TABLE.ilcelerFuelDiff;
  } else if (input.distanceType === 'sehirlerarasi') {
    const km = input.distanceKm && input.distanceKm > 0 ? input.distanceKm : 100;
    distanceFeeVal += km * PRICING_TABLE.distanceKmRate;
  }

  const totalCalculated = baseVal + floorSurchargeVal + elevatorFeeVal + packingFeeVal + distanceFeeVal + storageFeeVal;
  
  // Round to nearest thousand for cleaner presentation
  const minVal = Math.round(totalCalculated / 1000) * 1000;
  const maxVal = Math.round((totalCalculated * 1.25) / 1000) * 1000;

  return {
    min: minVal,
    max: maxVal,
    breakdown: {
      base: baseVal,
      floorSurcharge: floorSurchargeVal,
      elevatorFee: elevatorFeeVal,
      packingFee: packingFeeVal,
      distanceFee: distanceFeeVal,
      storageFee: storageFeeVal
    },
    disclaimer
  };
}

import { DISTRICTS } from './site-config';

export function estimateFromQuoteForm(rooms: string, elevator: string, fromDistrict: string, toDistrict: string) {
  const isIntercity = fromDistrict.includes('Şehirlerarası') || toDistrict.includes('Şehirlerarası');
  const isDistrict = fromDistrict !== 'Merkez' || toDistrict !== 'Merkez';
  
  const distanceType: PriceInput['distanceType'] = isIntercity 
    ? 'sehirlerarasi' 
    : (isDistrict ? 'ilceler' : 'sehirici');

  // Look up distances dynamically from site-config
  const d1 = DISTRICTS.find(d => d.name === fromDistrict)?.distanceKm ?? 0;
  const d2 = DISTRICTS.find(d => d.name === toDistrict)?.distanceKm ?? 0;
  // If one of the districts is Intercity, default distance to 300km, otherwise calculate distanceKm
  const distanceKm = isIntercity ? 300 : Math.abs(d1 - d2);

  const input: PriceInput = {
    rooms: (['1+1', '2+1', '3+1', '4+1+', 'ofis'].includes(rooms) ? rooms : '3+1') as PriceInput['rooms'],
    fromFloor: 3,
    toFloor: 3,
    fromElevator: elevator === 'evet',
    toElevator: elevator === 'evet',
    distanceType,
    distanceKm,
    packing: true,
    carpentry: true,
    storage: false
  };

  return estimatePrice(input);
}

