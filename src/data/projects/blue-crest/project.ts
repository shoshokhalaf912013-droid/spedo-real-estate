import type { Project } from "@/core/project";

import metadata from "./metadata";
import { blueCrestUnits } from "./units";

import { gallery } from "./gallery";
import { location } from "./location";
import { prices } from "./prices";

export const blueCrestProject: Project = {

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

        developerCode: "KYN",

        projectCode: metadata.code

    },

    manifest: {

        ready: true,

        searchable: true,

        published: true,

        importer: "blue-crest",

        schema: "1.0"

    },

    units: blueCrestUnits,

    assets: {

        gallery,

        location,

        prices

    }

};

export default blueCrestProject;