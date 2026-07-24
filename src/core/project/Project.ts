import { PropertyUnit } from "@/types/property";

export interface ProjectIdentity {

    platformCode: string;

    developerCode: string;

    projectCode: string;

}

export interface ProjectMetadata {

    id: string;

    slug: string;

    name: string;

    shortName: string;

    developer: string;

    country: string;

    city: string;

    district: string;

    currency: string;

    status: string;

    propertyType: string;

    category: string;

    version: string;

}

export interface ProjectManifest {

    ready: boolean;

    searchable: boolean;

    published: boolean;

    importer: string;

    schema: string;

}

export interface ProjectAssets {

    gallery?: unknown;

    documents?: unknown;

    masterplan?: unknown;

    location?: unknown;

    paymentPlans?: unknown;

    prices?: unknown;

    statistics?: unknown;

}

export interface Project {

    metadata: ProjectMetadata;

    identity: ProjectIdentity;

    manifest: ProjectManifest;

    units: PropertyUnit[];

    assets: ProjectAssets;

}