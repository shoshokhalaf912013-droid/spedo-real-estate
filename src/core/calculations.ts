export function calculatePricePerSqm(
    price: number,
    area: number
): number {

    if (!area) return 0;

    return Math.round(price / area);

}