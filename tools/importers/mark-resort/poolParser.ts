import { ImportedUnit } from "../types";

function clean(
    value: unknown
): string {

    if (
        value === undefined ||
        value === null
    ) {

        return "";

    }

    return String(value)
        .trim();

}

function toNumber(
    value: unknown
): number {

    return Number(
        clean(value)
            .replace(/,/g, "")
    ) || 0;

}

function getBedrooms(
    type: string
): number {

    const value =
        type.toLowerCase();

    if (
        value.includes("studio")
    ) {

        return 0;

    }

    if (
        value.includes("one")
    ) {

        return 1;

    }

    if (
        value.includes("two")
    ) {

        return 2;

    }

    if (
        value.includes("three")
    ) {

        return 3;

    }

    return 0;

}

function isPoolUnit(
    row: unknown[]
): boolean {

    const aptNo =
        clean(row[0]);

    if (!aptNo) {

        return false;

    }

    if (
        aptNo.includes("Apt.NO")
    ) {

        return false;

    }

    if (
        aptNo.includes("GROUND")
    ) {

        return false;

    }

    if (
        aptNo.includes("%")
    ) {

        return false;

    }

    return aptNo.startsWith("G");

}

export function parsePoolUnits(
    rows: unknown[][]
): ImportedUnit[] {

    console.log("");

    console.log(
        "Reading Pool Level Units..."
    );

    const units =
        rows
            .filter(
                isPoolUnit
            )
            .map(
                row => {

                    const unitType =
                        clean(row[2]);

                    return {

                        unitNumber:
                            clean(row[0]),

                        level: 0,

                        unitType,

                        bedrooms:
                            getBedrooms(
                                unitType
                            ),

                        area:
                            toNumber(
                                row[4]
                            ),

                        view:
                            clean(
                                row[3]
                            ),

                        priceEGP:
                            toNumber(
                                row[5]
                            )

                    };

                }
            );

    console.log("");

    console.log(
        "Pool Units:",
        units.length
    );

    return units;

}