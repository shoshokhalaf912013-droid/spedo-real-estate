// src/core/pricing/PriceResolver.ts

import { priceValidator } from "./PriceValidator";

export interface ResolvePriceInput {

    unitNumber: string;

    excelPrice?: number;

    fallbackPrice?: number;

}

export class PriceResolver {

    resolve(
        input: ResolvePriceInput
    ): number {

        if (
            priceValidator.isValid(
                input.excelPrice
            )
        ) {

            return input.excelPrice!;

        }

        if (
            priceValidator.isValid(
                input.fallbackPrice
            )
        ) {

            console.warn(

                `[PRICE FALLBACK] ${input.unitNumber}`

            );

            return input.fallbackPrice!;

        }

        console.error(

            `[MISSING PRICE] ${input.unitNumber}`

        );

        return 0;

    }

}

export const priceResolver =
    new PriceResolver();