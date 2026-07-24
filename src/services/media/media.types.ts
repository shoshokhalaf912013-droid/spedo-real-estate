export type MediaType =
    | "image"
    | "video"
    | "pdf"
    | "brochure"
    | "floorplan";

export interface Media {

    id: string;

    name: string;

    url: string;

    type: MediaType;

    size: number;

    width?: number;

    height?: number;

    favorite: boolean;

    cover: boolean;

    createdAt: string;

    updatedAt: string;

}