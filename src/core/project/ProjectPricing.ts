import type { Project } from "./Project";

export class ProjectPricing {

    constructor(
        private readonly project: Project
    ) {}

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

    minimumDownPayment(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return Math.min(

            ...this.project.units.map(

                unit => unit.payment.downPayment

            )

        );

    }

    averageDownPayment(): number {

        if (!this.project.units.length) {

            return 0;

        }

        const total =

            this.project.units.reduce(

                (sum, unit) =>

                    sum + unit.payment.downPayment,

                0

            );

        return total / this.project.units.length;

    }

    minimumQuarterlyInstallment(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return Math.min(

            ...this.project.units.map(

                unit => unit.payment.quarterlyInstallment

            )

        );

    }

    averageQuarterlyInstallment(): number {

        if (!this.project.units.length) {

            return 0;

        }

        const total =

            this.project.units.reduce(

                (sum, unit) =>

                    sum + unit.payment.quarterlyInstallment,

                0

            );

        return total / this.project.units.length;

    }

    averagePricePerSqm(): number {

        if (!this.project.units.length) {

            return 0;

        }

        const total =

            this.project.units.reduce(

                (sum, unit) =>

                    sum + unit.pricePerSqm,

                0

            );

        return total / this.project.units.length;

    }

    currency(): string {

        return this.project.metadata.currency;

    }

}