export interface GalleryItem {
    id: string;
    title: string;
    images: string[];
}

export interface VideoItem {
    id: string;
    title: string;
    video: string;
}

export interface FloorPlanItem {
    id: string;
    title: string;
    file: string;
}

export interface DynamicSection {
    id: string;
    type: string;
    title: string;
    data?: any;
}