import { propertyIndex }
from "@/core/search/PropertyIndex";

import { normalizeSearchValue }
from "./SearchNormalizer";

import type { PropertyUnit }
from "@/types/property";

export interface SearchFilters {

    text?: string;

    project?: string;

    developer?: string;

    type?: string;

    view?: string;

    bedrooms?: number;

    available?: boolean;

    featured?: boolean;

    minArea?: number;

    maxArea?: number;

    minPrice?: number;

    maxPrice?: number;

}

export class SearchService {

    search(
        filters: SearchFilters = {}
    ): PropertyUnit[] {

        let units =
            propertyIndex.all();

        if (filters.project) {

            const projectQuery =
                normalizeSearchValue(
                    filters.project
                );

            units = units.filter(

                unit =>

                    normalizeSearchValue(
                        unit.project
                    ).includes(
                        projectQuery
                    ) ||

                    normalizeSearchValue(
                        unit.compound
                    ).includes(
                        projectQuery
                    )

            );

        }

        if (filters.developer) {

            const developerQuery =
                normalizeSearchValue(
                    filters.developer
                );

            units = units.filter(

                unit =>

                    normalizeSearchValue(
                        unit.developer
                    ).includes(
                        developerQuery
                    )

            );

        }

        if (filters.type) {

            const typeQuery =
                normalizeSearchValue(
                    filters.type
                );

            units = units.filter(

                unit =>

                    normalizeSearchValue(
                        unit.type
                    ).includes(
                        typeQuery
                    )

            );

        }

        if (filters.view) {

            const viewQuery =
                normalizeSearchValue(
                    filters.view
                );

            units = units.filter(

                unit =>

                    normalizeSearchValue(
                        unit.view
                    ).includes(
                        viewQuery
                    )

            );

        }

        if (filters.bedrooms !== undefined) {

            units = units.filter(

                unit =>

                    unit.bedrooms ===
                    filters.bedrooms

            );

        }

        if (filters.available) {

            units = units.filter(

                unit =>

                    unit.availability.available

            );

        }

        if (filters.featured) {

            units = units.filter(

                unit =>

                    unit.featured

            );

        }

        if (filters.minArea !== undefined) {

            units = units.filter(

                unit =>

                    unit.area >=
                    filters.minArea!

            );

        }

        if (filters.maxArea !== undefined) {

            units = units.filter(

                unit =>

                    unit.area <=
                    filters.maxArea!

            );

        }

        if (filters.minPrice !== undefined) {

            units = units.filter(

                unit =>

                    unit.price >=
                    filters.minPrice!

            );

        }

        if (filters.maxPrice !== undefined) {

            units = units.filter(

                unit =>

                    unit.price <=
                    filters.maxPrice!

            );

        }

        if (filters.text) {

            const q =
                normalizeSearchValue(
                    filters.text
                );

            units = units.filter(unit => {

                const searchableText = [

                    unit.id,

                    unit.slug,

                    unit.project,

                    unit.compound,

                    unit.developer,

                    unit.unitNo,

                    unit.building,

                    unit.type,

                    unit.view,

                    unit.currency,

                    unit.status,

                    unit.finishing,

                    String(unit.area),

                    String(unit.bedrooms),

                    String(unit.price)

                ]

                    .join(" ");

                return normalizeSearchValue(
                    searchableText
                ).includes(q);

            });

        }

        return units;

    }

    all(): PropertyUnit[] {

        return propertyIndex.all();

    }

    available(): PropertyUnit[] {

        return propertyIndex.available();

    }

    featured(): PropertyUnit[] {

        return propertyIndex.featured();

    }

}

export const searchService =
    new SearchService();

export default searchService;