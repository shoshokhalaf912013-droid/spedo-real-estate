import type { Project } from "@/core/project";

import { ProjectService } from "./ProjectService";

export interface ProjectSearchQuery {

    keyword?: string;

    city?: string;

    developer?: string;

    status?: string;

    category?: string;

    published?: boolean;

    searchable?: boolean;

}

export class ProjectSearch {

    constructor(

        private readonly service: ProjectService

    ) {}

    search(

        query: ProjectSearchQuery

    ): Project[] {

        let projects = this.service.all();

        if (query.keyword) {

            const keyword =

                query.keyword.toLowerCase();

            projects = projects.filter(

                project =>

                    project.metadata.name
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    project.metadata.developer
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    project.metadata.city
                        .toLowerCase()
                        .includes(keyword)

            );

        }

        if (query.city) {

            projects = projects.filter(

                project =>

                    project.metadata.city === query.city

            );

        }

        if (query.developer) {

            projects = projects.filter(

                project =>

                    project.metadata.developer ===
                    query.developer

            );

        }

        if (query.status) {

            projects = projects.filter(

                project =>

                    project.metadata.status ===
                    query.status

            );

        }

        if (query.category) {

            projects = projects.filter(

                project =>

                    project.metadata.category ===
                    query.category

            );

        }

        if (

            query.published !== undefined

        ) {

            projects = projects.filter(

                project =>

                    project.manifest.published ===
                    query.published

            );

        }

        if (

            query.searchable !== undefined

        ) {

            projects = projects.filter(

                project =>

                    project.manifest.searchable ===
                    query.searchable

            );

        }

        return projects;

    }

}