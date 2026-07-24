import fs from "fs";
import path from "path";

import { ImportedUnit } from "./types";

export function generateUnits(
    units: ImportedUnit[]
) {

    const output = path.join(

        process.cwd(),

        "src",
        "data",
        "projects",
        "hurghadaHeights",
        "units.ts"

    );

    fs.mkdirSync(

        path.dirname(output),

        {
            recursive: true
        }

    );

    const items = units.map(

        unit => `

    createProperty(
        factoryProject,
        {

            unitNumber:
                "${unit.unitNumber}",

            building:
                "A",

            level:
                ${unit.level},

            unitType:
                "${unit.unitType}",

            bedrooms:
                ${unit.bedrooms},

            area:
                ${unit.area},

            view:
                "${unit.view}",

            price:
                ${unit.priceEGP},

            downPayment:
                0,

            quarterly:
                0,

            maintenance:
                0,

            facilities:
                0

        }
    )`

    );

    const content = `

import { createProperty }
from "@/core/propertyFactory";

import factoryProject
from "./factoryProject";

export const hurghadaHeightsUnits = [

${items.join(",\n")}

];
`;

    fs.writeFileSync(

        output,

        content,

        "utf8"

    );

    console.log("");

    console.log(
        "================================"
    );

    console.log(
        "SPEDO HURGHADA HEIGHTS GENERATOR"
    );

    console.log(
        "================================"
    );

    console.log(
        "Generated:",
        output
    );

    console.log(
        "Units:",
        units.length
    );

    console.log(
        "================================"
    );

}