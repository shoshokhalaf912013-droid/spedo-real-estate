import { PropertyUnit } from "@/types/property";

export class StatisticsEngine {

    constructor(

        private readonly units: PropertyUnit[]

    ) {}

    totalUnits(): number {

        return this.units.length;

    }

    availableUnits(): number {

        return this.units.filter(

            unit => unit.status === "available"

        ).length;

    }

    soldUnits(): number {

        return this.units.filter(

            unit => unit.status === "sold"

        ).length;

    }

    reservedUnits(): number {

        return this.units.filter(

            unit => unit.status === "reserved"

        ).length;

    }

    minimumPrice(): number {

        return Math.min(

            ...this.units.map(

                unit => unit.price

            )

        );

    }

    maximumPrice(): number {

        return Math.max(

            ...this.units.map(

                unit => unit.price

            )

        );

    }

    averagePrice(): number {

        return (

            this.units.reduce(

                (sum, unit) =>

                    sum + unit.price,

                0

            ) /

            this.units.length

        );

    }

    averageArea(): number {

        return (

            this.units.reduce(

                (sum, unit) =>

                    sum + unit.area,

                0

            ) /

            this.units.length

        );

    }

}