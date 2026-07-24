import type {
    RentBedrooms,
    RentBudget,
    RentDuration,
    RentFurnished,
    RentLocation,
    RentPropertyType,
    RentView
} from "../types/RentSearch";

export const rentLocations: RentLocation[] = [

    "Any",

    "Hurghada",

    "El Gouna",

    "Sahl Hasheesh",

    "Makadi Bay",

    "Soma Bay"

];

export const rentPropertyTypes: RentPropertyType[] = [

    "Any",

    "Apartment",

    "Villa",

    "Chalet",

    "Penthouse"

];

export const rentBedrooms: RentBedrooms[] = [

    "Any",

    "Studio",

    "1",

    "2",

    "3",

    "4+"

];

export const rentBudgets: RentBudget[] = [

    "Any",

    "Under €500",

    "€500 - €1000",

    "€1000 - €2000",

    "€2000+"

];

export const rentDurations: RentDuration[] = [

    "Any",

    "Short Term",

    "Long Term"

];

export const rentFurnishedOptions: RentFurnished[] = [

    "Any",

    "Furnished",

    "Unfurnished"

];

export const rentViews: RentView[] = [

    "Any",

    "Sea View",

    "Pool View",

    "Garden View"

];