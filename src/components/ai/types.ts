export type ChatRole =
    | "user"
    | "assistant";

export interface ChatMessage {

    id: string;

    role: ChatRole;

    text: string;

    createdAt: string;

}

export interface AIQuery {

    // =====================
    // INTENT
    // =====================

    intent?:
        | "search"
        | "projects"
        | "compare"
        | "investment"
        | "help"
        | "greeting"
        | "budget";

    // =====================
    // PROPERTY
    // =====================

    project?: string;

    type?: string;

    view?: string;

    bedrooms?: number;

    family?: boolean;

    // =====================
    // PRICE
    // =====================

    minPrice?: number;

    maxPrice?: number;

    installments?: boolean;

    // =====================
    // SORT
    // =====================

    sortBy?:
        | "price_asc"
        | "price_desc"
        | "area_asc"
        | "area_desc";

}