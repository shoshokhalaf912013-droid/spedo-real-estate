import { createProperty } from "@/core/propertyFactory";
import factoryProject from "@/data/projects/markResort/factoryProject";

import { ImportedUnit } from "../types";

function normalizeView(
    view: string
): string {

    const value = view.toLowerCase();

    if (value.includes("pool")) {
        return "Pool View";
    }

    if (value.includes("mamsha")) {
        return "Mamsha View";
    }

    if (value.includes("garden")) {
        return "Garden View";
    }

    return view;
}

function normalizeType(
    type: string
): string {

    const value = type.toLowerCase();

    if (value.includes("studio")) {
        return "Studio";
    }

    if (value.includes("one")) {
        return "One Bedroom";
    }

    if (value.includes("two")) {
        return "Two Bedrooms";
    }

    if (value.includes("three")) {
        return "Three Bedrooms";
    }

    return type;
}

export function transformUnits(
    units: ImportedUnit[]
) {

    return units.map(unit =>
        createProperty(
            factoryProject,
            {
                unitNumber: unit.unitNumber,

                building: unit.building ?? "",

                level: unit.level,

                unitType: normalizeType(
                    unit.unitType
                ),

                bedrooms: unit.bedrooms,

                area: unit.area,

                view: normalizeView(
                    unit.view
                ),

                price:
                    unit.priceEGP ??
                    unit.price ??
                    0,

                downPayment:
                    unit.downPayment ?? 0,

                quarterly:
                    unit.quarterly ?? 0,

                maintenance:
                    unit.maintenance ?? 0,

                facilities:
                    unit.facilities ?? 0
            }
        )
    );
}