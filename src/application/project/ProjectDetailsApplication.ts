import { projectApplication } from "./ProjectApplication";

export interface ProjectStatistics {

    totalUnits: number;

    availableUnits: number;

    soldUnits: number;

    reservedUnits: number;

}

export interface ProjectDetails {

    id: string;

    slug: string;

    name: string;

    shortName: string;

    developer: string;

    city: string;

    country: string;

    category: string;

    propertyType: string;

    units: ReturnType<
        typeof projectApplication.getUnits
    >;

    statistics: ProjectStatistics;

}

export class ProjectDetailsApplication {

    getProjectDetails(
        slug: string
    ): ProjectDetails | undefined {

        const project =
            projectApplication.getProjectBySlug(
                slug
            );

        if (!project) {

            return undefined;

        }

        const units =
            project.units;

        const availableUnits =
            units.filter(
                unit =>
                    unit.availability.available
            ).length;

        const soldUnits =
            units.filter(
                unit =>
                    !unit.availability.available
            ).length;

        return {

            id:
                project.metadata.id,

            slug:
                project.metadata.slug,

            name:
                project.metadata.name,

            shortName:
                project.metadata.shortName,

            developer:
                project.metadata.developer,

            city:
                project.metadata.city,

            country:
                project.metadata.country,

            category:
                project.metadata.category,

            propertyType:
                project.metadata.propertyType,

            units,

            statistics: {

                totalUnits:
                    units.length,

                availableUnits,

                soldUnits,

                reservedUnits:
                    0

            }

        };

    }

}

export const projectDetailsApplication =
    new ProjectDetailsApplication();

export default projectDetailsApplication;