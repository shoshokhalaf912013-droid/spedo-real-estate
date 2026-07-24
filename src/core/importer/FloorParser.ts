export class FloorParser {

    static parse(
        value: unknown
    ): number {

        const floor =

            String(value ?? "")

                .trim()

                .toLowerCase();

        if (!floor) {

            return 0;

        }

        if (

            floor === "g"

            ||

            floor === "gf"

            ||

            floor.includes(
                "ground"
            )

        ) {

            return 0;

        }

        if (

            floor.includes(
                "first"
            )

        ) {

            return 1;

        }

        if (

            floor.includes(
                "second"
            )

            ||

            floor.includes(
                "2nd"
            )

        ) {

            return 2;

        }

        if (

            floor.includes(
                "third"
            )

            ||

            floor.includes(
                "3rd"
            )

        ) {

            return 3;

        }

        if (

            floor.includes(
                "fourth"
            )

            ||

            floor.includes(
                "4th"
            )

        ) {

            return 4;

        }

        if (

            floor.includes(
                "fifth"
            )

            ||

            floor.includes(
                "5th"
            )

        ) {

            return 5;

        }

        const number = Number(

            floor.replace(
                /[^0-9-]/g,
                ""
            )

        );

        if (

            Number.isNaN(
                number
            )

        ) {

            return 0;

        }

        return number;

    }

}