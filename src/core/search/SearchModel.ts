export interface SearchUnit {

    id: string;

    code: string;

    slug: string;

    projectId: string;

    projectName: string;

    developer: string;

    city: string;

    district: string;

    type: string;

    bedrooms: number;

    bathrooms: number;

    area: number;

    building?: string;

    floor?: string;

    view?: string;

    finishing?: string;

    price: number;

    currency: string;

    status: string;

    featured: boolean;

}