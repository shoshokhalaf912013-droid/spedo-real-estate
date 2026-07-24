import { Project } from "./Project";

import { projectEngine } from "./ProjectEngine";
import { projectValidator } from "./ProjectValidator";
import { projectCache } from "./ProjectCache";

export class ProjectRuntime {

    boot(

        projects: Project[]

    ): void {

        const validProjects =

            projects.filter(

                project =>

                    projectValidator.isValid(project)

            );

        projectEngine.boot(

            validProjects

        );

        projectCache.clear();

        for (

            const project of validProjects

        ) {

            projectCache.set(project);

        }

    }

    projects(): Project[] {

        return projectEngine.projects();

    }

    count(): number {

        return projectEngine.count();

    }

    cached(): number {

        return projectCache.size();

    }

}

export const projectRuntime =
    new ProjectRuntime();