import type { PropertyUnit }
from "@/types/property/Property";

import { DataValidationEngine }
from "./DataValidationEngine";

export class DataPipeline {

    static process(
        units: PropertyUnit[]
    ): PropertyUnit[] {

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "SPEDO DATA PIPELINE"
        );

        console.log(
            "================================"
        );

        console.log(
            "Input Units:",
            units.length
        );

        const validatedUnits =

            DataValidationEngine
                .validate(units);

        console.log(
            "Output Units:",
            validatedUnits.length
        );

        console.log(
            "================================"
        );

        return validatedUnits;

    }

}