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
        "marvento",
        "units.ts"

    );

    fs.mkdirSync(

        path.dirname(output),

        {

            recursive: true

        }

    );

    const items = units.map(

        unit => {

            return `

    createProperty(factoryProject, {

        unitNumber: "${unit.unitNumber}",

        building: "${unit.building}",

        level: ${unit.level},

        unitType: "${unit.unitType}",

        bedrooms: ${unit.bedrooms},

        area: ${unit.area},

        view: "${unit.view}",

        price: ${unit.price},

        downPayment: ${Math.round(unit.downPayment)},

        quarterly: ${Math.round(unit.quarterly)},

        maintenance: ${unit.maintenance},

        facilities: ${unit.facilities}

    })`;

        }

    );

    const content = `
import { createProperty } from "@/core/propertyFactory";
import factoryProject from "./factoryProject";

export const marventoUnits = [

${items.join(",\n")}

];

export default marventoUnits;
`;

    fs.writeFileSync(

        output,

        content,

        "utf8"

    );

    console.log("");

    console.log("================================");

    console.log("SPEDO MARVENTO GENERATOR");

    console.log("================================");

    console.log("Generated:", output);

    console.log("Units:", units.length);

    console.log("================================");

}