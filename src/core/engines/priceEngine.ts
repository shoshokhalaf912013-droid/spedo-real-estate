import { PropertyUnit } from "@/types/property";

export class PriceEngine {

    constructor(private units: PropertyUnit[]) {}

    getLowestPrice() {

        if (!this.units.length) return null;

        return this.units.reduce((a, b) =>
            a.price < b.price ? a : b
        );

    }

    getHighestPrice() {

        if (!this.units.length) return null;

        return this.units.reduce((a, b) =>
            a.price > b.price ? a : b
        );

    }

    getAveragePrice() {

        if (!this.units.length) return 0;

        return Math.round(

            this.units.reduce(

                (sum, u) => sum + u.price,

                0

            ) / this.units.length

        );

    }

    getAveragePricePerSqm() {

        if (!this.units.length) return 0;

        return Math.round(

            this.units.reduce(

                (sum, u) => sum + u.pricePerSqm,

                0

            ) / this.units.length

        );

    }

    getAvailableUnits() {

        return this.units.filter(

            u => u.status === "Available"

        );

    }

    getSoldUnits() {

        return this.units.filter(

            u => u.status === "Sold"

        );

    }

    getReservedUnits() {

        return this.units.filter(

            u => u.status === "Reserved"

        );

    }

}