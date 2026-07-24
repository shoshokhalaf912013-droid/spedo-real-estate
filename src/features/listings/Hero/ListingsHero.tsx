"use client";

interface ListingsHeroProps {

    title?: string;

    subtitle?: string;

}

export default function ListingsHero({

    title = "Premium Property Listings",

    subtitle =
        "Explore residential and commercial properties for rent, cash sale, and installment plans across the Red Sea.",

}: ListingsHeroProps) {

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-[#08101E]
                py-32
            "
        >

            {/* BACKGROUND GLOW */}

            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    h-[900px]
                    w-[900px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#F97316]/10
                    blur-[180px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-6
                    text-center
                "
            >

                {/* BADGE */}

                <span
                    className="
                        inline-flex
                        rounded-full
                        border
                        border-[#D4AF37]/30
                        bg-[#D4AF37]/10
                        px-6
                        py-3
                        text-sm
                        font-bold
                        uppercase
                        tracking-[4px]
                        text-[#D4AF37]
                    "
                >
                    SPEDO LISTINGS
                </span>

                {/* TITLE */}

                <h1
                    className="
                        mt-10
                        text-5xl
                        font-black
                        leading-tight
                        text-white
                        lg:text-7xl
                    "
                >
                    {title}
                </h1>

                {/* SUBTITLE */}

                <p
                    className="
                        mx-auto
                        mt-10
                        max-w-4xl
                        text-xl
                        leading-9
                        text-slate-300
                    "
                >
                    {subtitle}
                </p>

                {/* STATS */}

                <div
                    className="
                        mt-20
                        grid
                        gap-8
                        md:grid-cols-3
                    "
                >

                    <div
                        className="
                            rounded-[32px]
                            bg-[#F97316]
                            p-10
                        "
                    >

                        <h3
                            className="
                                !text-[#08101E]
                                text-5xl
                                font-black
                            "
                        >
                            Residential
                        </h3>

                        <p
                            className="
                                mt-4
                                text-lg
                                font-semibold
                                text-[#111827]
                            "
                        >
                            Apartments, Villas,
                            Chalets, Studios,
                            Penthouses and more.
                        </p>

                    </div>

                    <div
                        className="
                            rounded-[32px]
                            bg-[#D4AF37]
                            p-10
                        "
                    >

                        <h3
                            className="
                                !text-[#08101E]
                                text-5xl
                                font-black
                            "
                        >
                            Commercial
                        </h3>

                        <p
                            className="
                                mt-4
                                text-lg
                                font-semibold
                                text-[#111827]
                            "
                        >
                            Offices, Shops,
                            Clinics, Warehouses,
                            Hotels and Land.
                        </p>

                    </div>

                    <div
                        className="
                            rounded-[32px]
                            bg-[#F97316]
                            p-10
                        "
                    >

                        <h3
                            className="
                                !text-[#08101E]
                                text-5xl
                                font-black
                            "
                        >
                            Flexible Deals
                        </h3>

                        <p
                            className="
                                mt-4
                                text-lg
                                font-semibold
                                text-[#111827]
                            "
                        >
                            Rent, Cash Purchase,
                            and Installment Plans
                            in one platform.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}