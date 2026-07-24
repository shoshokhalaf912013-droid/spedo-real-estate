export interface ProjectSalesStatistics {

    availableUnits: number;

    reservedUnits: number;

    soldUnits: number;

}

export interface ProjectInvestmentStatistics {

    averagePrice: number;

    minimumPrice: number;

    maximumPrice: number;

    averagePricePerMeter: number;

    expectedROI?: number;

    expectedRentalYield?: number;

}

export interface ProjectConstructionStatistics {

    launchYear?: number;

    deliveryYear?: number;

    constructionProgress?: number;

}

export interface ProjectStatistics {

    totalUnits: number;

    totalBuildings?: number;

    totalLandArea?: number;

    builtUpArea?: number;

    greenArea?: number;

    sales: ProjectSalesStatistics;

    investment: ProjectInvestmentStatistics;

    construction: ProjectConstructionStatistics;

}