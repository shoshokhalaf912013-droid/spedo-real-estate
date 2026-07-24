import type { PropertyUnit } from "@/types/property-v2";

type Props = {
    unit: PropertyUnit;
};

function money(value?: number) {

    if (!value) {
        return "N/A";
    }

    return new Intl.NumberFormat(
        "en-US"
    ).format(value);

}

export function PropertyFinancialCards({
    unit
}: Props) {

    return (

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <Card
                title="Total Price"
                value={`${money(unit.price)} EGP`}
            />

            <Card
                title="Down Payment"
                value={`${money(unit.payment.downPayment)} EGP`}
            />

            <Card
                title="Quarterly Installment"
                value={`${money(unit.payment.quarterlyInstallment)} EGP`}
            />

            <Card
                title="Price / m²"
                value={`${money(unit.pricePerSqm)} EGP`}
            />

        </section>

    );

}

function Card({
    title,
    value
}: {
    title: string;
    value: string;
}) {

    return (

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-sm text-slate-400">

                {title}

            </p>

            <h3 className="mt-3 text-2xl font-bold text-amber-400">

                {value}

            </h3>

        </div>

    );

}