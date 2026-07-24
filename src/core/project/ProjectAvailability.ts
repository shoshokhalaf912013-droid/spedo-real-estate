import type { Project } from "./Project";
import type { PropertyUnit } from "@/types/property";

export class ProjectAvailability {

    constructor(
        private readonly project: Project
    ) {}

    all(): PropertyUnit[] {

        return this.project.units;

    }

    available(): PropertyUnit[] {

        return this.project.units.filter(

            unit => unit.availability.available

        );

    }

    reserved(): PropertyUnit[] {

        return this.project.units.filter(

            unit => unit.availability.reserved

        );

    }

    sold(): PropertyUnit[] {

        return this.project.units.filter(

            unit => unit.availability.sold

        );

    }

    availableCount(): number {

        return this.available().length;

    }

    reservedCount(): number {

        return this.reserved().length;

    }

    soldCount(): number {

        return this.sold().length;

    }

    hasAvailableUnits(): boolean {

        return this.availableCount() > 0;

    }

    hasSoldUnits(): boolean {

        return this.soldCount() > 0;

    }

    hasReservedUnits(): boolean {

        return this.reservedCount() > 0;

    }

    availabilityRate(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return (

            this.availableCount() /

            this.project.units.length

        ) * 100;

    }

    soldRate(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return (

            this.soldCount() /

            this.project.units.length

        ) * 100;

    }

    reservedRate(): number {

        if (!this.project.units.length) {

            return 0;

        }

        return (

            this.reservedCount() /

            this.project.units.length

        ) * 100;

    }

}