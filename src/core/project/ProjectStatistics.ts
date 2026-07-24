import type { Project } from "./Project";

export class ProjectStatistics {

    constructor(
        private readonly project: Project
    ) {}

    totalUnits(): number {

        return this.project.units.length;

    }

    availableUnits(): number {

        return this.project.units.filter(

            unit => unit.availability.available

        ).length;

    }

    soldUnits(): number {

        return this.project.units.filter(

            unit => unit.availability.sold

        ).length;

    }

    reservedUnits(): number {

        return this.project.units.filter(

            unit => unit.availability.reserved

        ).length;

    }

    minimumPrice(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return Math.min(

            ...this.project.units.map(

                unit => unit.price

            )

        );

    }

    maximumPrice(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return Math.max(

            ...this.project.units.map(

                unit => unit.price

            )

        );

    }

    averagePrice(): number {

        if (!this.project.units.length) {

            return 0;

        }

        const total =

            this.project.units.reduce(

                (sum, unit) =>

                    sum + unit.price,

                0

            );

        return total / this.project.units.length;

    }

    minimumArea(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return Math.min(

            ...this.project.units.map(

                unit => unit.area

            )

        );

    }

    maximumArea(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return Math.max(

            ...this.project.units.map(

                unit => unit.area

            )

        );

    }

    averageArea(): number {

        if (!this.project.units.length) {

            return 0;

        }

        const total =

            this.project.units.reduce(

                (sum, unit) =>

                    sum + unit.area,

                0

            );

        return total / this.project.units.length;

    }

    buildings(): string[] {

        return [

            ...new Set(

                this.project.units.map(

                    unit => unit.building

                )

            )

        ];

    }

    buildingCount(): number {

        return this.buildings().length;

    }

}