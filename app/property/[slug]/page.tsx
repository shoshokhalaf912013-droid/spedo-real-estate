import { notFound } from "next/navigation";

import project from "@/data/projects/blue-crest/project";

import { PropertyHero } from "@/features/property/PropertyHero";
import { PropertyFinancialCards } from "@/features/property/PropertyFinancialCards";
import { PropertySpecifications } from "@/features/property/PropertySpecifications";
import { PropertyRelatedUnits } from "@/features/property/PropertyRelatedUnits";
import { PropertyWhatsAppCTA } from "@/features/property/PropertyWhatsAppCTA";
import { PropertyInstallmentCalculator } from "@/features/property/PropertyInstallmentCalculator";

export async function generateStaticParams() {
    return project.units
        .filter((unit) => unit.slug)
        .map((unit) => ({
            slug: unit.slug
        }));
}

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function PropertyPage({
    params
}: PageProps) {

    const { slug } = await params;

    const unit = project.units.find(
        (item) => item.slug === slug
    );

    if (!unit) {
        notFound();
    }

    return (

        <main className="min-h-screen bg-slate-950 text-white">

            <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">

                <PropertyHero
                    project={project}
                    unit={unit}
                />

                <div className="mt-8">

                    <PropertyFinancialCards
                        unit={unit}
                    />

                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-3">

                    <div className="space-y-8 lg:col-span-2">

                        <PropertySpecifications
                            unit={unit}
                        />

                        <PropertyRelatedUnits
                            currentUnit={unit}
                            units={project.units}
                        />

                    </div>

                    <div className="space-y-8">

                        <PropertyInstallmentCalculator
                            unit={unit}
                        />

                        <PropertyWhatsAppCTA
                            project={project}
                            unit={unit}
                        />

                    </div>

                </div>

            </div>

        </main>

    );

}