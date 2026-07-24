import type {
    RentSearchFilters,
    RentPropertyType,
    RentDuration,
    RentFurnished,
    RentView
} from "../types/RentSearch";

export function createDefaultFilters(): RentSearchFilters {

    return {

        location: "Hurghada",

        propertyType: "Any",

        bedrooms: "Any",

        budget: "Any",

        duration: "Any",

        furnished: "Any",

        view: "Any"

    };

}

export function isAnyValue(
    value: string
): boolean {

    return value === "Any";

}

export function normalizeLocation(
    location: string
): string {

    return location
        .trim()
        .toLowerCase();

}

export function propertyTypeLabel(
    type: RentPropertyType
): string {

    switch (type) {

        case "Apartment":

            return "Apartment";

        case "Villa":

            return "Villa";

        case "Chalet":

            return "Chalet";

        case "Penthouse":

            return "Penthouse";

        default:

            return "Any Property Type";

    }

}

export function durationLabel(
    duration: RentDuration
): string {

    switch (duration) {

        case "Short Term":

            return "Short Term Rental";

        case "Long Term":

            return "Long Term Rental";

        default:

            return "Any Duration";

    }

}

export function furnishedLabel(
    furnished: RentFurnished
): string {

    switch (furnished) {

        case "Furnished":

            return "Fully Furnished";

        case "Unfurnished":

            return "Unfurnished";

        default:

            return "Any";

    }

}

export function viewLabel(
    view: RentView
): string {

    switch (view) {

        case "Sea View":

            return "Sea View";

        case "Pool View":

            return "Pool View";

        case "Garden View":

            return "Garden View";

        default:

            return "Any View";

    }

}