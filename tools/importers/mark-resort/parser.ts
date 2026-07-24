import { ExcelRow }
from "./reader";

import { ImportedUnit } from "../types";

function clean(
    value?: string
): string {

    return String(
        value ?? ""
    )
        .replace(/\s+/g, " ")
        .trim();

}

function number(
    value?: string
): number {

    return Number(

        clean(value)
            .replace(/,/g, "")
            .replace(/[^\d.]/g, "")

    ) || 0;

}

function bedrooms(
    type?: string
): number {

    const value =
        clean(type)
            .toLowerCase();

    if (
        value.includes(
            "studio"
        )
    ) {

        return 0;

    }

    if (
        value.includes(
            "one"
        )
    ) {

        return 1;

    }

    if (
        value.includes(
            "two"
        )
    ) {

        return 2;

    }

    if (
        value.includes(
            "three"
        )
    ) {

        return 3;

    }

    return 0;

}

function level(
    floor?: string
): number {

    const value =
        clean(floor)
            .toLowerCase();

    if (
        value.includes(
            "ground"
        )
    ) {

        return 0;

    }

    if (
        value.includes(
            "first"
        )
    ) {

        return 1;

    }

    if (
        value.includes(
            "second"
        )
    ) {

        return 2;

    }

    if (
        value.includes(
            "third"
        )
    ) {

        return 3;

    }

    if (
        value.includes(
            "fourth"
        )
    ) {

        return 4;

    }

    return 0;

}

function isHeader(
    row: string[]
): boolean {

    return (

        clean(
            row[0]
        )

        ===

        "Apt.NO"

    );

}

function isUnit(
    row: string[]
): boolean {

    const code =
        clean(row[0]);

    if (!code) {

        return false;

    }

    if (
        isHeader(row)
    ) {

        return false;

    }

    if (

        code.includes("Price List")

    ) {

        return false;

    }

    if (

        code === "Hold"

    ) {

        return false;

    }

    if (

        code.includes("Floor")

    ) {

        return false;

    }

    return /^\d+$/.test(
        code
    );

}
export function parseUnits(
    rows: ExcelRow[]
): ImportedUnit[] {

    const units:
        ImportedUnit[] = [];

    console.log("");

    console.log(
        "Reading Units..."
    );

    console.log("");

    for (
        const row
        of rows
    ) {

        if (
            !isUnit(row)
        ) {

            continue;

        }

        const unitNumber =
            clean(row[0]);

        const floor =
            clean(row[1]);

        const unitType =
            clean(row[2]);

        units.push({

            unitNumber,

            floor,

            level:
                level(
                    floor
                ),

            unitType,

            bedrooms:
                bedrooms(
                    unitType
                ),

            view:
                clean(
                    row[3]
                ),

            area:
                number(
                    row[4]
                ),

            status:
                "Available",

            priceEGP:
                number(
                    row[5]
                ),

            priceEUR:
                number(
                    row[7]
                )

        });

    }

    console.log(
        "Units:",
        units.length
    );

    return units;

}