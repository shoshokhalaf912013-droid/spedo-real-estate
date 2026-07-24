export class AreaDisplay {

    static format(
        area: number
    ): string {

        if (

            !area

            ||

            area <= 0

        ) {

            return "Area Not Available";

        }

        return (

            area.toLocaleString()

            +

            " m²"

        );

    }

}