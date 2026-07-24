export class ViewParser {

    static parse(
        value: unknown
    ): string {

        const view =

            String(value ?? "")

                .replace(/\s+/g, " ")

                .trim();

        if (!view) {

            return "Unknown View";

        }

        if (

            /^\d+$/.test(
                view
            )

        ) {

            return "Unknown View";

        }

        const normalized =

            view.toLowerCase();

        if (

            normalized.includes(
                "sea"
            )

            &&

            normalized.includes(
                "pool"
            )

        ) {

            return "Sea & Pool View";

        }

        if (

            normalized.includes(
                "direct sea"
            )

        ) {

            return "Direct Sea View";

        }

        if (

            normalized.includes(
                "side sea"
            )

        ) {

            return "Side Sea View";

        }

        if (

            normalized.includes(
                "sea"
            )

        ) {

            return "Sea View";

        }

        if (

            normalized.includes(
                "pool"
            )

        ) {

            return "Pool View";

        }

        if (

            normalized.includes(
                "garden"
            )

        ) {

            return "Garden View";

        }

        if (

            normalized.includes(
                "mountain"
            )

        ) {

            return "Mountain View";

        }

        if (

            normalized.includes(
                "lagoon"
            )

        ) {

            return "Lagoon View";

        }

        if (

            normalized.includes(
                "city"
            )

        ) {

            return "City View";

        }

        return view;

    }

}