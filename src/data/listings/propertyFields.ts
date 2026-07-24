export interface PropertyField {

    id: string;

    label: string;

    type:
        | "text"
        | "number"
        | "select"
        | "boolean";

}

export const PROPERTY_FIELDS = {

    // =====================================
    // RESIDENTIAL
    // =====================================

    apartments: [

        {
            id: "bedrooms",
            label: "Bedrooms",
            type: "number",
        },

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

        {
            id: "floor",
            label: "Floor",
            type: "number",
        },

        {
            id: "balcony",
            label: "Balcony",
            type: "boolean",
        },

    ],

    studios: [

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

        {
            id: "floor",
            label: "Floor",
            type: "number",
        },

        {
            id: "balcony",
            label: "Balcony",
            type: "boolean",
        },

    ],

    chalets: [

        {
            id: "bedrooms",
            label: "Bedrooms",
            type: "number",
        },

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

        {
            id: "seaView",
            label: "Sea View",
            type: "boolean",
        },

        {
            id: "privateBeach",
            label: "Private Beach",
            type: "boolean",
        },

    ],

    villas: [

        {
            id: "bedrooms",
            label: "Bedrooms",
            type: "number",
        },

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

        {
            id: "garden",
            label: "Garden",
            type: "boolean",
        },

        {
            id: "swimmingPool",
            label: "Swimming Pool",
            type: "boolean",
        },

        {
            id: "garage",
            label: "Garage",
            type: "boolean",
        },

    ],

    townhouses: [

        {
            id: "bedrooms",
            label: "Bedrooms",
            type: "number",
        },

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

    ],

    "twin-houses": [

        {
            id: "bedrooms",
            label: "Bedrooms",
            type: "number",
        },

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

        {
            id: "garden",
            label: "Garden",
            type: "boolean",
        },

    ],

    duplex: [

        {
            id: "bedrooms",
            label: "Bedrooms",
            type: "number",
        },

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

    ],

    penthouses: [

        {
            id: "bedrooms",
            label: "Bedrooms",
            type: "number",
        },

        {
            id: "bathrooms",
            label: "Bathrooms",
            type: "number",
        },

        {
            id: "roofArea",
            label: "Roof Area",
            type: "number",
        },

    ],

    buildings: [

        {
            id: "floors",
            label: "Floors",
            type: "number",
        },

        {
            id: "units",
            label: "Units",
            type: "number",
        },

    ],

    "residential-land": [

        {
            id: "buildingRatio",
            label: "Building Ratio",
            type: "number",
        },

        {
            id: "infrastructure",
            label: "Infrastructure",
            type: "boolean",
        },

    ],

    // =====================================
    // COMMERCIAL
    // =====================================

    shops: [

        {
            id: "displayArea",
            label: "Display Area",
            type: "number",
        },

        {
            id: "storageArea",
            label: "Storage Area",
            type: "number",
        },

    ],

    offices: [

        {
            id: "meetingRooms",
            label: "Meeting Rooms",
            type: "number",
        },

        {
            id: "parking",
            label: "Parking",
            type: "boolean",
        },

    ],

    clinics: [

        {
            id: "rooms",
            label: "Medical Rooms",
            type: "number",
        },

        {
            id: "waitingArea",
            label: "Waiting Area",
            type: "boolean",
        },

    ],

    pharmacies: [

        {
            id: "storageArea",
            label: "Storage Area",
            type: "number",
        },

    ],

    cafes: [

        {
            id: "indoorSeats",
            label: "Indoor Seats",
            type: "number",
        },

        {
            id: "outdoorSeats",
            label: "Outdoor Seats",
            type: "number",
        },

    ],

    restaurants: [

        {
            id: "kitchenArea",
            label: "Kitchen Area",
            type: "number",
        },

        {
            id: "indoorSeats",
            label: "Indoor Seats",
            type: "number",
        },

        {
            id: "outdoorSeats",
            label: "Outdoor Seats",
            type: "number",
        },

        {
            id: "deliveryLicense",
            label: "Delivery License",
            type: "boolean",
        },

    ],

    hotels: [

        {
            id: "rooms",
            label: "Rooms",
            type: "number",
        },

        {
            id: "stars",
            label: "Stars",
            type: "number",
        },

        {
            id: "spa",
            label: "Spa",
            type: "boolean",
        },

        {
            id: "conferenceRooms",
            label: "Conference Rooms",
            type: "number",
        },

    ],

    warehouses: [

        {
            id: "loadingArea",
            label: "Loading Area",
            type: "number",
        },

    ],

    factories: [

        {
            id: "productionArea",
            label: "Production Area",
            type: "number",
        },

        {
            id: "powerCapacity",
            label: "Power Capacity",
            type: "number",
        },

    ],

} as const;