export type RentLocation =

    | "Any"
    | "Hurghada"
    | "El Gouna"
    | "Sahl Hasheesh"
    | "Makadi Bay"
    | "Soma Bay";

export type RentPropertyType =

    | "Any"
    | "Apartment"
    | "Villa"
    | "Chalet"
    | "Penthouse";

export type RentBedrooms =

    | "Any"
    | "Studio"
    | "1"
    | "2"
    | "3"
    | "4+";

export type RentBudget =

    | "Any"
    | "Under €500"
    | "€500 - €1000"
    | "€1000 - €2000"
    | "€2000+";

export type RentDuration =

    | "Any"
    | "Short Term"
    | "Long Term";

export type RentFurnished =

    | "Any"
    | "Furnished"
    | "Unfurnished";

export type RentView =

    | "Any"
    | "Sea View"
    | "Pool View"
    | "Garden View";

export interface RentSearchFilters {

    location: RentLocation;

    propertyType: RentPropertyType;

    bedrooms: RentBedrooms;

    budget: RentBudget;

    duration: RentDuration;

    furnished: RentFurnished;

    view: RentView;

}

export interface RentSearchResult {

    id: string;

    name: string;

    slug: string;

    image: string;

    location: string;

    propertyType: string;

    bedrooms: number;

    price: string;

    view: string;

    furnished: boolean;

}