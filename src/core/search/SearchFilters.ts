export interface SearchFilters {

    project?: string;

    search?: string;

    budget?: string;

    propertyType?: string;

    bedrooms?: number | "all";

    building?: string;

    floor?: string;

    view?: string;

    finishing?: string;

    featured?: boolean;

    availableOnly?: boolean;

}