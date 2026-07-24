import { projectLoader } from "@/core/project";
import { propertyDatabase } from "@/core/database";

let bootstrapped = false;

export function bootstrap(): void {

    if (bootstrapped) return;

    bootstrapped = true;

    console.log("");
    console.log("================================");
    console.log("SPEDO Platform Bootstrap");
    console.log("================================");

    console.log("LOADING ALL PROJECTS...");

    projectLoader.loadAll();

    console.log("PROJECTS LOADED");

    console.log(
        `Database Ready (${propertyDatabase.count()} units)`
    );

    console.log("================================");
    console.log("SPEDO Ready");
    console.log("================================");
    console.log("");

}

bootstrap();