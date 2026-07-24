import projectApplication from "@/application/project/ProjectApplication";

import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {

    const projects =
        projectApplication.getProjectCards();

    return (

        <main className="min-h-screen bg-[#05070D] text-white">

            {/* HERO */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6 text-center">

                    <span className="uppercase tracking-[6px] text-[#F97316]">

                        VERIFIED PROJECTS

                    </span>

                    <h1 className="mt-6 font-playfair text-6xl md:text-7xl">

                        Discover Red Sea Investments

                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">

                        Every project displayed on SPEDO is generated directly
                        from verified developer data stored inside the SPEDO Core.

                    </p>

                </div>

            </section>

            {/* PROJECTS */}

            <section className="pb-32">

                <div className="mx-auto max-w-7xl px-6">

                    {

                        projects.length === 0

                            ? (

                                <div className="rounded-3xl border border-dashed border-white/10 p-20 text-center">

                                    <h2 className="text-3xl font-bold">

                                        No Projects Loaded

                                    </h2>

                                    <p className="mt-6 text-slate-400">

                                        The Project Engine has not loaded any
                                        projects yet.

                                    </p>

                                </div>

                            )

                            : (

                                <div className="space-y-20">

                                    {

                                        projects.map(project => (

                                            <ProjectCard

                                                key={project.id}

                                                project={project}

                                            />

                                        ))

                                    }

                                </div>

                            )

                    }

                </div>

            </section>

        </main>

    );

}