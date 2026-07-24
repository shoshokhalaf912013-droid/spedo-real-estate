import { readWorkbook }
from "./reader";

import { parseUnits }
from "./parser";

import { transformUnits }
from "./transformer";

export function importMarkResort(

    filePath: string

) {

    const rows =

        readWorkbook(
            filePath
        );

    const parsed =

        parseUnits(
            rows
        );

    const units =

        transformUnits(
            parsed
        );

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
        "Total Units:",
        units.length
    );

    console.log(
        "================================"
    );

    return units;

}