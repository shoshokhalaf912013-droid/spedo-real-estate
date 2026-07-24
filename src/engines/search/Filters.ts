import { PropertyUnit } from "@/types/property";
import { SearchQuery } from "./SearchQuery";

export function applyFilters(
    units: PropertyUnit[],
    query: SearchQuery
): PropertyUnit[] {
    return units.filter(unit => {
        if (
            query.projectCode &&
            !unit.id.startsWith(query.projectCode)
        ) {
            return false;
        }

        if (
            query.building &&
            unit.building !== query.building
        ) {
            return false;
        }

        if (
            query.bedrooms &&
            unit.bedrooms !== query.bedrooms
        ) {
            return false;
        }

        if (
            query.minPrice &&
            unit.price < query.minPrice
        ) {
            return false;
        }

        if (
            query.maxPrice &&
            unit.price > query.maxPrice
        ) {
            return false;
        }

        if (
            query.minArea &&
            unit.area < query.minArea
        ) {
            return false;
        }

        if (
            query.maxArea &&
            unit.area > query.maxArea
        ) {
            return false;
        }

        if (
            query.view &&
            unit.view !== query.view
        ) {
            return false;
        }

        if (
            query.propertyType &&
            unit.type !== query.propertyType
        ) {
            return false;
        }

        if (
            query.available &&
            !unit.availability.available
        ) {
            return false;
        }

        if (
            query.featured &&
            !unit.featured
        ) {
            return false;
        }

        if (
            query.customFilter &&
            !query.customFilter(unit)
        ) {
            return false;
        }

        return true;
    });
}