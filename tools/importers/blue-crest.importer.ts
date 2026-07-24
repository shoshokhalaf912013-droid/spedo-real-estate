import * as XLSX from "xlsx";

import { ImportedUnit } from "./types";

function cleanText(value: unknown): string {

    return String(value ?? "")
        .replace(/\s+/g, " ")
        .trim()

        // Normalize Cyrillic letters to Latin
        .replace(/А/g, "A")
        .replace(/В/g, "B")
        .replace(/С/g, "C")
        .replace(/Е/g, "E")
        .replace(/Н/g, "H")
        .replace(/К/g, "K")
        .replace(/М/g, "M")
        .replace(/О/g, "O")
        .replace(/Р/g, "P")
        .replace(/Т/g, "T")
        .replace(/Х/g, "X");

}

function cleanNumber(value: unknown): number {

    const text = cleanText(value);

    if (!text)
        return 0;

    const number = Number(
        text.replace(/[^0-9.]/g, "")
    );

    return isNaN(number)
        ? 0
        : number;

}

function parseLevel(level: string): number {

    const value = Number(
        level.replace(/[^0-9]/g, "")
    );

    return isNaN(value)
        ? 0
        : value;

}

function parseBedrooms(type: string): number {

    if (type.includes("1"))
        return 1;

    if (type.includes("2"))
        return 2;

    if (type.includes("3"))
        return 3;

    if (type.includes("4"))
        return 4;

    return 0;

}

function isHeader(row: string[]): boolean {

    return row.some(cell =>
        cell.includes("Apt.")
    );

}

function isBuilding(row: string[]): boolean {

    return row.some(cell =>
        cell.toUpperCase().startsWith("BUILDING")
    );

}

function isType(row: string[]): boolean {

    return row.some(cell =>
        cell.startsWith("Type:")
    );

}

function isUnit(row: string[]): boolean {

    if (!row.length)
        return false;

    return /^[A-Z]-\d+/.test(row[0]);

}
export function importBlueCrest(
    filePath: string
): ImportedUnit[] {

    const workbook =
        XLSX.readFile(filePath);

    const sheetName =
        workbook.SheetNames[0];

    console.log("Using Sheet:", sheetName);

    const worksheet =
        workbook.Sheets[sheetName];

    if (!worksheet) {

        throw new Error(
            "Worksheet not found."
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

    const units: ImportedUnit[] = [];

    let currentBuilding = "";

    let currentType = "";

    console.log("");
    console.log("Reading Excel...");
    console.log("");

    for (const rawRow of rows) {

        const row =
            (rawRow ?? []).map(cleanText);

        if (
            row.every(cell => cell === "")
        ) {
            continue;
        }

        if (isBuilding(row)) {

            currentBuilding =
                row[0]
                    .replace("BUILDING", "")
                    .replace("-", "")
                    .trim();

            console.log(
                "Building:",
                currentBuilding
            );

            continue;

        }

        if (isType(row)) {

            currentType =
                row[0]
                    .replace("Type:", "")
                    .trim();

            console.log(
                "Type:",
                currentType
            );

            continue;

        }

        if (isHeader(row))
            continue;

        if (!isUnit(row))
            continue;
    
              const unit: ImportedUnit = {

            unitNumber: row[0],

            building: currentBuilding,

            level: parseLevel(row[1]),

            unitType: currentType,

            bedrooms: parseBedrooms(row[2]),

            area: cleanNumber(row[3]),

            view: row[4],

            currency: "EGP",

            price: cleanNumber(row[5]),

            downPayment: cleanNumber(row[6]),

            quarterly: cleanNumber(row[7]),

            maintenance: cleanNumber(row[8]),

            facilities: cleanNumber(row[9])

        };

        units.push(unit);

    }

    console.log("");

    console.log("====================================");
    console.log("IMPORT SUMMARY");
    console.log("====================================");

    console.log("Total Units :", units.length);

    if (units.length > 0) {

        console.log("");

        console.log("First 5 Units");

        console.log("");

        console.table(

            units.slice(0, 5).map(unit => ({

                Unit: unit.unitNumber,

                Building: unit.building,

                Level: unit.level,

                Type: unit.unitType,

                Bedrooms: unit.bedrooms,

                Area: unit.area,

                View: unit.view,

                Price: unit.price,

                DownPayment: unit.downPayment,

                Quarterly: unit.quarterly

            }))

        );

    } else {

        console.log("No units found.");

    }

    console.log("");

    console.log("Import Finished Successfully.");
       return units;

}