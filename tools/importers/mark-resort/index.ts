import path from "path";
import fs from "fs";

import { importMarkResort }
from "./importer";

import { importPoolLevel }
from "./poolImporter";

console.log("");

console.log(
    "================================"
);

console.log(
    "SPEDO MARK RESORT IMPORT"
);

console.log(
    "================================"
);

const mainFilePath = path.resolve(

    process.cwd(),

    "developer-files",
    "mark-resort",
    "mark resort.xlsx"

);

const poolFilePath = path.resolve(

    process.cwd(),

    "developer-files",
    "mark-resort",
    "pool level mark.xlsx"

);

console.log("");

console.log(
    "IMPORTING MAIN FILE..."
);

const mainUnits =

    importMarkResort(
        mainFilePath
    );

console.log("");

console.log(
    "IMPORTING POOL LEVEL FILE..."
);

const poolUnits =

    importPoolLevel(
        poolFilePath
    );

const units = [

    ...mainUnits,

    ...poolUnits

];

const outputPath = path.resolve(

    process.cwd(),

    "src",
    "data",
    "projects",
    "markResort",
    "units.ts"

);

const content = `

import type { PropertyUnit }
from "@/types/property";

export const markResortUnits: PropertyUnit[] =

${JSON.stringify(
    units,
    null,
    4
)};

`;

fs.writeFileSync(

    outputPath,

    content,

    "utf8"

);

console.log("");

console.log(
    "================================"
);

console.log(
    "SPEDO MARK RESORT GENERATOR"
);

console.log(
    "================================"
);

console.log(
    "Main Units:",
    mainUnits.length
);

console.log(
    "Pool Units:",
    poolUnits.length
);

console.log(
    "Total Units:",
    units.length
);

console.log(
    "Generated:",
    outputPath
);

console.log(
    "================================"
);

console.log("");

console.log(
    "================================"
);

console.log(
    "MARK RESORT FINAL BUILD FINISHED"
);

console.log(
    "================================"
);