import * as XLSX from "xlsx";

export type ExcelRow = string[];

export function readWorkbook(filePath: string): ExcelRow[] {

    const workbook = XLSX.readFile(filePath);

    const sheetName = workbook.SheetNames[0];

    console.log(`Using Sheet: ${sheetName}`);

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error("Worksheet not found.");
    }

    const rows = XLSX.utils.sheet_to_json<any[]>(worksheet, {
        header: 1,
        raw: false,
        blankrows: false,
    });

    return rows.map(row =>
        (row ?? []).map(cell => String(cell ?? "").trim())
    );

}