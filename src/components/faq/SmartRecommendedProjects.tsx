"use client";

import recommendedProjects
from "@/data/projects/recommended";

type Props = {

    category?:
        | "investment"
        | "rental"
        | "living"
        | "european";

};

export default function SmartRecommendedProjects({

    category = "investment"

}: Props) {

    const projects =
        recommendedProjects[
            category
        ] || [];

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
                relative
                mx-auto
                max-w-7xl
                px-6
                "
            >

                <div
                    className="
                    rounded-[48px]
                    bg-[#d8d0c3]
                    px-10
                    py-16
                    shadow-[0_20px_80px_rgba(0,0,0,.35)]
                    "
                >

                    <div
                        className="
                        mb-14
                        text-center
                        "
                    >

                        <div
                            className="
                            mx-auto
                            mb-6
                            flex
                            items-center
                            justify-center
                            gap-6
                            "
                        >

                            <div
                                className="
                                h-px
                                w-24
                                bg-[#b89a48]
                                "
                            />

                            <span
                                className="
                                text-xs
                                uppercase
                                tracking-[4px]
                                text-[#b89a48]
                                "
                            >
                                Smart Recommendations
                            </span>

                            <div
                                className="
                                h-px
                                w-24
                                bg-[#b89a48]
                                "
                            />

                        </div>

                        <h2
                            className="
                            text-5xl
                            font-light
                            text-[#1a1a1a]
                            md:text-6xl
                            "
                        >
                            Recommended
                            Investment
                            Opportunities
                        </h2>

                        <p
                            className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-lg
                            leading-8
                            text-[#4b5563]
                            "
                        >
                            Handpicked projects
                            with high ROI and
                            strong investment
                            potential in the
                            Red Sea.
                        </p>

                    </div>

                    <div
                        className="
                        grid
                        gap-8
                        md:grid-cols-2
                        "
                    >
		                    {

                        projects.map(

                            project => (

                                <div
                                    key={project.name}
                                    className="
                                    overflow-hidden
                                    rounded-[36px]
                                    bg-[#111111]
                                    shadow-[0_15px_40px_rgba(0,0,0,.30)]
                                    "
                                >

                                    <div
                                        className="
                                        h-[320px]
                                        bg-gradient-to-br
                                        from-[#2a2a2a]
                                        to-[#111111]
                                        "
                                    >

                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="
                                            h-full
                                            w-full
                                            object-cover
                                            "
                                        />

                                    </div>

                                    <div
                                        className="
                                        p-8
                                        "
                                    >

                                        <span
                                            className="
                                            inline-flex
                                            items-center
                                            rounded-full
                                            bg-[#f97316]
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-white
                                            "
                                        >
                                            {project.badge}
                                        </span>

                                        <h3
                                            className="
                                            mt-6
                                            text-4xl
                                            font-light
                                            text-white
                                            "
                                        >
                                            {project.name}
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
                                            text-gray-300
                                            "
                                        >
                                            {project.type}
                                        </p>

                                        <button
                                            className="
                                            mt-8
                                            rounded-full
                                            bg-[#f97316]
                                            px-8
                                            py-4
                                            text-sm
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:scale-105
                                            "
                                        >
                                            View Project
                                        </button>

                                    </div>

                                </div>

                            )

                        )

                    }

                    </div>

                    <div
                        className="
                        mt-14
                        flex
                        justify-center
                        "
                    >

                        <button
                            className="
                            rounded-full
                            bg-[#111111]
                            px-12
                            py-5
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[2px]
                            text-[#d4af37]
                            transition-all
                            duration-300
                            hover:bg-black
                            "
                        >
                            View All Projects
                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}