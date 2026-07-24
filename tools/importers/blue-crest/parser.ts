import { ExcelRow } from "./reader";
import { ImportedUnit } from "./types";

const number = (v: string) =>
    Number(v.replace(/[^0-9.]/g, "")) || 0;

const level = (v: string) =>
    Number(v.replace(/[^0-9]/g, "")) || 0;

const bedrooms = (v: string) => {

    const m = v.match(/\d+/);

    return m ? Number(m[0]) : 0;

};

export function parseUnits(rows: ExcelRow[]): ImportedUnit[] {

    const units: ImportedUnit[] = [];

    let building = "";

    let unitType = "";

    for (const row of rows) {

        const first = row[0] ?? "";

        if (first.toUpperCase().startsWith("BUILDING")) {

            building = first
                .replace(/BUILDING/i, "")
                .replace("-", "")
                .trim();

            continue;

        }

        if (first.toLowerCase().startsWith("type:")) {

            unitType = first
                .replace(/type:/i, "")
                .trim();

            continue;

        }

        if (first.toLowerCase().includes("apt"))
            continue;

        if (!/^[A-Z]-\d+/.test(first))
            continue;

        units.push({

            unitNumber: first,

            building,

            level: level(row[1] ?? ""),

            unitType,

            bedrooms: bedrooms(row[2] ?? ""),

            area: number(row[3] ?? ""),

            view: row[4] ?? "",

            currency: "EGP",

            price: number(row[5] ?? ""),

            downPayment: number(row[6] ?? ""),

            quarterly: number(row[7] ?? ""),

            maintenance: number(row[8] ?? ""),

            facilities: number(row[9] ?? ""),

        });

    }

    return units;

}