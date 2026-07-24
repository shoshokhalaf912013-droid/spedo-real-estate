import { createContext } from "react";

import type { Project } from "@/core/project";
import type { PropertyUnit } from "@/types/property";

export interface ProjectContextValue {

    projects: Project[];

    currentProject?: Project;

    units: PropertyUnit[];

    loading: boolean;

    getProject(
        id: string
    ): Project | undefined;

    getProjectBySlug(
        slug: string
    ): Project | undefined;

    search(
        query: string
    ): PropertyUnit[];

}

export const ProjectContext =
    createContext<ProjectContextValue | null>(
        null
    );

export default ProjectContext;