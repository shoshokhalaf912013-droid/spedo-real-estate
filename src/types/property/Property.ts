import { PropertyAvailability } from "./Availability";
import { PropertyPayment } from "./Payment";
import { PropertySeo } from "./Seo";
import { PropertySource } from "./Source";

export interface PropertyUnit {

    id: string;

    slug: string;

    project: string;

    developer: string;

    compound: string;

    building: string;

    unitNo: string;

    floor: string;

    floorNumber: number;

    type: string;

    area: number;

    internalArea: number;

    terraceArea: number;

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

    status: string;

    availability: PropertyAvailability;

    currency: string;

    developerPrice: number;

    price: number;

    pricePerSqm: number;

    payment: PropertyPayment;

    source: PropertySource;

    seo: PropertySeo;

    featured: boolean;

    sortOrder: number;

    searchable: boolean;

    lastUpdated: string;

}