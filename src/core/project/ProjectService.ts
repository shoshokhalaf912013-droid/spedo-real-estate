import type { Project } from "@/core/project";

import { ProjectRepository } from "./ProjectRepository";

export class ProjectService {

    constructor(

        private readonly repository: ProjectRepository

    ) {}

    all(): Project[] {

        return this.repository.all();

    }

    count(): number {

        return this.repository.count();

    }

    byId(

        id: string

    ): Project | undefined {

        return this.repository.findById(id);

    }

    bySlug(

        slug: string

    ): Project | undefined {

        return this.repository.findBySlug(slug);

    }

    exists(

        id: string

    ): boolean {

        return this.repository.exists(id);

    }

    search(

        keyword: string

    ): Project[] {

        return this.repository.search(keyword);

    }

    developer(

        developer: string

    ): Project[] {

        return this.repository

            .all()

            .filter(

                project =>

                    project.metadata.developer === developer

            );

    }

    city(

        city: string

    ): Project[] {

        return this.repository

            .all()

            .filter(

                project =>

                    project.metadata.city === city

            );

    }

    published(): Project[] {

        return this.repository

            .all()

            .filter(

                project =>

                    project.manifest.published

            );

    }

    searchable(): Project[] {

        return this.repository

            .all()

            .filter(

                project =>

                    project.manifest.searchable

            );

    }

}