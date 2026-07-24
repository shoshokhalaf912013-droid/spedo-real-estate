import Link from "next/link";

import type { PropertyUnit } from "@/types/property-v2";

type Props = {
    currentUnit: PropertyUnit;
    units: PropertyUnit[];
};

export function PropertyRelatedUnits({
    currentUnit,
    units
}: Props) {

    const relatedUnits = units
        .filter((unit) => {

            if (unit.id === currentUnit.id) {
                return false;
            }

            return (

                unit.building ===
                    currentUnit.building ||

                unit.type ===
                    currentUnit.type

            );

        })
        .slice(0, 4);

    if (!relatedUnits.length) {
        return null;
    }

    return (

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-2xl font-bold">

                Related Units

            </h2>

            <div className="grid gap-4 md:grid-cols-2">

                {relatedUnits.map((unit) => (

                    <Link
                        key={unit.id}
                        href={`/property/${unit.slug}`}
                        className="rounded-2xl bg-slate-800 p-5 transition hover:bg-slate-700"
                    >

                        <h3 className="font-bold">

                            {unit.unitNo}

                        </h3>

                        <p className="mt-2 text-slate-400">

                            {unit.type}

                        </p>

                        <p className="text-slate-400">

                            {unit.area} m²
                        </p>

                    </Link>

                ))}

            </div>

        </section>

    );

}