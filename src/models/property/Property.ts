export type PropertyType =
    | "residential"
    | "commercial"
    | "project";

export interface PropertyMedia {

    id: string;

    name: string;

    url: string;

    type:
        | "image"
        | "video"
        | "pdf";

}

export interface GallerySection {

    images: PropertyMedia[];

}

export interface VideoSection {

    videos: PropertyMedia[];

}

export interface FloorPlanSection {

    files: PropertyMedia[];

}

export interface SpecificationSection {

    bedrooms?: number;

    bathrooms?: number;

    area?: number;

    floor?: number;

}

export interface Amenity {

    id: string;

    name: string;

}

export interface Property {

    id: string;

    title: string;

    slug: string;

    description: string;

    propertyType: PropertyType;

    sections: {

        gallery: GallerySection;

        videos: VideoSection;

        floorPlans: FloorPlanSection;

        specifications: SpecificationSection;

        amenities: Amenity[];

    };

    createdAt: Date;

    updatedAt: Date;

}