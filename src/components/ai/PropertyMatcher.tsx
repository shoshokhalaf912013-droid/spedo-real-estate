"use client";

import Link from "next/link";

import { useMemo, useState } from "react";

const budgets = [

    "Under €50,000",

    "€50,000 - €100,000",

    "€100,000 - €200,000",

    "€200,000+"

];

const purposes = [

    "Investment",

    "Living",

    "Rental Income"

];

const nationalities = [

    "Germany",

    "United Kingdom",

    "Poland",

    "Italy",

    "Russia",

    "Turkey",

    "Other"

];

const projects = [

    {

        slug: "blue-crest",

        name: "Blue Crest",

        location: "Al Ahyaa, Hurghada",

        href: "/projects/blue-crest",

        image: "/projects/blue-crest/hero.jpg",

        tags: [

            "investment",

            "rental"

        ],

        description:
            "Strong ROI potential with professional rental management."

    },

    {

        slug: "mark-resort",

        name: "Mark Resort",

        location: "Airport Road, Hurghada",

        href: "/projects/mark-resort",

        image: "/projects/mark-resort/hero.png",

        tags: [

            "rental",

            "investment"

        ],

        description:
            "Excellent opportunity for Airbnb and tourism income."

    },

    {

        slug: "hurghada-heights",

        name: "Hurghada Heights",

        location: "Hurghada",

        href: "/projects/hurghada-heights",

        image: "/projects/hurghada-heights/cover.jpg",

        tags: [

            "living",

            "family"

        ],

        description:
            "Ideal for families and long-term residential living."

    },

    {

        slug: "marvento",

        name: "Marvento",

        location: "Magawish, Hurghada",

        href: "/projects/marvento",

        image: "/projects/marvento/hero.jpeg",

        tags: [

            "luxury",

            "investment"

        ],

        description:
            "Premium lifestyle destination with modern amenities."

    }

];

export default function PropertyMatcher() {

    const [budget, setBudget] =
        useState(budgets[1]);

    const [purpose, setPurpose] =
        useState(purposes[0]);

    const [family, setFamily] =
        useState(false);

    const [airbnb, setAirbnb] =
        useState(false);

    const [nationality, setNationality] =
        useState(nationalities[0]);

    const recommendations =
        useMemo(() => {

            let result = [...projects];

            if (purpose === "Investment") {

                result = result.filter(

                    project =>

                        project.tags.includes(
                            "investment"
                        )

                );

            }

            if (purpose === "Rental Income") {

                result = result.filter(

                    project =>

                        project.tags.includes(
                            "rental"
                        )

                );

            }

            if (purpose === "Living") {

                result = result.filter(

                    project =>

                        project.tags.includes(
                            "living"
                        )

                );

            }

            if (family) {

                result = result.filter(

                    project =>

                        project.tags.includes(
                            "family"
                        ) ||

                        project.tags.includes(
                            "living"
                        )

                );

            }

            if (airbnb) {

                result = result.filter(

                    project =>

                        project.tags.includes(
                            "rental"
                        )

                );

            }

            return result;

        }, [

            budget,

            purpose,

            family,

            airbnb,

            nationality

        ]);
  
          return (

        <section
            className="
            bg-[#050505]
            py-24
            "
        >

            <div
                className="
                mx-auto
                max-w-7xl
                px-6
                "
            >

                <div
                    className="
                    rounded-[40px]
                    border
                    border-[#d4af37]/10
                    bg-[#0b0b0b]
                    p-10
                    "
                >

                    <div
                        className="
                        grid
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                        "
                    >

                        <select
                            value={budget}
                            onChange={event =>
                                setBudget(
                                    event.target.value
                                )
                            }
                            className="
                            rounded-[24px]
                            bg-[#111111]
                            p-5
                            text-white
                            outline-none
                            "
                        >

                            {

                                budgets.map(

                                    item => (

                                        <option
                                            key={item}
                                        >
                                            {item}
                                        </option>

                                    )

                                )

                            }

                        </select>

                        <select
                            value={purpose}
                            onChange={event =>
                                setPurpose(
                                    event.target.value
                                )
                            }
                            className="
                            rounded-[24px]
                            bg-[#111111]
                            p-5
                            text-white
                            outline-none
                            "
                        >

                            {

                                purposes.map(

                                    item => (

                                        <option
                                            key={item}
                                        >
                                            {item}
                                        </option>

                                    )

                                )

                            }

                        </select>

                        <select
                            value={nationality}
                            onChange={event =>
                                setNationality(
                                    event.target.value
                                )
                            }
                            className="
                            rounded-[24px]
                            bg-[#111111]
                            p-5
                            text-white
                            outline-none
                            "
                        >

                            {

                                nationalities.map(

                                    item => (

                                        <option
                                            key={item}
                                        >
                                            {item}
                                        </option>

                                    )

                                )

                            }

                        </select>

                        <label
                            className="
                            flex
                            items-center
                            gap-4
                            rounded-[24px]
                            bg-[#111111]
                            p-5
                            text-white
                            "
                        >

                            <input
                                type="checkbox"
                                checked={family}
                                onChange={() =>
                                    setFamily(
                                        !family
                                    )
                                }
                                className="
                                h-5
                                w-5
                                accent-[#d4af37]
                                "
                            />

                            Moving With Family

                        </label>

                        <label
                            className="
                            flex
                            items-center
                            gap-4
                            rounded-[24px]
                            bg-[#111111]
                            p-5
                            text-white
                            "
                        >

                            <input
                                type="checkbox"
                                checked={airbnb}
                                onChange={() =>
                                    setAirbnb(
                                        !airbnb
                                    )
                                }
                                className="
                                h-5
                                w-5
                                accent-[#d4af37]
                                "
                            />

                            Interested In Airbnb

                        </label>

                    </div>

                </div>

                       {

                    recommendations.length > 0 ? (

                        <div
                            className="
                            mt-16
                            grid
                            gap-8
                            md:grid-cols-2
                            "
                        >

                            {

                                recommendations.map(

                                    project => (

                                        <div
                                            key={project.slug}
                                            className="
                                            overflow-hidden
                                            rounded-[36px]
                                            border
                                            border-[#d4af37]/10
                                            bg-[#0b0b0b]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-2
                                            hover:border-[#d4af37]/20
                                            "
                                        >

                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="
                                                h-[260px]
                                                w-full
                                                object-cover
                                                "
                                            />

                                            <div
                                                className="
                                                p-8
                                                "
                                            >

                                                <h3
                                                    className="
                                                    text-3xl
                                                    font-semibold
                                                    text-[#ff8c1a]
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
                                                    text-gray-400
                                                    "
                                                >
                                                    {project.description}
                                                </p>

                                                <Link
                                                    href={project.href}
                                                    className="
                                                    mt-8
                                                    inline-flex
                                                    rounded-full
                                                    border
                                                    border-[#d4af37]/20
                                                    px-8
                                                    py-4
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
                                                </Link>

                                            </div>

                                        </div>

                                    )

                                )

                            }

                        </div>

                    ) : (

                        <div
                            className="
                            mt-16
                            rounded-[36px]
                            border
                            border-[#d4af37]/10
                            bg-[#0b0b0b]
                            p-16
                            text-center
                            "
                        >

                            <h3
                                className="
                                text-4xl
                                font-light
                                text-[#ff8c1a]
                                "
                            >
                                No Matching Properties Found
                            </h3>

                            <p
                                className="
                                mx-auto
                                mt-8
                                max-w-2xl
                                text-lg
                                leading-8
                                text-gray-400
                                "
                            >
                                Try changing your preferences
                                or contact a SPEDO advisor
                                for personalized investment
                                recommendations.
                            </p>

                            <a
                                href="https://wa.me/201155807098"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                mt-10
                                inline-flex
                                rounded-full
                                bg-[#d4af37]
                                px-10
                                py-4
                                font-semibold
                                text-black
                                transition
                                hover:brightness-110
                                "
                            >
                                Talk To Advisor
                            </a>

                        </div>

                    )

                }

            </div>

        </section>

    );

}