import { importBlueCrest } from "./importBlueCrest";

let units: any[] = [];

export async function importProject() {
    console.log("================================");
    console.log("SPEDO BLUE CREST IMPORT");
    console.log("================================");
}

export async function importUnits() {
    console.log("Importing Units...");

    units = importBlueCrest(
        "./developer-files/blue-crest/Blue Crest ATS NEW.xlsx"
    );

    console.log(`${units.length} Units Imported`);
}

export async function importPrices() {
    console.log("Importing Prices...");
}

export async function importPaymentPlans() {
    console.log("Importing Payment Plans...");
}

export async function importAvailability() {
    console.log("Importing Availability...");
}

export async function generateStatistics() {
    console.log("Generating Statistics...");
}

export async function buildProject() {

    await importProject();

    await importUnits();

    await importPrices();

    await importPaymentPlans();

    await importAvailability();

    await generateStatistics();

    console.log("================================");
    console.log("BLUE CREST BUILD FINISHED");
    console.log("================================");
}