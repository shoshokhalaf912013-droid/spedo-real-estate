import type { Project } from "./Project";
import type { PropertyUnit } from "@/types/property";

export class ProjectModel {

    constructor(
        private readonly project: Project
    ) {}

    data(): Project {

        return this.project;

    }

    metadata() {

        return this.project.metadata;

    }

    identity() {

        return this.project.identity;

    }

    units(): PropertyUnit[] {

        return this.project.units;

    }

    assets() {

        return this.project.assets;

    }

    totalUnits(): number {

        return this.project.units.length;

    }

    availableUnits(): PropertyUnit[] {

        return this.project.units.filter(

            unit => unit.availability.available

        );

    }

    availableCount(): number {

        return this.availableUnits().length;

    }

    soldUnits(): PropertyUnit[] {

        return this.project.units.filter(

            unit => unit.availability.sold

        );

    }

    soldCount(): number {

        return this.soldUnits().length;

    }

    reservedUnits(): PropertyUnit[] {

        return this.project.units.filter(

            unit => unit.availability.reserved

        );

    }

    reservedCount(): number {

        return this.reservedUnits().length;

    }

}