export class PriceValidator {

    isValid(
        price: unknown
    ): boolean {

        if (
            price === null
            || price === undefined
        ) {

            return false;

        }

        const value =
            Number(price);

        if (
            Number.isNaN(value)
        ) {

            return false;

        }

        return value > 0;

    }

}

export const priceValidator =
    new PriceValidator();