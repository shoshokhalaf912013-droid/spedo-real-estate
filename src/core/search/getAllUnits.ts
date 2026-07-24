import { getAllProjects } from "./getAllProjects";

export function getAllUnits() {

    return getAllProjects()
        .flatMap(
            (project) => project.units
        );

}