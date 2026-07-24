export interface PropertyTypeDefinition {

    id: string;

    label: string;

    sector:
        | "residential"
        | "commercial";

    category:
        | "sale"
        | "rent"
        | "both";

    allowBedrooms: boolean;

    allowBathrooms: boolean;

    allowFloorPlans: boolean;

    allowVideos: boolean;

    allowVirtualTour: boolean;

    allowBrochure: boolean;

}