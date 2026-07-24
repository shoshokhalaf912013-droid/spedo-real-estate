export interface ImportedUnit {
    unitNumber: string;

    building?: string;

    level: number;

    floor?: string;

    unitType: string;

    bedrooms: number;

    area: number;

    view: string;

    currency?: string;

    price?: number;

    priceEGP?: number;

    priceEUR?: number;

    downPayment?: number;

    quarterly?: number;

    maintenance?: number;

    facilities?: number;

    status?: string;
}