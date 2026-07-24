let units: unknown[] = [];

export async function importProject(): Promise<void> {
    console.log("================================");
    console.log("SPEDO MARK RESORT IMPORT");
    console.log("================================");
}

export async function importUnits(): Promise<void> {
    console.log("Importing Units...");

    units = [];

    console.log(`${units.length} Units Imported`);
}

export async function importPrices(): Promise<void> {
    console.log("Importing Prices...");
}

export async function importPaymentPlans(): Promise<void> {
    console.log("Importing Payment Plans...");
}

export async function importAvailability(): Promise<void> {
    console.log("Importing Availability...");
}

export async function generateStatistics(): Promise<void> {
    console.log("Generating Statistics...");
}

export async function buildProject(): Promise<void> {
    await importProject();
    await importUnits();
    await importPrices();
    await importPaymentPlans();
    await importAvailability();
    await generateStatistics();

    console.log("================================");
    console.log("MARK RESORT BUILD FINISHED");
    console.log("================================");
}