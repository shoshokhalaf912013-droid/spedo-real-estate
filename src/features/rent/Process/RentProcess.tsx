"use client";

const steps = [
    {
        number: "01",
        title: "Choose Property",
        description:
            "Browse verified apartments, villas and luxury rentals across the Red Sea.",
        icon: "🏡",
    },

    {
        number: "02",
        title: "Book A Viewing",
        description:
            "Schedule an online or in-person tour with one of our local advisors.",
        icon: "📅",
    },

    {
        number: "03",
        title: "Reserve Your Unit",
        description:
            "Complete the reservation process quickly and securely with full transparency.",
        icon: "🔑",
    },

    {
        number: "04",
        title: "Move In",
        description:
            "Enjoy your new Red Sea lifestyle with premium support from SPEDO.",
        icon: "🌴",
    },
];

export default function RentProcess() {

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
                        RENTAL PROCESS
                    </span>

                    <h2
                        className="
                            mt-6
                            text-5xl
                            font-black
                            text-[#F97316]
                        "
                    >
                        Rent In Four
                        Simple Steps
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
                        From discovering your ideal
                        property to moving in, our
                        advisors guide you through
                        every step of the journey.
                    </p>

                </div>

                {/* TIMELINE */}

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {steps.map((step) => (

                        <div
                            key={step.number}
                            className="
                                relative
                                overflow-hidden
                                rounded-[36px]
                                bg-[#F97316]
                                p-10
                                shadow-[0_20px_60px_rgba(249,115,22,0.25)]
                                transition-all
                                duration-500
                                hover:-translate-y-3
                            "
                        >

                            {/* NUMBER */}

                            <div
                                className="
                                    mb-8
                                    inline-flex
                                    rounded-full
                                    bg-[#08101E]
                                    px-6
                                    py-3
                                    text-xl
                                    font-black
                                    text-[#F97316]
                                "
                            >
                                {step.number}
                            </div>

                            {/* ICON */}

                            <div
                                className="
                                    mb-8
                                    text-6xl
                                "
                            >
                                {step.icon}
                            </div>

                            {/* TITLE */}

                            <h3
                                className="
                                    text-3xl
                                    font-black
                                    text-[#08101E]
                                "
                            >
                                {step.title}
                            </h3>

                            {/* LINE */}

                            <div
                                className="
                                    my-6
                                    h-1
                                    w-20
                                    rounded-full
                                    bg-[#08101E]
                                "
                            />

                            {/* TEXT */}

                            <p
                                className="
                                    text-base
                                    leading-8
                                    text-[#111827]
                                "
                            >
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}