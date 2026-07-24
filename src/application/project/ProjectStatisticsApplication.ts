import { projectApplication } from "./ProjectApplication";

export interface ProjectStatisticsModel {

    totalProjects: number;

    totalUnits: number;

    availableUnits: number;

    soldUnits: number;

    reservedUnits: number;

    averagePrice: number;

}

export class ProjectStatisticsApplication {

    getStatistics(): ProjectStatisticsModel {

        const projects =
            projectApplication.getProjects();

        const units =
            projects.flatMap(
                project => project.units
            );

        const available =
            units.filter(
                unit =>
                    unit.availability.available
            );

        const sold =
            units.filter(
                unit =>
                    !unit.availability.available
            );

        const reserved:
            typeof units = [];

        const prices =
            units.map(
                unit => unit.price
            );

        const averagePrice =
            prices.length === 0

                ? 0

                : Math.round(

                    prices.reduce(

                        (total, price) =>
                            total + price,

                        0

                    ) / prices.length

                );

        return {

            totalProjects:
                projects.length,

            totalUnits:
                units.length,

            availableUnits:
                available.length,

            soldUnits:
                sold.length,

            reservedUnits:
                reserved.length,

            averagePrice

        };

    }

}

export const projectStatisticsApplication =
    new ProjectStatisticsApplication();

export default projectStatisticsApplication;