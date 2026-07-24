export interface ListingMedia {

    cover: string;

    gallery?: string[];

    videos?: string[];

    floorPlans?: string[];

    brochure?: string;

    virtualTour?: string;

}

export type ListingSector =
    | "residential"
    | "commercial";

export type ListingCategory =
    | "sale"
    | "rent";

export type ListingSaleType =
    | "cash"
    | "installments";

export type ListingPropertyType =
    | "apartment"
    | "studio"
    | "villa"
    | "chalet"
    | "penthouse"
    | "duplex"
    | "townhouse"
    | "twinhouse"
    | "office"
    | "shop"
    | "clinic"
    | "restaurant"
    | "cafe"
    | "warehouse"
    | "factory"
    | "hotel"
    | "land";

export interface Listing {

    id: string;

    slug: string;

    title: string;

    description: string;

    sector: ListingSector;

    category: ListingCategory;

    saleType?: ListingSaleType;

    propertyType: ListingPropertyType;

    city: string;

    district: string;

    bedrooms?: number;

    bathrooms?: number;

    area: number;

    price: number;

    currency: string;

    featured: boolean;

    available: boolean;

    media: ListingMedia;

    createdAt: string;

}