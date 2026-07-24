/**
 * ============================================================
 * Blue Crest Importer Constants
 * ============================================================
 */

export const PROJECT = {
  id: "blue-crest",
  code: "BC",
  developer: "Kayan Development",
  developerCode: "KYN",
  platform: "SPEDO",
} as const;

export const BUILDINGS = [
  "A",
  "B",
  "C",
] as const;

export const UNIT_TYPES = [
  "One Bedroom",
  "Two Bedrooms",
] as const;

export const COLUMN = {
  UNIT: "Apt. No.",
  LEVEL: "Level",
  TYPE: "Type",
  SIZE: "Size",
  VIEW: "View",
  PRICE: "Unit Price",
  DOWN_PAYMENT: "Downpayment. 20%",
  QUARTERLY: "Quarterely",
  MAINTENANCE: "Maintenance.",
  FACILITIES: "Facilities. 02%",
} as const;

export const SHEET = "Sheet1";

export const CURRENCY = "EGP";

export const PAYMENT = {
  downPaymentPercent: 20,
  maintenancePercent: 8,
  facilitiesPercent: 2,
  installments: "Quarterly",
};

export const START_ROWS = {
  BUILDING: "BUILDING",
  TYPE: "Type:",
};