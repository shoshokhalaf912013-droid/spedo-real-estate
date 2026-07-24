import type { Project } from "@/core/project";

import metadata from "./metadata";
import { markResortUnits } from "./units";

import { gallery } from "./gallery";
import { location } from "./location";
import { prices } from "./prices";

export const markResortProject: Project = {

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

        developerCode: "ACI",

        projectCode: metadata.code

    },

    manifest: {

        ready: true,

        searchable: true,

        published: true,

        importer: "mark-resort",

        schema: "1.0"

    },

    units: markResortUnits,

    assets: {

        gallery,

        location,

        prices

    }

};

export default markResortProject;