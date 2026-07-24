import { ImportedUnit } from "./types";

function normalizeType(
    type: string
): string {

    const value =
        type.toLowerCase();

    if (value.includes("studio")) {
        return "Studio";
    }

    if (value.includes("1")) {
        return "One Bedroom";
    }

    if (value.includes("2")) {
        return "Two Bedrooms";
    }

    if (value.includes("3")) {
        return "Three Bedrooms";
    }

    if (value.includes("chalet")) {
        return "Chalet";
    }

    if (value.includes("penthouse")) {
        return "Penthouse";
    }

    return type.trim();

}

function normalizeView(
    view: string
): string {

    return view

        .replace(
            /sea\s*view/i,
            "Sea View"
        )

        .replace(
            /pool\s*view/i,
            "Pool View"
        )

        .replace(
            /garden\s*view/i,
            "Garden View"
        )

        .trim();

}

export function transformUnits(
    units: ImportedUnit[]
): ImportedUnit[] {

    return units.map(

        unit => ({

            ...unit,

            unitType:
                normalizeType(
                    unit.unitType
                ),

            view:
                normalizeView(
                    unit.view
                )

        })

    );

}