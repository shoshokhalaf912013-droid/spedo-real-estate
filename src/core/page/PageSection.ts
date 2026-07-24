export interface PageSection {

    id: string;

    component: string;

    enabled: boolean;

    order: number;

    props?: Record<string, unknown>;

}