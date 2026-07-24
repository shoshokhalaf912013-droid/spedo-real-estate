import { PropertyRepository } from "@/core/propertyRepository";

import { SearchQuery } from "./SearchQuery";
import { SearchResult } from "./SearchResult";
import { SearchSort } from "./Sort";
import { applyFilters } from "./Filters";

import { PropertyUnit } from "@/types/property";

export class SearchEngine {

    constructor(
        private readonly repository: PropertyRepository
    ) {}

    search(

        query: SearchQuery,

        sort?: SearchSort

    ): SearchResult {

        const started = performance.now();

        let units = this.repository.all();

        units = applyFilters(
            units,
            query
        );

        units = this.sort(
            units,
            sort
        );

        return {

            queryTime:
                performance.now() - started,

            total:
                units.length,

            items:
                units

        };

    }

    private sort(

        units: PropertyUnit[],

        sort?: SearchSort

    ): PropertyUnit[] {

        if (!sort)
            return units;

        const result =
            [...units];

        switch (sort) {

            case SearchSort.PriceAsc:

                result.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;

            case SearchSort.PriceDesc:

                result.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;

            case SearchSort.AreaAsc:

                result.sort(
                    (a, b) =>
                        a.area - b.area
                );

                break;

            case SearchSort.AreaDesc:

                result.sort(
                    (a, b) =>
                        b.area - a.area
                );

                break;

            case SearchSort.Newest:

                result.sort(
                    (a, b) =>
                        b.sortOrder - a.sortOrder
                );

                break;

        }

        return result;

    }

}