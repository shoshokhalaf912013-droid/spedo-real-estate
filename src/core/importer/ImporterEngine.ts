import { NumberParser } from "./NumberParser";
import { ViewParser } from "./ViewParser";
import { FloorParser } from "./FloorParser";
import { BedroomParser } from "./BedroomParser";

export class ImporterEngine {

    static number(
        value: unknown
    ): number {

        return NumberParser.parse(
            value
        );

    }

    static view(
        value: unknown
    ): string {

        return ViewParser.parse(
            value
        );

    }

    static floor(
        value: unknown
    ): number {

        return FloorParser.parse(
            value
        );

    }

    static bedrooms(
        value: unknown
    ): number {

        return BedroomParser.parse(
            value
        );

    }

}