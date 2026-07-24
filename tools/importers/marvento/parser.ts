import { ExcelRow } from "./reader";
import { ImportedUnit } from "./types";

export function parseUnits(
    rows: ExcelRow[]
): ImportedUnit[] {

    console.log(
        "Marvento Parser Started..."
    );

    console.log(
        "Rows:",
        rows.length
    );

    return [];

}