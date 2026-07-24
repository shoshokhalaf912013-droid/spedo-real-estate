export type AIIntent =
    | "search"
    | "recommend"
    | "compare"
    | "greeting"
    | "help"
    | "contact"
    | "project"
    | "projects"
    | "developer"
    | "location"
    | "investment"
    | "budget"
    | "faq"
    | "unknown";

export type AISortOption =
    | "price_asc"
    | "price_desc"
    | "area_asc"
    | "area_desc";

export interface AIQuery {

    intent: AIIntent;

    project?: string;

    type?: string;

    view?: string;

    bedrooms?: number;

    family?: boolean;

    minPrice?: number;

    maxPrice?: number;

    sortBy?: AISortOption;

}