import Link from "next/link";

import { projectApplication } from "@/application/project/ProjectApplication";

export default function FeaturedProjectsGrid() {

    const projects =
        projectApplication.getFeaturedProjects();

    return (

        <section className="bg-[#05070D] py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span
                        className="
                        rounded-full
                        border
                        border-[#F97316]/30
                        bg-[#F97316]/10
                        px-5
                        py-2
                        text-sm
                        uppercase
                        tracking-[4px]
                        text-[#F97316]
                        "
                    >
                        Featured Projects
                    </span>

                    <h2 className="mt-8 text-5xl font-bold text-white">

                        Discover Our Projects

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-slate-400">

                        Every project below is loaded dynamically from the
                        SPEDO Core.

                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {projects.map(project => (

                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-[#101826]
                            transition
                            hover:border-[#F97316]
                            "
                        >

                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-72 w-full object-cover"
                            />

                            <div className="p-8">

                                <span className="text-sm uppercase tracking-[3px] text-[#F97316]">

                                    {project.badge}

                                </span>

                                <h3 className="mt-4 text-3xl font-bold text-white">

                                    {project.name}

                                </h3>

                                <p className="mt-4 text-slate-400">

                                    {project.description}

                                </p>

                                <div className="mt-8 space-y-2 text-sm text-slate-300">

                                    <div>

                                        <strong>Developer:</strong>{" "}

                                        {project.developer}

                                    </div>

                                    <div>

                                        <strong>Location:</strong>{" "}

                                        {project.city}

                                    </div>

                                    <div>

                                        <strong>Units:</strong>{" "}

                                        {project.totalUnits}

                                    </div>

                                    <div>

                                        <strong>Available:</strong>{" "}

                                        {project.availableUnits}

                                    </div>

                                    <div>

                                        <strong>Starting From:</strong>{" "}

                                        {project.startingPrice.toLocaleString()}

                                        {" "}

                                        {project.currency}

                                    </div>

                                </div>

                                <div className="mt-8">

                                    <span
                                        className="
                                        inline-flex
                                        rounded-xl
                                        bg-[#F97316]
                                        px-6
                                        py-3
                                        font-semibold
                                        text-white
                                        "
                                    >

                                        {project.cta}

                                    </span>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );

}