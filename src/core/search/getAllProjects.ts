import { projects } from "@/data/projects";

export function getAllProjects() {

    return projects.filter(
        (project) =>
            project.manifest.ready &&
            project.manifest.published &&
            project.manifest.searchable
    );

}