import { projects } from "@/data/projects";

export function getProjectBySlug(
    slug: string
) {

    return projects.find(
        (project) =>
            project.metadata.slug === slug
    );

}