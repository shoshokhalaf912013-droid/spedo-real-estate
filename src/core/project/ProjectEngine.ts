import { Project } from "./Project";
import { projectLoader } from "./ProjectLoader";
import { projectRegistry } from "./ProjectRegistry";

export class ProjectEngine {

    boot(projects: Project[]): void {

        projectRegistry.clear();

        projectLoader.loadMany(projects);

    }

    register(project: Project): void {

        projectLoader.load(project);

    }

    unregister(id: string): void {

        projectLoader.unload(id);

    }

    reload(project: Project): void {

        projectLoader.reload(project);

    }

    projects(): Project[] {

        return projectRegistry.all();

    }

    ids(): string[] {

        return projectRegistry.ids();

    }

    count(): number {

        return projectRegistry.count();

    }

    find(id: string): Project | undefined {

        return projectRegistry.get(id);

    }

}

export const projectEngine =
    new ProjectEngine();