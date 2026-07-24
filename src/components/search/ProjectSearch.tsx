// src/components/search/ProjectSearch.tsx

import { projectApplication }
from "@/application/project/ProjectApplication";

import ProjectSearchClient
from "./ProjectSearchClient";

export default function ProjectSearch() {

    const projects =
        projectApplication.getProjects();

    console.log("");

    console.log(
        "================================"
    );

    console.log(
        "PROJECTS:",
        projects.map(
            project =>
                project.metadata.name
        )
    );

    const units =
        projects.flatMap(
            project => project.units
        );

    console.log(
        "TOTAL UNITS:",
        units.length
    );

    console.log(
        "================================"
    );

    return (

        <ProjectSearchClient
            units={units}
        />

    );

}