export interface PaymentInstallment {

    years: number;

    months: number;

    downPaymentPercent: number;

    downPaymentAmount?: number;

    quarterlyInstallment?: number;

    monthlyInstallment?: number;

    maintenancePercent?: number;

    maintenanceAmount?: number;

    facilitiesPercent?: number;

    facilitiesAmount?: number;

}

export interface PaymentDiscount {

    name: string;

    percentage: number;

    description?: string;

}

export interface ProjectPaymentPlan {

    currency: string;

    cashPrice?: number;

    installments: PaymentInstallment[];

    discounts?: PaymentDiscount[];

    notes?: string[];

    available: boolean;

}