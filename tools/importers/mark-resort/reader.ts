import * as XLSX
from "xlsx";

export type ExcelRow =
    string[];

export function readWorkbook(
    filePath: string
): ExcelRow[] {

    const workbook =
        XLSX.readFile(filePath);

    const sheetName =
        workbook.SheetNames[0];

    console.log(
        "Using Sheet:",
        sheetName
    );

    const sheet =
        workbook.Sheets[
            sheetName
        ];

    const rows =
        XLSX.utils.sheet_to_json(
            sheet,
            {

                header: 1,

                raw: false

            }

        ) as ExcelRow[];

    return rows;

}