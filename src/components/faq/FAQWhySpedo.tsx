"use client";

const features = [

    "Multi-language support",

    "European buyer assistance",

    "AI property advisor",

    "Investment comparison tools",

    "Property management services",

    "After-sales support",

    "Legal coordination",

    "Rental management"

];

export default function FAQWhySpedo() {

    return (

        <section
            className="
            bg-[#081010]
            py-28
            "
        >

            <div
                className="
                mx-auto
                max-w-7xl
                px-6
                grid
                lg:grid-cols-2
                gap-20
                items-center
                "
            >

                <div>

                    <span
                        className="
                        tracking-[4px]
                        text-[#d4af37]
                        uppercase
                        text-sm
                        "
                    >
                        Why SPEDO
                    </span>

                    <h2
                        className="
                        mt-6
                        text-6xl
                        font-light
                        leading-none
                        text-white
                        "
                    >
                        Why International
                        Buyers Choose
                        SPEDO
                    </h2>

                    <p
                        className="
                        mt-8
                        text-lg
                        text-gray-300
                        "
                    >
                        A modern real estate
                        platform designed for
                        global investors looking
                        for secure opportunities
                        in the Red Sea region.
                    </p>

                </div>

                <div
                    className="
                    grid
                    md:grid-cols-2
                    gap-6
                    "
                >

                    {

                        features.map(

                            feature => (

                                <div
                                    key={feature}
                                    className="
                                    rounded-[28px]
                                    border
                                    border-[#d4af37]/20
                                    bg-white/5
                                    p-6
                                    text-white
                                    "
                                >

                                    <div
                                        className="
                                        mb-4
                                        text-3xl
                                        text-[#d4af37]
                                        "
                                    >
                                        ✓
                                    </div>

                                    <div
                                        className="
                                        text-lg
                                        "
                                    >
                                        {feature}
                                    </div>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

}