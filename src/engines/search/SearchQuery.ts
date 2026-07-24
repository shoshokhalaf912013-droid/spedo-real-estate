import type { PropertyUnit } from "@/types/property";

export interface SearchQuery {
    projectCode?: string;

    building?: string;

    bedrooms?: number;

    minPrice?: number;

    maxPrice?: number;

    minArea?: number;

    maxArea?: number;

    view?: string;

    location?: string;

    propertyType?: string;

    available?: boolean;

    featured?: boolean;

    customFilter?: (
        unit: PropertyUnit
    ) => boolean;
}