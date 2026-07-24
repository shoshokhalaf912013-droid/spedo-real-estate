import type { PropertyUnit }
from "@/types/property/Property";

export class DataQualityEngine {

    static validate(
        units: PropertyUnit[]
    ): PropertyUnit[] {

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "SPEDO DATA QUALITY ENGINE"
        );

        console.log(
            "================================"
        );

        const validUnits =
            units.filter(

                unit => {

                    if (

                        !unit.unitNo

                    ) {

                        console.log(

                            "Rejected (No Unit Number)"

                        );

                        return false;

                    }

                    if (

                        unit.area <= 0

                    ) {

                        console.log(

                            `Rejected (Invalid Area): ${unit.unitNo}`

                        );

                        return false;

                    }

                    return true;

                }

            );

        this.printReport(
            validUnits
        );

        return validUnits;

    }

    static printReport(
        units: PropertyUnit[]
    ): void {

        const total =
            units.length;

        const priceOnRequest =
            units.filter(

                unit =>

                    unit.price <= 0

            ).length;

        const withPrice =
            total - priceOnRequest;

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "DATA QUALITY REPORT"
        );

        console.log(
            "================================"
        );

        console.log(
            "Total Units:",
            total
        );

        console.log(
            "Units With Price:",
            withPrice
        );

        console.log(
            "Price On Request:",
            priceOnRequest
        );

        console.log(
            "================================"
        );

    }

}