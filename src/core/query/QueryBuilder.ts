import type { PropertyUnit } from "@/types/property";

export class QueryBuilder {

    private result: PropertyUnit[];

    constructor(units: PropertyUnit[]) {

        this.result = [...units];

    }

    project(name: string): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.project === name
        );

        return this;

    }

    developer(name: string): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.developer === name
        );

        return this;

    }

    type(type: PropertyUnit["type"]): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.type === type
        );

        return this;

    }

    status(status: PropertyUnit["status"]): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.status === status
        );

        return this;

    }

    bedrooms(count: number): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.bedrooms === count
        );

        return this;

    }

    bathrooms(count: number): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.bathrooms === count
        );

        return this;

    }

    floor(floor: PropertyUnit["floor"]): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.floor === floor
        );

        return this;

    }

    areaBetween(min: number, max: number): QueryBuilder {

        this.result = this.result.filter(
            unit =>
                unit.area >= min &&
                unit.area <= max
        );

        return this;

    }

    priceBetween(min: number, max: number): QueryBuilder {

        this.result = this.result.filter(
            unit =>
                unit.price >= min &&
                unit.price <= max
        );

        return this;

    }

    currency(currency: PropertyUnit["currency"]): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.currency === currency
        );

        return this;

    }

    seaView(): QueryBuilder {

        this.result = this.result.filter(
            unit => (unit as any).seaView
        );

        return this;

    }

    lagoonView(): QueryBuilder {

        this.result = this.result.filter(
            unit => (unit as any).lagoonView
        );

        return this;

    }

    poolView(): QueryBuilder {

        this.result = this.result.filter(
            unit => (unit as any).poolView
        );

        return this;

    }

    available(): QueryBuilder {

        this.result = this.result.filter(
            unit => unit.status === "Available"
        );

        return this;

    }

    sortByPriceAsc(): QueryBuilder {

        this.result.sort(
            (a, b) => a.price - b.price
        );

        return this;

    }

    sortByPriceDesc(): QueryBuilder {

        this.result.sort(
            (a, b) => b.price - a.price
        );

        return this;

    }

    sortByArea(): QueryBuilder {

        this.result.sort(
            (a, b) => a.area - b.area
        );

        return this;

    }

    limit(count: number): QueryBuilder {

        this.result = this.result.slice(0, count);

        return this;

    }

    get(): PropertyUnit[] {

        return this.result;

    }

}