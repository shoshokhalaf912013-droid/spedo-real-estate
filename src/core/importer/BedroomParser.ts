export class BedroomParser {

    static parse(
        value: unknown
    ): number {

        const text =

            String(value ?? "")

                .trim()

                .toLowerCase();

        if (!text) {

            return 0;

        }

        if (
            text.includes("studio")
        ) {

            return 0;

        }

        if (
            text.includes("one")
            ||
            text.includes("1")
        ) {

            return 1;

        }

        if (
            text.includes("two")
            ||
            text.includes("2")
        ) {

            return 2;

        }

        if (
            text.includes("three")
            ||
            text.includes("3")
        ) {

            return 3;

        }

        if (
            text.includes("four")
            ||
            text.includes("4")
        ) {

            return 4;

        }

        if (
            text.includes("five")
            ||
            text.includes("5")
        ) {

            return 5;

        }

        return 0;

    }

}