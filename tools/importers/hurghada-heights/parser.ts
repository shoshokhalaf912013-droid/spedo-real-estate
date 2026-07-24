import { ExcelRow } from "./reader";
import { ImportedUnit } from "./types";

import { priceResolver } from "@/core/pricing/PriceResolver";
import { ImporterEngine } from "@/core/importer/ImporterEngine";

function clean(
    value?: string
): string {

    return String(value ?? "")
        .replace(/\s+/g, " ")
        .trim();

}

function isHeader(
    row: string[]
): boolean {

    return clean(
        row[0]
    ) === "Apt. NO";

}

function isFloorTitle(
    value: string
): boolean {

    const text =
        clean(value)
            .toLowerCase();

    return (

        text.includes(
            "ground floor"
        )

        ||

        text.includes(
            "first floor"
        )

        ||

        text.includes(
            "second floor"
        )

        ||

        text.includes(
            "third floor"
        )

        ||

        text.includes(
            "fourth floor"
        )

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

        code.includes(
            "Hurghada Heights Resort"
        )

    ) {

        return false;

    }

    if (

        code
            .toLowerCase()
            .includes(
                "hold"
            )

    ) {

        return false;

    }

    if (

        code
            .toLowerCase()
            .includes(
                "building"
            )

    ) {

        return false;

    }

    if (

        isFloorTitle(code)

    ) {

        return false;

    }

    return true;

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

        of

        rows

    ) {

        if (

            !isUnit(row)

        ) {

            continue;

        }

        const unitNumber =
            clean(row[0]);

        const unitType =
            clean(row[2]);

        const rawPrice =

            ImporterEngine.number(
                row[6]
            );

        const fallbackPrice =

            ImporterEngine.number(
                row[7]
            );

          const price =

    priceResolver.resolve({

        unitNumber,

        excelPrice: rawPrice,

        fallbackPrice

    });
        units.push({

            unitNumber,

            floor:
                clean(row[1]),

            level:

                ImporterEngine.floor(
                    row[1]
                ),

            unitType,

            bedrooms:

                ImporterEngine.bedrooms(
                    unitType
                ),

            view:

                ImporterEngine.view(
                    row[3]
                ),

            area:

                ImporterEngine.number(
                    row[4]
                ),

            status:
                "Available",

            priceEGP:
                price,

            priceEUR:
                fallbackPrice

        });

    }

    console.log(
        "Units:",
        units.length
    );

    return units;

}