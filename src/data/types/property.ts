export type Currency = "EGP" | "EUR";

export type UnitStatus =
  | "Available"
  | "Reserved"
  | "Sold";

export type UnitType =
  | "Studio"
  | "1 Bedroom"
  | "2 Bedrooms"
  | "3 Bedrooms"
  | "Penthouse"
  | "Villa"
  | "Twin House"
  | "Townhouse"
  | "Chalet"
  | "Office"
  | "Shop";

export interface PaymentPlan {
  downPayment: number;
  installmentYears: number;
  installmentMonths: number;
  quarterlyInstallment?: number;
  monthlyInstallment?: number;
  maintenancePercent?: number;
  clubFees?: number;
}

export interface PropertyUnit {

  id: string;

  project: string;

  developer: string;

  compound: string;

  building: string;

  unitNo: string;

  floor: string;

  type: UnitType;

  area: number;

  bedrooms: number;

  bathrooms: number;

  reception: number;

  kitchen: number;

  balcony: boolean;

  terrace: boolean;

  roof: boolean;

  garden: boolean;

  view: string;

  finishing: string;

  delivery: string;

  status: UnitStatus;

  currency: Currency;

  price: number;

  pricePerSqm: number;

  payment: PaymentPlan;

  latitude?: number;

  longitude?: number;

  notes?: string;

  lastUpdated: string;

}