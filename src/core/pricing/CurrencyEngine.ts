import {
    priceCleaner
}
from "./PriceCleaner";

import {
    priceValidator
}
from "./PriceValidator";

export interface ResolvePriceInput {

    unitNumber: string;

    rawPrice: unknown;

    fallbackPrice?: number;

}

export class PriceEngine {

    resolve(
        input: ResolvePriceInput
    ): number {

        const price =

            priceCleaner.clean(
                input.rawPrice
            );

        if (

            priceValidator.isValid(
                price
            )

        ) {

            return price;

        }

        if (

            input.fallbackPrice
            &&

            priceValidator.isValid(
                input.fallbackPrice
            )

        ) {

            console.warn(

                `[PRICE FALLBACK] ${input.unitNumber}`

            );

            return input.fallbackPrice;

        }

        console.error(

            `[MISSING PRICE] ${input.unitNumber}`

        );

        return 0;

    }

}

export const priceEngine =
    new PriceEngine();