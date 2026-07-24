import { PropertyUnit } from "@/types/property";

import { createSlug } from "../slug";
import { createId } from "../id";
import { calculatePricePerSqm } from "../calculations";

export interface CreatePropertyInput {

    building: string;

    unitNumber: string;

    level: number;

    unitType: string;

    bedrooms: number;

    area: number;

    view: string;

    price: number;

    downPayment: number;

    quarterly: number;

    maintenance: number;

    facilities: number;

    currency?: string;

    finishing?: string;

    delivery?: string;

    featured?: boolean;

}

export function createProperty(
    project: {
        id: string;
        slug: string;
        name: string;
        shortName: string;
        developer: string;
        currency: string;
        identity: {
            projectCode: string;
        };
    },
    input: CreatePropertyInput
): PropertyUnit {


    const slug = createSlug(
    project.shortName,
    input.unitNumber
);

  const id = createId(
    project.identity.projectCode,
    input.unitNumber
);

    const today =
        new Date()
            .toISOString()
            .substring(0, 10);

    return {

        id,

        slug,

        project: project.shortName,

        developer: project.developer,

        compound: project.name,

        building: input.building,

        unitNo: input.unitNumber,

        floor: `${input.level}`,

        floorNumber: input.level,

        type: input.unitType,

        area: input.area,

        internalArea: input.area,

        terraceArea: 0,

        bedrooms: input.bedrooms,

        bathrooms: 1,

        reception: 1,

        kitchen: 1,

        balcony: true,

        terrace: false,

        roof: false,

        garden: false,

        view: input.view,

        finishing:
            input.finishing ??
            "Fully Finished",

        delivery:
            input.delivery ??
            "",

        status: "Available",

        availability: {

            available: true,

            reserved: false,

            sold: false

        },

        currency: project.currency,

        developerPrice: input.price,

        price: input.price,

        pricePerSqm:
            calculatePricePerSqm(
                input.price,
                input.area
            ),

        payment: {

            downPayment:
                input.downPayment,

            installmentYears: 5,

            installmentMonths: 60,

            quarterlyInstallment:
                input.quarterly,

            maintenancePercent: 8,

            maintenanceAmount:
                input.maintenance,

            facilitiesPercent: 2,

            facilitiesAmount:
                input.facilities

        },

        source: {

            developer:
               project.developer,

            file:
                "Blue Crest ATS NEW.xlsx",

            verified: true,

            verifiedAt: today

        },

        seo: {

            title:
                `${project.shortName} ${input.unitNumber}`,

            url:
                `/property/${slug}`

        },

        featured:
            input.featured ??
            false,

        sortOrder:
            Number(
                input.unitNumber.replace(/\D/g, "")
            ),

        searchable: true,

        lastUpdated: today

    };

}