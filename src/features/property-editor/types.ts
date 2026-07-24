export type SectionType =
    | "gallery"
    | "videos"
    | "floorplans"
    | "specifications"
    | "amenities"
    | "faq"
    | "location"
    | "seo";

export interface GalleryItem {

    id: string;

    url: string;

}

export interface VideoItem {

    id: string;

    url: string;

}

export interface PropertySection {

    id: string;

    type: SectionType;

    title: string;

    gallery?: GalleryItem[];

    videos?: VideoItem[];

}