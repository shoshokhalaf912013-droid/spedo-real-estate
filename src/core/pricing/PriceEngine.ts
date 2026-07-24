import type { PropertyUnit }
from "@/types/property/Property";

export class PriceEngine {

    constructor(
        private readonly units: PropertyUnit[]
    ) {}

    getMinPrice(): number {

        if (!this.units.length) {

            return 0;

        }

        return Math.min(

            ...this.units.map(
                unit => unit.price
            )

        );

    }

    getMaxPrice(): number {

        if (!this.units.length) {

            return 0;

        }

        return Math.max(

            ...this.units.map(
                unit => unit.price
            )

        );

    }

    getAveragePrice(): number {

        if (!this.units.length) {

            return 0;

        }

        const total = this.units.reduce(

            (sum, unit) =>

                sum + unit.price,

            0

        );

        return total / this.units.length;

    }

    getAveragePricePerMeter(): number {

        if (!this.units.length) {

            return 0;

        }

        const total = this.units.reduce(

            (sum, unit) =>

                sum + unit.pricePerSqm,

            0

        );

        return total / this.units.length;

    }

    getPricePerMeter(
        unit: PropertyUnit
    ): number {

        return unit.pricePerSqm;

    }

    sortLowToHigh(): PropertyUnit[] {

        return [...this.units].sort(

            (a, b) =>

                a.price - b.price

        );

    }

    sortHighToLow(): PropertyUnit[] {

        return [...this.units].sort(

            (a, b) =>

                b.price - a.price

        );

    }

    filterByCurrency(
        currency: string
    ): PropertyUnit[] {

        return this.units.filter(

            unit =>

                unit.currency === currency

        );

    }

    between(
        min: number,
        max: number
    ): PropertyUnit[] {

        return this.units.filter(

            unit =>

                unit.price >= min &&

                unit.price <= max

        );

    }

    calculateROI(
        purchasePrice: number,
        annualRent: number
    ): number {

        if (purchasePrice <= 0) {

            return 0;

        }

        return Number(

            (

                (annualRent / purchasePrice)

                * 100

            ).toFixed(2)

        );

    }

    estimateCapitalGrowth(
        currentPrice: number,
        expectedPrice: number
    ): number {

        if (currentPrice <= 0) {

            return 0;

        }

        return Number(

            (

                (

                    (expectedPrice - currentPrice)

                    / currentPrice

                )

                * 100

            ).toFixed(2)

        );

    }

    estimateInvestmentScore(
        roi: number,
        growth: number
    ): number {

        return Number(

            (

                (roi * 0.6)

                +

                (growth * 0.4)

            ).toFixed(2)

        );

    }

}