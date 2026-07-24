import { PropertyUnit } from "@/types/property-v2";

export class PropertyRepository {

    constructor(
        private readonly units: PropertyUnit[]
    ) {}

    all(): PropertyUnit[] {
        return this.units;
    }

    count(): number {
        return this.units.length;
    }

    findById(id: string) {
        return this.units.find(
            unit => unit.id === id
        );
    }

    findBySlug(slug: string) {
        return this.units.find(
            unit => unit.slug === slug
        );
    }

    byProject(project: string) {
        return this.units.filter(
            unit => unit.project === project
        );
    }

    byBuilding(building: string) {
        return this.units.filter(
            unit => unit.building === building
        );
    }

    byBedrooms(bedrooms: number) {
        return this.units.filter(
            unit => unit.bedrooms === bedrooms
        );
    }

    byView(view: string) {
        return this.units.filter(
            unit => unit.view === view
        );
    }

    available() {
        return this.units.filter(
            unit => unit.availability.available
        );
    }

    minPrice() {
        return Math.min(
            ...this.units.map(unit => unit.price)
        );
    }

    maxPrice() {
        return Math.max(
            ...this.units.map(unit => unit.price)
        );
    }

}