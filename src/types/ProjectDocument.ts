export type ProjectDocumentType =
    | "brochure"
    | "price-list"
    | "payment-plan"
    | "floor-plan"
    | "master-plan"
    | "specifications"
    | "contract"
    | "license"
    | "other";

export interface ProjectDocument {

    id: string;

    title: string;

    type: ProjectDocumentType;

    file: string;

    thumbnail?: string;

    extension: string;

    size?: number;

    language?: string;

    version?: string;

    publishedAt?: string;

    verified: boolean;

}