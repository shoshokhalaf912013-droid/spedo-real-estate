"use client";

import { ReactNode, useMemo, useState } from "react";

import ProjectContext from "./ProjectContext";
import { projectApplication } from "./ProjectApplication";

import type { Project } from "@/core/project";
import type { PropertyUnit } from "@/types/property";

interface Props {

    children: ReactNode;

}

export function ProjectProvider({

    children

}: Props) {

    const [projects] =
        useState<Project[]>(
            projectApplication.getProjects()
        );

    const [currentProject] =
        useState<Project | undefined>(
            undefined
        );

    const [units] =
        useState<PropertyUnit[]>(
            []
        );

    const value = useMemo(() => ({

        projects,

        currentProject,

        units,

        loading:
            !projectApplication.ready(),

        getProject: (id: string) =>
            projectApplication.getProject(id),

        getProjectBySlug: (slug: string) =>
            projectApplication.getProjectBySlug(slug),

        search: (query: string) =>
            projectApplication.search(query)

    }), [

        projects,

        currentProject,

        units

    ]);

    return (

        <ProjectContext.Provider value={value}>

            {children}

        </ProjectContext.Provider>

    );

}

export default ProjectProvider;