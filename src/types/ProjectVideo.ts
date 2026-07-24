export type ProjectVideoType =
    | "promo"
    | "construction"
    | "masterplan"
    | "drone"
    | "walkthrough"
    | "interview"
    | "commercial"
    | "other";

export interface ProjectVideo {

    id: string;

    title: string;

    description?: string;

    type: ProjectVideoType;

    thumbnail: string;

    url: string;

    provider?:
        | "youtube"
        | "vimeo"
        | "local";

    duration?: number;

    language?: string;

    featured?: boolean;

    publishedAt?: string;

}