import { projectEngine } from "@/core/project";
import { searchService } from "@/services/search/SearchService";

import { ProjectCardMapper } from "./ProjectCardMapper";
import { ProjectDetailsMapper } from "./ProjectDetailsMapper";

import type { Project } from "@/core/project";
import type { PropertyUnit } from "@/types/property";
import type { ProjectCardModel } from "./ProjectCardModel";
import type { ProjectDetailsModel } from "./ProjectDetailsModel";

export class ProjectApplication {

    getProjects(): Project[] {

        return projectEngine.projects();

    }

    getProject(
        id: string
    ): Project | undefined {

        return projectEngine.find(id);

    }

    getProjectBySlug(
        slug: string
    ): Project | undefined {

        return projectEngine
            .projects()
            .find(
                project =>
                    project.metadata.slug === slug
            );

    }

    getProjectDetails(
        slug: string
    ): ProjectDetailsModel | undefined {

        const project =
            this.getProjectBySlug(slug);

        if (!project) {

            return undefined;

        }

        return ProjectDetailsMapper.map(
            project
        );

    }

    getUnits(
        projectId: string
    ): PropertyUnit[] {

        const project =
            projectEngine.find(projectId);

        if (!project) {

            return [];

        }

        return project.units;

    }

    getUnitCount(
        projectId: string
    ): number {

        return this.getUnits(
            projectId
        ).length;

    }

    search(
        query: string
    ): PropertyUnit[] {

        return searchService.search({

            text: query

        });

    }

    ready(): boolean {

        return projectEngine.count() > 0;

    }

    // ===================================================
    // UI MODELS
    // ===================================================

    getProjectCards():
        ProjectCardModel[] {

        return projectEngine
            .projects()
            .map(
                project =>
                    ProjectCardMapper.map(
                        project
                    )
            );

    }

    getFeaturedProjects():
        ProjectCardModel[] {

        return this.getProjectCards();

    }

    getLatestProjects():
        ProjectCardModel[] {

        return this.getProjectCards();

    }

    getHomeProjects():
        ProjectCardModel[] {

        return this.getProjectCards();

    }

    // ===================================================
    // STATISTICS
    // ===================================================

    getStatistics() {

        const projects =
            this.getProjects();

        const units =
            projects.flatMap(
                project =>
                    project.units
            );

        return {

            projects:
                projects.length,

            units:
                units.length,

            available:
                units.filter(
                    unit =>
                        unit.availability.available
                ).length

        };

    }

}

export const projectApplication =
    new ProjectApplication();

export default projectApplication;