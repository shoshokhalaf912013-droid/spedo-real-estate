import type { Project } from "@/core/project";
import type { ProjectCardModel } from "./ProjectCardModel";

export class ProjectCardMapper {

    static map(
        project: Project
    ): ProjectCardModel {

        const prices =
            project.units.map(
                unit => unit.price
            );

        const startingPrice =
            prices.length === 0
                ? 0
                : Math.min(...prices);

        const currency =
            project.units.length > 0
                ? project.units[0].currency
                : project.metadata.currency;

        const availableUnits =
            project.units.filter(
                unit => unit.availability.available
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

            description:
                `${project.metadata.propertyType} in ${project.metadata.city}`,

		image:

  		  project.metadata.slug === "marvento"

     		   ? "/projects/marvento/hero.jpeg"

  		  : project.metadata.slug === "hurghada-heights"

   		     ? "/projects/hurghada-heights/cover.jpg"

   		 : project.metadata.slug === "mark-resort"

     		   ? "/projects/mark-resort/hero.png"

  		  : "/projects/blue-crest/gallery-4.jpg",

            badge:
                "Featured Development",

            tags: [

                project.metadata.city,

                project.metadata.country,

                project.metadata.category

            ],

            cta:
                "Explore Project →",

            totalUnits:
                project.units.length,

            availableUnits:
                availableUnits,

            startingPrice:
                startingPrice,

            currency:
                currency

        };

    }

}