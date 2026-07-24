import type { PropertyUnit } from "@/types/property-v2";

import type { SearchFilters } from "./SearchFilters";
import type { SearchSort } from "./SearchSort";

import { searchUnits } from "./GlobalSearchEngine";
import { sortUnits } from "./sortUnits";

import { projects } from "@/data/projects";

export class SearchService {

    static search(
        filters: SearchFilters,
        sort: SearchSort = "default"
    ): PropertyUnit[] {

        const results = searchUnits(
            projects,
            {
                projectSlug:
                    filters.project,

                search:
                    filters.search,

                propertyType:
                    filters.propertyType,

                budget:
                    filters.budget,

                building:
                    filters.building,

                floor:
                    filters.floor,

                view:
                    filters.view,

                finishing:
                    filters.finishing
            }
        );

        return sortUnits(
            results,
            sort
        );

    }

    static all(): PropertyUnit[] {

        return this.search(
            {},
            "default"
        );

    }

    static byProject(
        projectSlug: string
    ): PropertyUnit[] {

        return this.search({
            project: projectSlug
        });

    }

}