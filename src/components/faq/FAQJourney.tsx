"use client";

const steps = [

    {
        number: "01",
        title: "Choose The Right Area",
        text: "Compare Hurghada, El Gouna, Makadi, Sahl Hasheesh and Soma Bay based on lifestyle and investment goals."
    },

    {
        number: "02",
        title: "Compare Projects",
        text: "Review developers, payment plans, facilities, delivery schedules and projected returns."
    },

    {
        number: "03",
        title: "Understand Legal Steps",
        text: "Learn ownership rules, contracts, registrations and legal procedures for foreign buyers."
    },

    {
        number: "04",
        title: "Plan After Sales",
        text: "Prepare rental management, furnishing, maintenance and long-term support services."
    }

];

export default function FAQJourney() {

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#050505]
            py-28
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_30%)]
                "
            />

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.04),transparent_40%)]
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
                    mb-20
                    grid
                    items-center
                    gap-16
                    lg:grid-cols-2
                    "
                >

                    <div>

                        <span
                            className="
                            text-xs
                            uppercase
                            tracking-[4px]
                            text-[#d4af37]
                            "
                        >
                            Investment Journey
                        </span>

                        <h2
                            className="
                            mt-6
                            max-w-[700px]
                            text-5xl
                            font-light
                            leading-[0.92]
                            tracking-[-0.04em]
                            text-white
                            md:text-6xl
                            "
                        >
                            Use The FAQ
                            As Your
                            Investment
                            Roadmap
                        </h2>

                        <div
                            className="
                            mt-8
                            h-px
                            w-32
                            bg-gradient-to-r
                            from-[#d4af37]
                            to-transparent
                            "
                        />

                    </div>

                    <p
                        className="
                        max-w-xl
                        text-lg
                        leading-8
                        text-gray-400
                        "
                    >
                        Every successful investment
                        starts with understanding
                        locations, projects, legal
                        procedures and after-sales
                        services before making
                        a reservation.
                    </p>

                </div>

                <div
                    className="
                    grid
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-4
                    "
                >

                    {

                        steps.map(

                            step => (

                                <div
                                    key={step.number}
                                    className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[36px]
                                    border
                                    border-[#d4af37]/15
                                    bg-[#0b0907]/90
                                    p-9
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-500
                                    hover:-translate-y-3
                                    hover:scale-[1.02]
                                    hover:border-[#d4af37]/40
                                    hover:shadow-[0_20px_60px_rgba(212,175,55,.18)]
                                    "
                                >

                                    <div
                                        className="
                                        absolute
                                        inset-0
                                        opacity-0
                                        transition
                                        duration-500
                                        group-hover:opacity-100
                                        bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,.08),transparent_50%)]
                                        "
                                    />

                                    <div
                                        className="
                                        relative
                                        mb-8
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#d4af37]
                                        text-lg
                                        font-bold
                                        text-black
                                        shadow-[0_0_30px_rgba(212,175,55,.25)]
                                        "
                                    >
                                        {step.number}
                                    </div>

                                    <div
                                        className="
                                        relative
                                        h-px
                                        w-20
                                        bg-gradient-to-r
                                        from-[#d4af37]
                                        to-transparent
                                        "
                                    />

                                    <h3
                                        className="
                                        relative
                                        mt-8
                                        text-3xl
                                        font-light
                                        leading-tight
                                        text-white
                                        transition
                                        duration-300
                                        group-hover:text-[#f4e7c0]
                                        "
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="
                                        relative
                                        mt-6
                                        leading-8
                                        text-gray-400
                                        transition
                                        duration-300
                                        group-hover:text-gray-300
                                        "
                                    >
                                        {step.text}
                                    </p>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

}