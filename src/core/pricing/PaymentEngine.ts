import type { PaymentPlan } from "@/data/types/property";

export interface PaymentCalculation {

    totalPrice: number;

    downPayment: number;

    financedAmount: number;

    monthlyInstallment: number;

    quarterlyInstallment: number;

    yearlyInstallment: number;

    totalMonths: number;

    totalYears: number;

}

export class PaymentEngine {

    calculate(

        totalPrice: number,

        payment: PaymentPlan

    ): PaymentCalculation {

        const downPayment =

            totalPrice * payment.downPayment / 100;

        const financedAmount =

            totalPrice - downPayment;

        const totalMonths =

            payment.installmentYears * 12;

        const monthlyInstallment =

            financedAmount / totalMonths;

        const quarterlyInstallment =

            financedAmount /

            (payment.installmentYears * 4);

        const yearlyInstallment =

            financedAmount /

            payment.installmentYears;

        return {

            totalPrice,

            downPayment,

            financedAmount,

            monthlyInstallment,

            quarterlyInstallment,

            yearlyInstallment,

            totalMonths,

            totalYears: payment.installmentYears

        };

    }

    calculateDownPayment(

        totalPrice: number,

        percent: number

    ): number {

        return totalPrice * percent / 100;

    }

    calculateRemaining(

        totalPrice: number,

        downPayment: number

    ): number {

        return totalPrice - downPayment;

    }

    calculateMonthly(

        amount: number,

        years: number

    ): number {

        return amount / (years * 12);

    }

    calculateQuarterly(

        amount: number,

        years: number

    ): number {

        return amount / (years * 4);

    }

    calculateYearly(

        amount: number,

        years: number

    ): number {

        return amount / years;

    }

    format(value: number): string {

        return new Intl.NumberFormat(

            "en-US",

            {

                minimumFractionDigits: 0,

                maximumFractionDigits: 0

            }

        ).format(value);

    }

}