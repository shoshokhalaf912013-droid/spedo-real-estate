import { Project } from "./Project";

export class ProjectCache {

    private readonly cache =
        new Map<string, Project>();

    has(id: string): boolean {

        return this.cache.has(id);

    }

    get(

        id: string

    ): Project | undefined {

        return this.cache.get(id);

    }

    set(

        project: Project

    ): void {

        this.cache.set(

            project.metadata.id,

            project

        );

    }

    remove(

        id: string

    ): boolean {

        return this.cache.delete(id);

    }

    clear(): void {

        this.cache.clear();

    }

    values(): Project[] {

        return Array.from(

            this.cache.values()

        );

    }

    size(): number {

        return this.cache.size;

    }

}

export const projectCache =
    new ProjectCache();