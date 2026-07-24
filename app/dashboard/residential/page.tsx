"use client";

import Link from "next/link";

const RESIDENTIAL_ACTIONS = [
    {
        title: "Add Residential Property",
        description:
            "Create a daily residential listing with property details, location, images, videos, floor plans, and SEO information.",
        href: "/dashboard/property/new",
        buttonLabel: "Add New Property",
        badge: "Main Residential Form",
    },
    {
        title: "Residential Sale",
        description:
            "Create and manage residential properties offered for sale.",
        href: "/dashboard/residential/sale",
        buttonLabel: "Open Sale Form",
        badge: "For Sale",
    },
    {
        title: "Residential Rent",
        description:
            "Create and manage residential properties offered for rent.",
        href: "/dashboard/residential/rent",
        buttonLabel: "Open Rent Form",
        badge: "For Rent",
    },
];

export default function ResidentialPage() {
    return (
        <main
            className="
                min-h-screen
                bg-[#030712]
                px-6
                py-28
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >
                {/* Page Header */}

                <section
                    className="
                        mb-10
                        rounded-3xl
                        border
                        border-white/10
                        bg-[#0F172A]
                        p-8
                        shadow-2xl
                        shadow-black/20
                    "
                >
                    <p
                        className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#D4AF37]
                        "
                    >
                        Dashboard / Residential
                    </p>

                    <h1
                        className="
                            mt-3
                            text-4xl
                            font-black
                            text-[#F97316]
                            md:text-5xl
                        "
                    >
                        Residential Properties
                    </h1>

                    <p
                        className="
                            mt-4
                            max-w-3xl
                            text-base
                            leading-8
                            text-slate-300
                        "
                    >
                        Add and manage residential properties listed
                        independently from SPEDO projects.
                    </p>
                </section>

                {/* Main Add Property Action */}

                <section
                    className="
                        mb-8
                        overflow-hidden
                        rounded-3xl
                        border
                        border-[#F97316]/30
                        bg-gradient-to-br
                        from-[#171E2F]
                        to-[#0F172A]
                        p-8
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-8
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >
                        <div className="max-w-3xl">
                            <span
                                className="
                                    inline-flex
                                    rounded-full
                                    border
                                    border-[#D4AF37]/30
                                    bg-[#D4AF37]/10
                                    px-4
                                    py-2
                                    text-xs
                                    font-black
                                    uppercase
                                    tracking-[0.18em]
                                    text-[#D4AF37]
                                "
                            >
                                Daily Residential Listings
                            </span>

                            <h2
                                className="
                                    mt-5
                                    text-3xl
                                    font-black
                                    text-[#F97316]
                                "
                            >
                                Add a New Residential Property
                            </h2>

                            <p
                                className="
                                    mt-4
                                    leading-8
                                    text-slate-300
                                "
                            >
                                Use the complete residential property
                                builder to enter property information,
                                specifications, location, gallery,
                                videos, floor plans, dynamic sections,
                                and search engine data.
                            </p>
                        </div>

                        <Link
                            href="/dashboard/property/new"
                            className="
                                inline-flex
                                min-h-14
                                shrink-0
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#F97316]
                                px-8
                                py-4
                                text-base
                                font-black
                                text-black
                                transition
                                hover:bg-[#FB923C]
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#F97316]
                                focus:ring-offset-2
                                focus:ring-offset-[#0F172A]
                            "
                        >
                            Add Residential Property
                        </Link>
                    </div>
                </section>

                {/* Residential Sections */}

                <section
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {RESIDENTIAL_ACTIONS.map((action, index) => (
                        <article
                            key={action.href}
                            className={`
                                flex
                                min-h-[290px]
                                flex-col
                                rounded-3xl
                                border
                                p-7
                                transition
                                hover:-translate-y-1

                                ${
                                    index === 0
                                        ? "border-[#F97316]/30 bg-[#111827]"
                                        : "border-white/10 bg-[#0F172A]"
                                }
                            `}
                        >
                            <span
                                className="
                                    w-fit
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#D4AF37]
                                "
                            >
                                {action.badge}
                            </span>

                            <h2
                                className="
                                    mt-5
                                    text-2xl
                                    font-black
                                    text-[#F97316]
                                "
                            >
                                {action.title}
                            </h2>

                            <p
                                className="
                                    mt-3
                                    flex-1
                                    leading-7
                                    text-slate-400
                                "
                            >
                                {action.description}
                            </p>

                            <Link
                                href={action.href}
                                className="
                                    mt-7
                                    inline-flex
                                    min-h-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F97316]/40
                                    px-5
                                    py-3
                                    font-black
                                    text-[#F97316]
                                    transition
                                    hover:border-[#F97316]
                                    hover:bg-[#F97316]
                                    hover:text-black
                                "
                            >
                                {action.buttonLabel}
                            </Link>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}