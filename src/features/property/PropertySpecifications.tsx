import type { PropertyUnit } from "@/types/property-v2";

type Props = {
    unit: PropertyUnit;
};

export function PropertySpecifications({
    unit
}: Props) {

    return (

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-2xl font-bold">

                Property Specifications

            </h2>

            <div className="grid gap-4 md:grid-cols-2">

                <Item
                    label="Unit Number"
                    value={unit.unitNo}
                />

                <Item
                    label="Property Type"
                    value={unit.type}
                />

                <Item
                    label="Building"
                    value={unit.building}
                />

                <Item
                    label="Floor"
                    value={unit.floor}
                />

                <Item
                    label="Area"
                    value={`${unit.area} m²`}
                />

                <Item
                    label="Bedrooms"
                    value={String(unit.bedrooms)}
                />

                <Item
                    label="Bathrooms"
                    value={String(unit.bathrooms)}
                />

                <Item
                    label="View"
                    value={unit.view}
                />

                <Item
                    label="Finishing"
                    value={unit.finishing}
                />

                <Item
                    label="Delivery"
                    value={unit.delivery || "TBA"}
                />

                <Item
                    label="Status"
                    value={unit.status}
                />

                <Item
                    label="Price Per m²"
                    value={`${new Intl.NumberFormat(
                        "en-US"
                    ).format(unit.pricePerSqm)} EGP`}
                />

            </div>

        </section>

    );

}

function Item({
    label,
    value
}: {
    label: string;
    value: string;
}) {

    return (

        <div className="rounded-2xl bg-slate-800 p-4">

            <p className="text-sm text-slate-400">

                {label}

            </p>

            <p className="mt-2 text-lg font-semibold">

                {value}

            </p>

        </div>

    );

}