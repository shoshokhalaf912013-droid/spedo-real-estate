import type { Project } from "@/core/project";
import type { PropertyUnit } from "@/types/property";

export interface ProjectDetailsModel {

    id: string;

    slug: string;

    name: string;

    shortName: string;

    developer: string;

    country: string;

    city: string;

    district: string;

    category: string;

    propertyType: string;

    status: string;

    currency: string;

    version: string;

    heroImage: string;

    gallery: unknown;

    location: unknown;

    prices: unknown;

    statistics: {

        totalUnits: number;

        availableUnits: number;

    };

    units: PropertyUnit[];

    project: Project;

}