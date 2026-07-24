import type { Project } from "@/core/project";

export class ProjectDiscovery {

    private readonly projects: Project[] = [];

    register(
        project: Project
    ): void {

        this.projects.push(project);

    }

    all(): Project[] {

        return this.projects;

    }

    count(): number {

        return this.projects.length;

    }

}