import type { Project } from "@/core/project";

export class ProjectRepository {

    private readonly projects = new Map<string, Project>();

    register(project: Project): void {

        this.projects.set(

            project.metadata.id,

            project

        );

    }

    registerMany(

        projects: Project[]

    ): void {

        for (const project of projects) {

            this.register(project);

        }

    }

    all(): Project[] {

        return Array.from(

            this.projects.values()

        );

    }

    count(): number {

        return this.projects.size;

    }

    findById(

        id: string

    ): Project | undefined {

        return this.projects.get(id);

    }

    findBySlug(

        slug: string

    ): Project | undefined {

        return this.all().find(

            project =>

                project.metadata.slug === slug

        );

    }

    exists(

        id: string

    ): boolean {

        return this.projects.has(id);

    }

    remove(

        id: string

    ): boolean {

        return this.projects.delete(id);

    }

    clear(): void {

        this.projects.clear();

    }

    search(

        keyword: string

    ): Project[] {

        const value =

            keyword.toLowerCase();

        return this.all().filter(

            project =>

                project.metadata.name
                    .toLowerCase()
                    .includes(value)

                ||

                project.metadata.developer
                    .toLowerCase()
                    .includes(value)

                ||

                project.metadata.city
                    .toLowerCase()
                    .includes(value)

        );

    }

}