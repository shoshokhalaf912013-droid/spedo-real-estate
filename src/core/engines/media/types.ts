export type MediaType =
    | "image"
    | "video"
    | "pdf"
    | "floorplan"
    | "masterplan"
    | "brochure"
    | "price-list"
    | "virtual-tour";

export interface MediaAsset {

    id: string;

    name: string;

    url: string;

    type: MediaType;

    folder?: string;

    tags: string[];

    cover: boolean;

    favorite: boolean;

    createdAt: Date;

}