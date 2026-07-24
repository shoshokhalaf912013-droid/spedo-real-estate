"use client";

const projects = [

    {
        title: "Blue Crest",
        location: "Al Ahyaa • Hurghada",
        tag: "High ROI",
        description:
            "Modern resort apartments with strong rental demand and flexible payment plans."
    },

    {
        title: "Marvento",
        location: "Magawish • Hurghada",
        tag: "Luxury Living",
        description:
            "Premium coastal residences designed for international buyers and holiday investors."
    },

    {
        title: "The View",
        location: "Sahl Hasheesh",
        tag: "Beachfront",
        description:
            "Exclusive beachfront opportunities with long-term capital appreciation potential."
    }

];

export default function FAQRecommendedProjects() {

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#020202]
            py-24
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,.04),transparent_35%)]
                "
            />

            <div
                className="
                relative
                mx-auto
                max-w-7xl
                px-6
                "
            >

                <div
                    className="
                    mb-16
                    text-center
                    "
                >

                    <span
                        className="
                        text-xs
                        uppercase
                        tracking-[4px]
                        text-[#d4af37]
                        "
                    >
                        Recommended Projects
                    </span>

                    <h2
                        className="
                        mt-6
                        text-5xl
                        font-light
                        text-white
                        md:text-6xl
                        "
                    >
                        Investment Opportunities
                        We Recommend
                    </h2>

                    <p
                        className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-gray-400
                        "
                    >
                        Carefully selected projects
                        for international investors
                        seeking rental income,
                        lifestyle benefits and
                        long-term growth.
                    </p>

                </div>

                <div
                    className="
                    grid
                    gap-8
                    md:grid-cols-2
                    lg:grid-cols-3
                    "
                >

                    {

                        projects.map(

                            project => (

                                <div
                                    key={project.title}
                                    className="
                                    overflow-hidden
                                    rounded-[36px]
                                    border
                                    border-[#d4af37]/10
                                    bg-[#111111]
                                    p-8
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:border-[#d4af37]/20
                                    hover:shadow-[0_20px_60px_rgba(212,175,55,.10)]
                                    "
                                >

                                    <span
                                        className="
                                        inline-flex
                                        rounded-full
                                        bg-[#d4af37]
                                        px-4
                                        py-2
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[2px]
                                        text-black
                                        "
                                    >
                                        {project.tag}
                                    </span>

                                    <h3
                                        className="
                                        mt-8
                                        text-3xl
                                        font-light
                                        text-white
                                        "
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className="
                                        mt-3
                                        text-sm
                                        uppercase
                                        tracking-[2px]
                                        text-[#d4af37]
                                        "
                                    >
                                        {project.location}
                                    </p>

                                    <p
                                        className="
                                        mt-6
                                        leading-8
                                        text-gray-400
                                        "
                                    >
                                        {project.description}
                                    </p>

                                    <button
                                        className="
                                        mt-8
                                        rounded-full
                                        border
                                        border-[#d4af37]/20
                                        px-6
                                        py-3
                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-[2px]
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:border-[#d4af37]/40
                                        hover:bg-[#171717]
                                        "
                                    >
                                        View Project
                                    </button>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

}