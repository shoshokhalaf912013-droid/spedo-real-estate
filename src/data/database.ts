import { projects } from "./projects";

export const database = projects.flatMap(
    project => project.units
);