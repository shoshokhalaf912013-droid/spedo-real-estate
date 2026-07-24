import type { Project } from "@/core/project";
import type { PropertyUnit } from "@/types/property-v2";

type Props = {
    project: Project;
    unit: PropertyUnit;
};

const WHATSAPP_NUMBER = "201010013021";

function money(value: number) {
    return new Intl.NumberFormat(
        "en-US"
    ).format(value);
}

export function PropertyWhatsAppCTA({
    project,
    unit
}: Props) {

    const message = `Hello,

I'm interested in the following property:

Project:
${project.metadata.name}

Unit:
${unit.unitNo}

Building:
${unit.building}

Type:
${unit.type}

Area:
${unit.area} m²

Price:
${money(unit.price)} EGP

Down Payment:
${money(
        unit.payment.downPayment
    )} EGP

Quarterly Installment:
${money(
        unit.payment.quarterlyInstallment
    )} EGP

View:
${unit.view}

Please contact me with more details.

Thank you.`;

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;

    return (

        <section className="rounded-3xl border border-amber-500/30 bg-slate-900 p-8">

            <h2 className="text-2xl font-bold text-amber-400">

                Interested In This Unit?

            </h2>

            <p className="mt-4 text-slate-400">

                Contact our sales team directly on WhatsApp
                and receive full payment details.

            </p>

            <div className="mt-6 space-y-3 text-sm">

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Unit
                    </span>

                    <span>
                        {unit.unitNo}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Price
                    </span>

                    <span>
                        {money(unit.price)} EGP
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Down Payment
                    </span>

                    <span>
                        {money(
                            unit.payment.downPayment
                        )} EGP
                    </span>

                </div>

            </div>

            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex h-14 items-center justify-center rounded-2xl bg-amber-500 font-bold text-slate-950 transition hover:opacity-90"
            >

                Contact On WhatsApp

            </a>

        </section>

    );

}