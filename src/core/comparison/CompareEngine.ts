import type { PropertyUnit } from "@/types/property";

export interface ComparisonResult {

    cheaper: PropertyUnit;

    largerArea: PropertyUnit;

    betterPricePerMeter: PropertyUnit;

    betterPaymentPlan: PropertyUnit;

    betterInvestment: PropertyUnit;

}

export class CompareEngine {

    compare(
        first: PropertyUnit,
        second: PropertyUnit
    ): ComparisonResult {

        return {

            cheaper:
                first.price <= second.price
                    ? first
                    : second,

            largerArea:
                first.area >= second.area
                    ? first
                    : second,

            betterPricePerMeter:
                this.getPricePerMeter(first)
                <=
                this.getPricePerMeter(second)
                    ? first
                    : second,

            betterPaymentPlan:
                this.getPaymentPlanScore(first)
                >=
                this.getPaymentPlanScore(second)
                    ? first
                    : second,

            betterInvestment:
                this.score(first)
                >=
                this.score(second)
                    ? first
                    : second

        };

    }

    private getPricePerMeter(
        unit: PropertyUnit
    ): number {

        if (unit.area <= 0) {

            return Number.POSITIVE_INFINITY;

        }

        return unit.price / unit.area;

    }

    private getPaymentPlanScore(
        unit: PropertyUnit
    ): number {

        const data =
            unit as unknown as Record<string, unknown>;

        const payment =
            this.getRecord(data.payment);

        const installmentYears =
            this.getNumber(
                payment?.installmentYears
            )
            ??
            this.getNumber(
                payment?.installmentsYears
            )
            ??
            this.getNumber(
                data.installmentYears
            )
            ??
            this.getNumber(
                data.installmentsYears
            )
            ??
            0;

        const downPayment =
            this.getNumber(
                payment?.downPayment
            )
            ??
            this.getNumber(
                data.downPayment
            )
            ??
            unit.price;

        const paymentYearsScore =
            installmentYears * 10;

        const downPaymentRatio =
            unit.price > 0
                ? downPayment / unit.price
                : 1;

        const downPaymentScore =
            Math.max(
                0,
                10 - downPaymentRatio * 10
            );

        return (
            paymentYearsScore
            +
            downPaymentScore
        );

    }

    private score(
        unit: PropertyUnit
    ): number {

        let score = 0;

        score += unit.area * 0.25;

        score +=
            this.getPaymentPlanScore(unit);

        score +=
            this.hasView(
                unit,
                "sea"
            )
                ? 25
                : 0;

        score +=
            this.hasView(
                unit,
                "pool"
            )
                ? 10
                : 0;

        score +=
            this.hasView(
                unit,
                "lagoon"
            )
                ? 10
                : 0;

        score -=
            this.getPricePerMeter(unit)
            / 1000;

        return score;

    }

    private hasView(
        unit: PropertyUnit,
        keyword: string
    ): boolean {

        const data =
            unit as unknown as Record<string, unknown>;

        const directFlag =
            this.getBoolean(
                data[`${keyword}View`]
            );

        if (directFlag === true) {

            return true;

        }

        const view =
            this.getString(
                data.view
            )
            ??
            this.getString(
                data.views
            )
            ??
            "";

        return view
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            );

    }

    private getRecord(
        value: unknown
    ): Record<string, unknown> | undefined {

        if (
            typeof value === "object"
            &&
            value !== null
            &&
            !Array.isArray(value)
        ) {

            return value as Record<string, unknown>;

        }

        return undefined;

    }

    private getNumber(
        value: unknown
    ): number | undefined {

        if (
            typeof value === "number"
            &&
            Number.isFinite(value)
        ) {

            return value;

        }

        return undefined;

    }

    private getString(
        value: unknown
    ): string | undefined {

        return typeof value === "string"
            ? value
            : undefined;

    }

    private getBoolean(
        value: unknown
    ): boolean | undefined {

        return typeof value === "boolean"
            ? value
            : undefined;

    }

}