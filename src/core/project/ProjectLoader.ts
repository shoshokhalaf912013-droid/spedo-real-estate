// src/core/project/ProjectLoader.ts

import { projects } from "@/data/projectRegistry";

import { Project } from "./Project";
import { projectRegistry } from "./ProjectRegistry";

export class ProjectLoader {

    load(project: Project): void {

        projectRegistry.register(project);

    }

    loadMany(projects: Project[]): void {

        for (const project of projects) {

            this.load(project);

        }

    }

    loadAll(): void {

        projectRegistry.clear();

        this.loadMany(projects);

    }

    unload(id: string): void {

        projectRegistry.unregister(id);

    }

    reload(project: Project): void {

        this.unload(project.metadata.id);

        this.load(project);

    }

}

export const projectLoader =
    new ProjectLoader();