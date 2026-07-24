import { notFound } from "next/navigation";

import { projectDetailsApplication } from "@/application/project/ProjectDetailsApplication";

export default async function ProjectPage({

    params

}: {

    params: Promise<{

        slug: string;

    }>;

}) {

    const { slug } = await params;

    const project =
        projectDetailsApplication.getProjectDetails(
            slug
        );

    if (!project) {

        notFound();

    }

    return (

        <main className="min-h-screen bg-[#05070D] text-white">

            {/* HERO */}

            <section className="border-b border-white/10">

                <div className="mx-auto max-w-7xl px-6 py-24">

                    <span className="text-sm uppercase tracking-[5px] text-[#F97316]">

                        {project.category}

                    </span>

                    <h1 className="mt-6 text-6xl font-bold">

                        {project.name}

                    </h1>

                    <p className="mt-8 max-w-3xl text-xl text-slate-300">

                        {project.propertyType}

                    </p>

                </div>

            </section>

            {/* PROJECT INFORMATION */}

            <section className="py-20">

                <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">

                    <div className="rounded-3xl bg-[#101826] p-8">

                        <h3 className="text-[#F97316]">

                            Developer

                        </h3>

                        <p className="mt-4 text-2xl">

                            {project.developer}

                        </p>

                    </div>

                    <div className="rounded-3xl bg-[#101826] p-8">

                        <h3 className="text-[#F97316]">

                            Location

                        </h3>

                        <p className="mt-4 text-2xl">

                            {project.city}

                        </p>

                    </div>

                    <div className="rounded-3xl bg-[#101826] p-8">

                        <h3 className="text-[#F97316]">

                            Available Units

                        </h3>

                        <p className="mt-4 text-2xl">

                            {project.statistics.availableUnits}

                        </p>

                    </div>

                    <div className="rounded-3xl bg-[#101826] p-8">

                        <h3 className="text-[#F97316]">

                            Total Units

                        </h3>

                        <p className="mt-4 text-2xl">

                            {project.statistics.totalUnits}

                        </p>

                    </div>

                </div>

            </section>

            {/* AVAILABLE UNITS */}

            <section className="pb-24">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="mb-10 text-4xl font-bold">

                        Available Units

                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {project.units.map(

                            unit => (

                                <div

                                    key={unit.id}

                                    className="rounded-3xl border border-white/10 bg-[#101826] p-6 transition hover:border-[#F97316]"

                                >

                                    <h3 className="text-2xl font-semibold">

                                        {unit.unitNo}

                                    </h3>

                                    <p className="mt-4 text-slate-400">

                                        {unit.type}

                                    </p>

                                    <p className="mt-2">

                                        Area:

                                        {" "}

                                        {unit.area}

                                        {" "}

                                        m²

                                    </p>

                                    <p className="mt-2">

                                        Bedrooms:

                                        {" "}

                                        {unit.bedrooms}

                                    </p>

                                    <p className="mt-2">

                                        Bathrooms:

                                        {" "}

                                        {unit.bathrooms}

                                    </p>

                                    <p className="mt-2">

                                        Floor:

                                        {" "}

                                        {unit.floor || "-"}

                                    </p>

                                    <p className="mt-2">

                                        Building:

                                        {" "}

                                        {unit.building || "-"}

                                    </p>

                                    <p className="mt-6 text-2xl font-bold text-[#F97316]">

                                        {unit.price.toLocaleString()}

                                        {" "}

                                        {unit.currency}

                                    </p>

                                    <div className="mt-6 flex items-center justify-between gap-4">

                                        <span

                                            className={
                                                unit.availability.available

                                                    ? "rounded-full bg-green-600/20 px-4 py-2 text-sm text-green-400"

                                                    : "rounded-full bg-red-600/20 px-4 py-2 text-sm text-red-400"
                                            }

                                        >

                                            {
                                                unit.availability.available

                                                    ? "Available"

                                                    : "Sold"
                                            }

                                        </span>

                                        <span className="truncate text-sm text-slate-500">

                                            {unit.slug}

                                        </span>

                                    </div>

                                </div>

                            )

                        )}

                    </div>

                </div>

            </section>

        </main>

    );

}