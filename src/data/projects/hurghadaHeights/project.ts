import type { Project } from "@/core/project";

import metadata from "./metadata";
import { hurghadaHeightsUnits } from "./units";

export const hurghadaHeightsProject: Project = {

    metadata: {

        id: metadata.id,

        slug: metadata.id,

        name: metadata.name,

        shortName: metadata.name,

        developer: metadata.developer,

        country: metadata.country,

        city: metadata.city,

        district: metadata.area,

        currency: metadata.currency[0],

        status: metadata.status,

        propertyType: "Residential",

        category: metadata.category,

        version: "1.0.0"

    },

    identity: {

        platformCode: "SPEDO",

        developerCode: "HH",

        projectCode: metadata.code

    },

    manifest: {

        ready: true,

        searchable: true,

        published: true,

        importer: "hurghada-heights",

        schema: "1.0"

    },

    units: hurghadaHeightsUnits,

    assets: {}

};

export default hurghadaHeightsProject;