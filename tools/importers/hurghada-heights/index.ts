import { importHurghadaHeights } from "./importer";
import { generateUnits } from "./generator";

export async function buildProject() {

    console.log("");
    console.log("================================");
    console.log("SPEDO HURGHADA HEIGHTS IMPORT");
    console.log("================================");

    const units = importHurghadaHeights(
        "./developer-files/hurghada-heights/Hurghada Heights.xlsx"
    );

    generateUnits(units);

    console.log("");
    console.log("================================");
    console.log("HURGHADA HEIGHTS BUILD FINISHED");
    console.log("================================");
}

buildProject().catch(console.error);