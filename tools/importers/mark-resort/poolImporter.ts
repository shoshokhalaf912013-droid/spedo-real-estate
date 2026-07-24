import { readWorkbook }
from "./reader";

import { parsePoolUnits }
from "./poolParser";

import { transformUnits }
from "./transformer";

export function importPoolLevel(

    filePath: string

) {

    const rows =

        readWorkbook(
            filePath
        );

    const parsed =

        parsePoolUnits(
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
        "POOL LEVEL IMPORT SUMMARY"
    );

    console.log(
        "================================"
    );

    console.log(
        "Pool Units:",
        units.length
    );

    console.log(
        "================================"
    );

    return units;

}