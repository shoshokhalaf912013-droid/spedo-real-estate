export class StatusDisplay {

    static format(
        status?: string
    ): string {

        if (

            !status

        ) {

            return "Available";

        }

        return status;

    }

    static color(
        status?: string
    ): string {

        const value =

            String(status)
                .toLowerCase();

        if (

            value === "sold"

        ) {

            return "text-red-500";

        }

        if (

            value === "reserved"

        ) {

            return "text-yellow-500";

        }

        return "text-green-500";

    }

}