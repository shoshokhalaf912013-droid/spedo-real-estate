export interface MasterPlanHotspot {

    id: string;

    title: string;

    description?: string;

    image?: string;

    x: number;

    y: number;

}

export interface MasterPlanPhase {

    id: string;

    name: string;

    description?: string;

    deliveryYear?: number;

}

export interface ProjectMasterPlan {

    image: string;

    thumbnail?: string;

    phases: MasterPlanPhase[];

    hotspots: MasterPlanHotspot[];

}