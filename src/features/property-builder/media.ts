export type MediaType =
    | "image"
    | "video"
    | "pdf"
    | "brochure"
    | "virtualTour"
    | "floorPlan";

export interface MediaFile {

    id: string;

    publicId?: string;

    name: string;

    url: string;

    type: MediaType;

    width?: number;

    height?: number;

    bytes?: number;

    format?: string;

    folder?: string;

    createdAt?: string;

}