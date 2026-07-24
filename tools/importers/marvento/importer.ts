import * as XLSX from "xlsx";

import { ImportedUnit } from "./types";

import { ImporterEngine }
from "@/core/importer/ImporterEngine";

function cleanText(
    value: unknown
): string {

    return String(value ?? "")
        .replace(/\s+/g, " ")
        .trim();

}

function normalizeUnitType(
    type: string
): string {

    const value =
        cleanText(type)
            .toLowerCase();

    if (
        value.includes(
            "one bedroom"
        )
    ) {

        return "One Bedroom";

    }

    if (
        value.includes(
            "two bedroom"
        )
    ) {

        return "Two Bedrooms";

    }

    if (
        value.includes(
            "studio"
        )
    ) {

        return "Studio";

    }

    if (
        value.includes(
            "chalet"
        )
    ) {

        return "Chalet";

    }

    return cleanText(type);

}

function isUnit(
    code: string
): boolean {

    return /^[A-Z]\d+[A-Z]?$/

        .test(

            cleanText(code)
                .toUpperCase()

        );

}

export function importMarvento(
    filePath: string
): ImportedUnit[] {

    const workbook =
        XLSX.readFile(filePath);

    const sheetName =
        "Availability";

    console.log(
        "Using Sheet:",
        sheetName
    );

    const worksheet =
        workbook.Sheets[
            sheetName
        ];

    if (!worksheet) {

        throw new Error(
            "Availability sheet not found."
        );

    }

    const rows =
        XLSX.utils.sheet_to_json<any[]>(

            worksheet,

            {

                header: 1,

                raw: false,

                blankrows: false

            }

        );

    const units:
        ImportedUnit[] = [];

    let currentBuilding = "";

    console.log("");

    console.log(
        "Reading Availability..."
    );

    console.log("");
       for (

        const rawRow

        of

        rows

    ) {

        const row =

            (rawRow ?? [])

                .map(
                    cleanText
                );

        if (

            row.every(
                cell =>
                    cell === ""
            )

        ) {

            continue;

        }

        const first =

            row[0]
                ?.toUpperCase();

        if (

            first?.startsWith(
                "BUILDING"
            )

        ) {

            currentBuilding =

                first

                    .replace(
                        "BUILDING",
                        ""
                    )

                    .trim();

            console.log(
                "Building:",
                currentBuilding
            );

            continue;

        }

        if (

            first ===
            "APT. NO."

        ) {

            continue;

        }

        if (

            !isUnit(
                row[0]
            )

        ) {

            continue;

        }

        if (

            !row[2]

            ||

            !row[4]

            ||

            !row[5]

        ) {

            continue;

        }

        const unitType =

            normalizeUnitType(
                row[2]
            );

        const price =

            ImporterEngine.number(
                row[5]
            );

        const downPayment =

            price * 0.10;

        const quarterly =

            (price - downPayment)
            / 16;

        const unit: ImportedUnit = {

            unitNumber:

                row[0]
                    .toUpperCase(),

            building:
                currentBuilding,

            level:

                ImporterEngine.floor(
                    row[1]
                ),

            unitType,

            bedrooms:

                ImporterEngine.bedrooms(
                    unitType
                ),

            area:

                ImporterEngine.number(
                    row[4]
                ),

            view:

                ImporterEngine.view(
                    row[3]
                ),

            currency:
                "EGP",

            price,

            downPayment,

            quarterly,

            maintenance: 0,

            facilities: 0

        };

        units.push(
            unit
        );

    }
       console.log("");

    console.log(
        "================================"
    );

    console.log(
        "IMPORT SUMMARY"
    );

    console.log(
        "================================"
    );

    console.log(
        "Available Units:",
        units.length
    );

    console.log("");

    console.table(

        units

            .slice(0, 10)

            .map(
                unit => ({

                    Unit:
                        unit.unitNumber,

                    Building:
                        unit.building,

                    Type:
                        unit.unitType,

                    Area:
                        unit.area,

                    View:
                        unit.view,

                    Price:
                        unit.price

                })
            )

    );

    console.log("");

    console.log(
        "Import Finished Successfully."
    );

    return units;

}