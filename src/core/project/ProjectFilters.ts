import type { Project } from "@/core/project";

export interface ProjectFilterOptions {

    city?: string;

    developer?: string;

    status?: string;

    category?: string;

    country?: string;

    published?: boolean;

    searchable?: boolean;

}

export class ProjectFilters {

    apply(

        projects: Project[],

        filters: ProjectFilterOptions

    ): Project[] {

        return projects.filter(project => {

            if (

                filters.city &&

                project.metadata.city !== filters.city

            ) {

                return false;

            }

            if (

                filters.country &&

                project.metadata.country !== filters.country

            ) {

                return false;

            }

            if (

                filters.developer &&

                project.metadata.developer !== filters.developer

            ) {

                return false;

            }

            if (

                filters.status &&

                project.metadata.status !== filters.status

            ) {

                return false;

            }

            if (

                filters.category &&

                project.metadata.category !== filters.category

            ) {

                return false;

            }

            if (

                filters.published !== undefined &&

                project.manifest.published !== filters.published

            ) {

                return false;

            }

            if (

                filters.searchable !== undefined &&

                project.manifest.searchable !== filters.searchable

            ) {

                return false;

            }

            return true;

        });

    }

}