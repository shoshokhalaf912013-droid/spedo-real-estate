export interface InvestmentResult {

    purchasePrice: number;

    annualRent: number;

    monthlyRent: number;

    roi: number;

    rentalYield: number;

    capitalGrowth: number;

    expectedSellingPrice: number;

    expectedProfit: number;

    totalReturn: number;

    investmentScore: number;

    breakEvenYears: number;

}

export class InvestmentEngine {

    analyze(

        purchasePrice: number,

        monthlyRent: number,

        expectedGrowth: number,

        years: number

    ): InvestmentResult {

        const annualRent =

            monthlyRent * 12;

        const roi =

            (annualRent / purchasePrice) * 100;

        const rentalYield = roi;

        const expectedSellingPrice =

            purchasePrice *

            (1 + expectedGrowth / 100) ** years;

        const expectedProfit =

            expectedSellingPrice -

            purchasePrice;

        const totalReturn =

            expectedProfit +

            (annualRent * years);

        const capitalGrowth =

            ((expectedSellingPrice - purchasePrice)

            / purchasePrice) * 100;

        const breakEvenYears =

            purchasePrice / annualRent;

        const investmentScore =

            (

                (roi * 0.40) +

                (capitalGrowth * 0.35) +

                ((100 / breakEvenYears) * 0.25)

            );

        return {

            purchasePrice,

            annualRent,

            monthlyRent,

            roi: Number(roi.toFixed(2)),

            rentalYield: Number(rentalYield.toFixed(2)),

            capitalGrowth: Number(capitalGrowth.toFixed(2)),

            expectedSellingPrice: Number(expectedSellingPrice.toFixed(2)),

            expectedProfit: Number(expectedProfit.toFixed(2)),

            totalReturn: Number(totalReturn.toFixed(2)),

            investmentScore: Number(investmentScore.toFixed(2)),

            breakEvenYears: Number(breakEvenYears.toFixed(2))

        };

    }

    compare(

        first: InvestmentResult,

        second: InvestmentResult

    ): InvestmentResult {

        return first.investmentScore >= second.investmentScore

            ? first

            : second;

    }

}