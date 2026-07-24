import * as XLSX from "xlsx";

export function importBlueCrest(
    filePath: string
): any[] {

    console.log(
        "Reading:",
        filePath
    );

    const workbook =
        XLSX.readFile(filePath);

    const sheetName =
        workbook.SheetNames[0];

    const sheet =
        workbook.Sheets[sheetName];

    const data =
        XLSX.utils.sheet_to_json(
            sheet
        );

    return data;

}