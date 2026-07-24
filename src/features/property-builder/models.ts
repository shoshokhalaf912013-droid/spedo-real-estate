export interface PropertyMedia {
    id: string;

    type:
        | "image"
        | "video"
        | "pdf"
        | "brochure"
        | "virtualTour";

    name: string;

    url: string;
}

export interface Gallery {
    id: string;

    title: string;

    mediaIds: string[];
}

export interface Video {
    id: string;

    title: string;

    mediaId?: string;
}

export interface FloorPlan {
    id: string;

    title: string;

    mediaId?: string;
}

export interface DynamicSection {
    id: string;

    type: string;

    title: string;

    hidden: boolean;
}

export interface PropertyData {

    /* ===========================
       BASIC INFORMATION
    =========================== */

    title: string;

    reference: string;

    status: string;

    description: string;

    /* ===========================
       CLASSIFICATION
    =========================== */

    module: string;

    propertyType: string;

    purpose: string;

    payment: string;

    /* ===========================
       PRICING
    =========================== */

    price: number;

    currency: string;

    /* ===========================
       SPECIFICATIONS
    =========================== */

    area: number;

    bedrooms: number;

    bathrooms: number;

    floor: string;

    buildingAge: number;

    parking: boolean;

    garden: boolean;

    pool: boolean;

    elevator: boolean;

    smartHome: boolean;

    furnishing: string;

    finishing: string;

    view: string;

    deliveryDate: string;

    /* ===========================
       LOCATION
    =========================== */

    country: string;

    city: string;

    district: string;

    address: string;

    latitude: string;

    longitude: string;

    /* ===========================
       MEDIA
    =========================== */

    media: PropertyMedia[];

    galleries: Gallery[];

    videos: Video[];

    floorPlans: FloorPlan[];

    /* ===========================
       DYNAMIC CONTENT
    =========================== */

    sections: DynamicSection[];

    /* ===========================
       SEO
    =========================== */

    seoTitle?: string;

    seoDescription?: string;

    seoKeywords?: string;

    slug?: string;

    /* ===========================
       PUBLISH
    =========================== */

    featured?: boolean;

    publishedAt?: string;
}