export interface PropertyTypeDefinition {

    id: string;

    label: string;

    sector:
        | "residential"
        | "commercial"
        | "investment";

    allowBedrooms: boolean;

    allowBathrooms: boolean;

    allowFloorPlans: boolean;

    allowVideos: boolean;

    allowVirtualTour: boolean;

    allowDailyRent: boolean;

}

export const PROPERTY_TYPES:
PropertyTypeDefinition[] = [

    // RESIDENTIAL

    {
        id: "apartments",
        label: "Apartments",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "studios",
        label: "Studios",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "chalets",
        label: "Chalets",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "villas",
        label: "Villas",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "townhouses",
        label: "Townhouses",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "twin-houses",
        label: "Twin Houses",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "duplex",
        label: "Duplex",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "penthouses",
        label: "Penthouses",
        sector: "residential",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    // COMMERCIAL

    {
        id: "shops",
        label: "Shops",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "offices",
        label: "Offices",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "clinics",
        label: "Clinics",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "pharmacies",
        label: "Pharmacies",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "cafes",
        label: "Cafes",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "restaurants",
        label: "Restaurants",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "hotels",
        label: "Hotels",
        sector: "commercial",

        allowBedrooms: true,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: true,
    },

    {
        id: "warehouses",
        label: "Warehouses",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "factories",
        label: "Factories",
        sector: "commercial",

        allowBedrooms: false,
        allowBathrooms: true,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

    {
        id: "land",
        label: "Land",
        sector: "investment",

        allowBedrooms: false,
        allowBathrooms: false,

        allowFloorPlans: true,
        allowVideos: true,
        allowVirtualTour: true,

        allowDailyRent: false,
    },

];

// ========================================
// HELPERS
// ========================================

export function getResidentialTypes() {

    return PROPERTY_TYPES.filter(

        property =>

            property.sector ===
            "residential"

    );

}

export function getCommercialTypes() {

    return PROPERTY_TYPES.filter(

        property =>

            property.sector ===
            "commercial"

    );

}

export function getInvestmentTypes() {

    return PROPERTY_TYPES.filter(

        property =>

            property.sector ===
            "investment"

    );

}

export function getPropertyTypeById(
    id: string,
) {

    return PROPERTY_TYPES.find(

        property =>

            property.id === id

    );

}

export function formatPropertyType(
    id: string,
) {

    const property =
        getPropertyTypeById(id);

    return property?.label
        ?? id;

}