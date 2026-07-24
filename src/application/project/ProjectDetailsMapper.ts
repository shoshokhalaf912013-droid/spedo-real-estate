import type { Project } from "@/core/project";
import type { ProjectDetailsModel } from "./ProjectDetailsModel";

export class ProjectDetailsMapper {

    static map(
        project: Project
    ): ProjectDetailsModel {

        const availableUnits =
            project.units.filter(
                unit => unit.availability.available
            ).length;

        return {

            id: project.metadata.id,

            slug: project.metadata.slug,

            name: project.metadata.name,

            shortName: project.metadata.shortName,

            developer: project.metadata.developer,

            country: project.metadata.country,

            city: project.metadata.city,

            district: project.metadata.district,

            category: project.metadata.category,

            propertyType: project.metadata.propertyType,

            status: project.metadata.status,

            currency: project.metadata.currency,

            version: project.metadata.version,

            heroImage:
                `/projects/${project.metadata.slug}/hero.jpg`,

            gallery:
                project.assets.gallery,

            location:
                project.assets.location,

            prices:
                project.assets.prices,

            statistics: {

                totalUnits:
                    project.units.length,

                availableUnits

            },

            units:
                project.units,

            project

        };

    }

}