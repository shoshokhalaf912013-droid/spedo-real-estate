import type { PropertyUnit }
from "@/types/property/Property";

export class PriceDisplay {

    static format(
        unit: PropertyUnit
    ): string {

        if (

            !unit.price

            ||

            unit.price <= 0

        ) {

            return "Price On Request";

        }

        return (

            unit.price.toLocaleString()

            +

            " "

            +

            unit.currency

        );

    }

    static hasPrice(
        unit: PropertyUnit
    ): boolean {

        return unit.price > 0;

    }

    static isPriceOnRequest(
        unit: PropertyUnit
    ): boolean {

        return !this.hasPrice(
            unit
        );

    }

}