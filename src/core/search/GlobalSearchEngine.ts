import type { Project } from "@/core/project";
import type { PropertyUnit } from "@/types/property-v2";

export interface GlobalSearchFilters {

    projectSlug?: string;

    search?: string;

    propertyType?: string;

    budget?: string;

    building?: string;

    floor?: string;

    view?: string;

    finishing?: string;

}

export function getAllUnits(
    projects: Project[]
): PropertyUnit[] {

    return projects.flatMap(
        (project) => project.units
    );

}

export function searchUnits(
    projects: Project[],
    filters: GlobalSearchFilters
): PropertyUnit[] {

    let units = getAllUnits(projects);

    if (filters.projectSlug) {

        units = units.filter(
            (unit) =>
                unit.project
                    .toLowerCase()
                    .replace(/\s+/g, "-") ===
                filters.projectSlug
        );

    }

    if (filters.search) {

        const search =
            filters.search.toLowerCase();

        units = units.filter(
            (unit) =>

                unit.unitNo
                    .toLowerCase()
                    .includes(search)

                ||

                unit.type
                    .toLowerCase()
                    .includes(search)

                ||

                unit.view
                    .toLowerCase()
                    .includes(search)

                ||

                unit.project
                    .toLowerCase()
                    .includes(search)
        );

    }

    if (
        filters.propertyType &&
        filters.propertyType !== "all"
    ) {

        units = units.filter(
            (unit) =>
                unit.type ===
                filters.propertyType
        );

    }

    if (
        filters.building &&
        filters.building !== "all"
    ) {

        units = units.filter(
            (unit) =>
                unit.building ===
                filters.building
        );

    }

    if (
        filters.floor &&
        filters.floor !== "all"
    ) {

        units = units.filter(
            (unit) =>
                unit.floor ===
                filters.floor
        );

    }

    if (
        filters.view &&
        filters.view !== "all"
    ) {

        units = units.filter(
            (unit) =>
                unit.view ===
                filters.view
        );

    }

    if (
        filters.finishing &&
        filters.finishing !== "all"
    ) {

        units = units.filter(
            (unit) =>
                unit.finishing ===
                filters.finishing
        );

    }

    if (
        filters.budget &&
        filters.budget !== "all"
    ) {

        units = units.filter(
            (unit) => {

                const price =
                    unit.price;

                switch (
                    filters.budget
                ) {

                    case "less-than-2m":
                        return price < 2000000;

                    case "2m-2.5m":
                        return (
                            price >= 2000000 &&
                            price < 2500000
                        );

                    case "2.5m-3m":
                        return (
                            price >= 2500000 &&
                            price < 3000000
                        );

                    case "3m-3.5m":
                        return (
                            price >= 3000000 &&
                            price < 3500000
                        );

                    case "3.5m-4m":
                        return (
                            price >= 3500000 &&
                            price < 4000000
                        );

                    case "4m-plus":
                        return price >= 4000000;

                    default:
                        return true;

                }

            }
        );

    }

    return units;

}