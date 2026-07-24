import type { PropertyUnit }
from "@/types/property-v2";

import type { SearchSort }
from "./SearchSort";

export function sortUnits(
    units: PropertyUnit[],
    sort: SearchSort
) {

    const sorted = [...units];

    switch (sort) {

        case "price-asc":

            return sorted.sort(
                (a, b) =>
                    a.price - b.price
            );

        case "price-desc":

            return sorted.sort(
                (a, b) =>
                    b.price - a.price
            );

        case "area-asc":

            return sorted.sort(
                (a, b) =>
                    a.area - b.area
            );

        case "area-desc":

            return sorted.sort(
                (a, b) =>
                    b.area - a.area
            );

        case "bedrooms":

            return sorted.sort(
                (a, b) =>
                    a.bedrooms - b.bedrooms
            );

        case "unit-number":

            return sorted.sort(
                (a, b) =>
                    a.sortOrder - b.sortOrder
            );

        default:

            return sorted;

    }

}