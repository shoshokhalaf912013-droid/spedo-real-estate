import type { PropertyUnit }
from "@/types/property/Property";

export class DataValidationEngine {

    static validate(
        units: PropertyUnit[]
    ): PropertyUnit[] {

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "SPEDO DATA VALIDATION ENGINE"
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
                            "Missing Unit Number"
                        );

                        return false;

                    }

                    return true;

                }

            );

        console.log(
            "After Unit Check:",
            validUnits.length
        );

        return this.removeInvalidData(
            validUnits
        );

    }

    static removeInvalidData(
        units: PropertyUnit[]
    ): PropertyUnit[] {

        const usedUnits =
            new Set<string>();

        const cleanedUnits =
            units.filter(

                unit => {

                    const uniqueKey = [

                        unit.project,

                        unit.building,

                        unit.unitNo

                    ].join("-");

                    if (
                        usedUnits.has(
                            uniqueKey
                        )
                    ) {

                        console.log(
                            `Duplicate Removed: ${uniqueKey}`
                        );

                        return false;

                    }

                    usedUnits.add(
                        uniqueKey
                    );

                    if (
                        unit.price <= 0
                    ) {

                        console.log(
                            `Removed (Price = 0): ${unit.unitNo}`
                        );

                        return false;

                    }

                    if (
                        unit.price >
                        50000000
                    ) {

                        console.log(
                            `Removed (Price Too High): ${unit.unitNo}`
                        );

                        return false;

                    }

                    if (
                        unit.area <= 0
                    ) {

                        console.log(
                            `Removed (Area = 0): ${unit.unitNo}`
                        );

                        return false;

                    }

                    if (
                        !unit.type
                    ) {

                        console.log(
                            `Removed (Missing Type): ${unit.unitNo}`
                        );

                        return false;

                    }

                    if (
                        !unit.view
                    ) {

                        console.log(
                            `Removed (Missing View): ${unit.unitNo}`
                        );

                        return false;

                    }

                    const view =
                        String(
                            unit.view
                        ).trim();

                    if (
                        /^\d+$/.test(
                            view
                        )
                    ) {

                        console.log(
                            `Removed (Numeric View): ${unit.unitNo} -> ${view}`
                        );

                        return false;

                    }

                    return true;

                }

            );

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "VALIDATION FINISHED"
        );

        console.log(
            "Final Units:",
            cleanedUnits.length
        );

        console.log(
            "================================"
        );

        return cleanedUnits;

    }

}