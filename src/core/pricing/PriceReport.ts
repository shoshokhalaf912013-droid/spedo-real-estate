// src/core/pricing/PriceReport.ts

export interface InvalidPriceItem {

    unitNumber: string;

    price: number;

}

export class PriceReport {

    private invalid: InvalidPriceItem[] = [];

    add(
        unitNumber: string,
        price: number
    ) {

        this.invalid.push({

            unitNumber,
            price

        });

    }

    print() {

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "PRICE VALIDATION REPORT"
        );

        console.log(
            "================================"
        );

        console.log(
            "Invalid Units:",
            this.invalid.length
        );

        console.table(
            this.invalid
        );

    }

}

export const priceReport =
    new PriceReport();