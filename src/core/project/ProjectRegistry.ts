import { Project } from "./Project";

export class ProjectRegistry {

    private readonly projects =
        new Map<string, Project>();

    register(project: Project): void {

        if (

            this.projects.has(
                project.metadata.id
            )

        ) {

            throw new Error(

                `Project "${project.metadata.id}" already exists.`

            );

        }

        this.projects.set(

            project.metadata.id,

            project

        );

    }

    unregister(id: string): void {

        this.projects.delete(id);

    }

    get(id: string): Project | undefined {

        return this.projects.get(id);

    }

    has(id: string): boolean {

        return this.projects.has(id);

    }

    all(): Project[] {

        return Array.from(
            this.projects.values()
        );

    }

    ids(): string[] {

        return Array.from(
            this.projects.keys()
        );

    }

    count(): number {

        return this.projects.size;

    }

    clear(): void {

        this.projects.clear();

    }

}

export const projectRegistry =
    new ProjectRegistry();