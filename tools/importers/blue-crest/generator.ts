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
        "blue-crest",
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

        downPayment: ${unit.downPayment},

        quarterly: ${unit.quarterly},

        maintenance: ${unit.maintenance},

        facilities: ${unit.facilities}

    })`;

        }
    );

    const content = `
import { createProperty } from "@/core/propertyFactory";
import factoryProject from "./factoryProject";

export const blueCrestUnits = [

${items.join(",\n")}

];
`;

    fs.writeFileSync(
        output,
        content,
        "utf8"
    );

    console.log("");
    console.log("================================");
    console.log("SPEDO Generator");
    console.log("================================");
    console.log("Generated:", output);
    console.log("Units:", units.length);
    console.log("================================");

}