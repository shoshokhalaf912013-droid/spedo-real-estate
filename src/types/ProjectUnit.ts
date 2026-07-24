export type UnitStatus =
  | "available"
  | "reserved"
  | "sold";

export interface ProjectUnit {
  id: string;

  projectId: string;

  code: string;

  title: string;

  type: string;

  bedrooms: number;

  bathrooms: number;

  area: number;

  floor?: number;

  view?: string;

  price: number;

  currency: string;

  downPayment?: number;

  installmentYears?: number;

  deliveryYear?: number;

  status: UnitStatus;

  featured?: boolean;
}