export class PriceCleaner {

    clean(
        value: unknown
    ): number {

        if (
            value === null
            || value === undefined
        ) {

            return 0;

        }

        const text =

            String(value)

                .trim()

                .replace(/,/g, "");

        if (
            text.startsWith("=")
        ) {

            return 0;

        }

        const number =

            Number(text);

        if (
            Number.isNaN(number)
        ) {

            return 0;

        }

        return number;

    }

}

export const priceCleaner =
    new PriceCleaner();