"use client";

import { useMemo, useState } from "react";

import type { PropertyUnit } from "@/types/property-v2";

type Props = {
    unit: PropertyUnit;
};

function money(value: number) {
    return new Intl.NumberFormat("en-US").format(
        Math.round(value)
    );
}

export function PropertyInstallmentCalculator({
    unit
}: Props) {

    const defaultDownPayment =
        unit.payment.downPayment;

    const [downPayment, setDownPayment] =
        useState(defaultDownPayment);

    const calculations = useMemo(() => {

        const remaining =
            unit.price - downPayment;

        const years =
            unit.payment.installmentYears;

        const quarters =
            years * 4;

        const quarterlyInstallment =
            remaining / quarters;

        return {

            remaining,

            quarterlyInstallment

        };

    }, [
        downPayment,
        unit
    ]);

    return (

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="text-2xl font-bold">

                Installment Calculator

            </h2>

            <div className="mt-8">

                <label className="mb-2 block text-sm text-slate-400">

                    Down Payment

                </label>

                <input
                    type="range"
                    min={0}
                    max={unit.price}
                    step={10000}
                    value={downPayment}
                    onChange={(event) =>
                        setDownPayment(
                            Number(
                                event.target.value
                            )
                        )
                    }
                    className="w-full"
                />

                <div className="mt-3 text-lg font-semibold text-amber-400">

                    {money(downPayment)} EGP

                </div>

            </div>

            <div className="mt-8 grid gap-4">

                <Card
                    title="Total Price"
                    value={`${money(unit.price)} EGP`}
                />

                <Card
                    title="Remaining Balance"
                    value={`${money(
                        calculations.remaining
                    )} EGP`}
                />

                <Card
                    title="Quarterly Installment"
                    value={`${money(
                        calculations.quarterlyInstallment
                    )} EGP`}
                />

                <Card
                    title="Maintenance"
                    value={`${money(
                        unit.payment.maintenanceAmount
                    )} EGP`}
                />

            </div>

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

        <div className="rounded-2xl bg-slate-800 p-4">

            <p className="text-sm text-slate-400">

                {title}

            </p>

            <p className="mt-2 text-lg font-bold text-white">

                {value}

            </p>

        </div>

    );

}