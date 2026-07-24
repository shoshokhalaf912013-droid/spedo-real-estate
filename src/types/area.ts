export interface AreaDimensions {

    width?: number;

    depth?: number;

    height?: number;

}

export interface AreaBreakdown {

    builtUp?: number;

    garden?: number;

    terrace?: number;

    roof?: number;

    balcony?: number;

    parking?: number;

    storage?: number;

}

export interface PropertyArea {

    total: number;

    internal?: number;

    external?: number;

    dimensions?: AreaDimensions;

    breakdown?: AreaBreakdown;

}

export class AreaCalculator {

    static total(area: PropertyArea): number {

        return area.total;

    }

    static outdoor(area: PropertyArea): number {

        return (

            (area.breakdown?.garden ?? 0)

            +

            (area.breakdown?.terrace ?? 0)

            +

            (area.breakdown?.roof ?? 0)

            +

            (area.breakdown?.balcony ?? 0)

        );

    }

    static indoor(area: PropertyArea): number {

        return (

            area.breakdown?.builtUp

            ??

            area.internal

            ??

            area.total

        );

    }

    static pricePerMeter(

        totalPrice: number,

        area: PropertyArea

    ): number {

        return totalPrice / area.total;

    }

}