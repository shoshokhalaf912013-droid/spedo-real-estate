"use client";

const testimonials = [

    {
        name: "Michael Weber",

        country: "Germany",

        project: "Blue Crest",

        roi: "12% ROI",

        text:
            "SPEDO helped us find a perfect beachfront apartment with excellent rental returns and full transparency."
    },

    {
        name: "Sarah Johnson",

        country: "United Kingdom",

        project: "Mark Resort",

        roi: "11.5% ROI",

        text:
            "The entire rental process was smooth, professional and exceeded our expectations from start to finish."
    },

    {
        name: "Peter Novak",

        country: "Slovakia",

        project: "Marvento",

        roi: "13% ROI",

        text:
            "Excellent support team and verified properties. The Red Sea market has incredible long-term potential."
    }

];

export default function RentTestimonials() {

    return (

        <section
            className="
                bg-[#08101E]
                py-32
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                {/* HEADER */}

                <div
                    className="
                        mb-20
                        text-center
                    "
                >

                    <span
                        className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[5px]
                            text-[#D4AF37]
                        "
                    >
                        CLIENT EXPERIENCES
                    </span>

                    <h2
                        className="
                            mt-6
                            text-5xl
                            font-black
                            text-[#F97316]
                        "
                    >
                        Trusted By
                        International Clients
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-8
                            text-slate-300
                        "
                    >
                        Investors and tenants from
                        around the world trust SPEDO
                        to find premium rental
                        opportunities across the
                        Red Sea.
                    </p>

                </div>

                {/* CARDS */}

                <div
                    className="
                        grid
                        gap-8
                        lg:grid-cols-3
                    "
                >

                    {testimonials.map(
                        (item) => (

                            <div
                                key={item.name}
                                className="
                                    rounded-[36px]
                                    bg-[#F97316]
                                    p-10
                                    shadow-[0_20px_60px_rgba(249,115,22,0.25)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-3
                                "
                            >

                                {/* STARS */}

                                <div
                                    className="
                                        mb-8
                                        text-3xl
                                    "
                                >
                                    ★★★★★
                                </div>

                                {/* TEXT */}

                                <p
                                    className="
                                        min-h-[140px]
                                        text-lg
                                        leading-8
                                        text-[#111827]
                                    "
                                >
                                    "{item.text}"
                                </p>

                                {/* LINE */}

                                <div
                                    className="
                                        my-8
                                        h-[2px]
                                        w-full
                                        bg-[#08101E]
                                    "
                                />

                                {/* USER */}

                                <h3
                                    className="
                                        text-2xl
                                        font-black
                                        text-[#08101E]
                                    "
                                >
                                    {item.name}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        font-bold
                                        text-[#111827]
                                    "
                                >
                                    {item.country}
                                </p>

                                <p
                                    className="
                                        mt-4
                                        font-bold
                                        text-[#08101E]
                                    "
                                >
                                    {item.project}
                                </p>

                                {/* ROI */}

                                <div
                                    className="
                                        mt-8
                                        inline-flex
                                        rounded-full
                                        bg-[#08101E]
                                        px-6
                                        py-3
                                        font-black
                                        text-[#F97316]
                                    "
                                >
                                    {item.roi}
                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>

    );

}