export interface ProjectCardModel {

    id: string;

    slug: string;

    name: string;

    shortName: string;

    developer: string;

    city: string;

    country: string;

    category: string;

    propertyType: string;

    description: string;

    image: string;

    badge: string;

    tags: string[];

    cta: string;

    totalUnits: number;

    availableUnits: number;

    startingPrice: number;

    currency: string;

}