import { readWorkbook } from "./reader";
import { parseUnits } from "./parser";
import { generateUnits } from "./generator";

async function main() {

    console.clear();

    console.log("================================");
    console.log("SPEDO Builder");
    console.log("Blue Crest");
    console.log("================================");

    const rows = readWorkbook(
        "./developer-files/blue-crest/Blue Crest ATS NEW.xlsx"
    );

    const units = parseUnits(rows);

    console.log(`Imported Units: ${units.length}`);

    generateUnits(units);

    console.log("");
    console.log("================================");
    console.log("BUILD FINISHED");
    console.log("================================");

}

main();