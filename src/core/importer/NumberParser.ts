export class NumberParser {

    static parse(
        value: unknown
    ): number {

        if (
            value === null ||
            value === undefined
        ) {

            return 0;

        }

        const text =

            String(value)

                .replace(/,/g, "")

                .replace(/[^\d.]/g, "")

                .trim();

        if (!text) {

            return 0;

        }

        const number = Number(text);

        if (
            Number.isNaN(number)
        ) {

            return 0;

        }

        return Math.round(number);

    }

    static isValid(
        value: number
    ): boolean {

        return (

            value > 0 &&

            value < 50000000

        );

    }

}