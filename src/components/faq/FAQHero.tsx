"use client";

export default function FAQHero() {

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-black
            pt-40
            pb-28
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[url('/projects/faq/hero.jpg')]
                bg-cover
                bg-center
                scale-105
                "
            />

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(185,135,85,0.22)_0%,rgba(110,70,40,0.32)_45%,rgba(15,10,8,0.22)_100%)]
                "
            />

            <div
                className="
                absolute
                inset-0
                bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(40,25,15,0.28)_45%,rgba(90,60,35,0.10)_100%)]
                "
            />

            <div
                className="
                absolute
                inset-0
                bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(25,15,10,0.45)_40%,rgba(60,35,20,0.15)_100%)]
                "
            />

            <div
                className="
                relative
                mx-auto
                max-w-7xl
                px-6
                grid
                items-center
                gap-20
                lg:grid-cols-2
                "
            >

                <div>

                    <div
                        className="
                        mb-6
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-[#d4af37]/20
                        bg-white/5
                        px-5
                        py-2
                        text-xs
                        uppercase
                        tracking-[4px]
                        text-[#d4af37]
                        backdrop-blur-xl
                        "
                    >
                        SPEDO INVESTMENT KNOWLEDGE CENTER
                    </div>

                    <h1
                        className="
                        max-w-3xl
                        text-5xl
                        font-light
                        leading-[0.92]
                        text-white
                        md:text-7xl
                        xl:text-8xl
                        "
                    >
                        Everything
                        International
                        Investors Need
                        Before Buying
                        Property In The

                        <span className="block text-[#d4af37]">
                            Red Sea
                        </span>

                    </h1>

                    <p
                        className="
                        mt-8
                        max-w-2xl
                        text-lg
                        leading-8
                        text-gray-300
                        "
                    >
                        Discover trusted answers about
                        ownership, residency, investment
                        returns, legal procedures,
                        after-sales services and rental
                        opportunities across Hurghada,
                        El Gouna, Makadi and the Red Sea.
                    </p>

                    <div
                        className="
                        mt-10
                        flex
                        flex-wrap
                        gap-4
                        "
                    >

                        <button
                            className="
                            rounded-full
                            bg-[#d4af37]
                            px-8
                            py-4
                            font-semibold
                            text-black
                            transition
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_0_40px_rgba(212,175,55,.35)]
                            "
                        >
                            Explore Questions
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            border-white/15
                            bg-white/5
                            px-8
                            py-4
                            text-white
                            backdrop-blur-xl
                            transition
                            duration-300
                            hover:border-[#d4af37]/40
                            hover:bg-white/10
                            "
                        >
                            Ask SPEDO AI
                        </button>

                    </div>

                    <div
                        className="
                        mt-14
                        grid
                        grid-cols-2
                        gap-4
                        md:grid-cols-4
                        "
                    >

                        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                            <div className="text-4xl font-light text-[#d4af37]">
                                60+
                            </div>

                            <div className="mt-3 text-sm text-gray-300">
                                Investor Questions
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                            <div className="text-4xl font-light text-[#d4af37]">
                                10
                            </div>

                            <div className="mt-3 text-sm text-gray-300">
                                Knowledge Categories
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                            <div className="text-4xl font-light text-[#d4af37]">
                                AI
                            </div>

                            <div className="mt-3 text-sm text-gray-300">
                                Smart Assistance
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                            <div className="text-4xl font-light text-[#d4af37]">
                                24/7
                            </div>

                            <div className="mt-3 text-sm text-gray-300">
                                Investor Support
                            </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE FORM */}

                <div
                    className="
                    rounded-[40px]
                    border
                    border-[#d4af37]/15
                    bg-[#120d09]/95
                    p-10
                    backdrop-blur-3xl
                    shadow-[0_30px_80px_rgba(0,0,0,0.65)]
                    "
                >

                    <div
                        className="
                        mb-8
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <div
                            className="
                            h-3
                            w-3
                            rounded-full
                            bg-[#d4af37]
                            "
                        />

                        <span
                            className="
                            text-sm
                            uppercase
                            tracking-[3px]
                            text-[#d4af37]
                            "
                        >
                            ASK AN ADVISOR
                        </span>

                    </div>

                    <h2
                        className="
                        text-5xl
                        font-light
                        leading-tight
                        text-white
                        "
                    >
                        Ask Your
                        Investment
                        Question
                    </h2>

                    <p
                        className="
                        mt-5
                        text-gray-300
                        leading-7
                        "
                    >
                        Connect with SPEDO advisors
                        and receive guidance about
                        legal ownership, ROI, residency,
                        rentals and after-sales support.
                    </p>

                    <div
                        className="
                        mt-10
                        grid
                        gap-5
                        "
                    >
		                        <input
                            placeholder="Full Name"
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#1b140f]
                            px-6
                            py-4
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            transition
                            duration-300
                            focus:border-[#d4af37]/50
                            focus:bg-[#241a13]
                            "
                        />

                        <input
                            placeholder="WhatsApp Number"
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#1b140f]
                            px-6
                            py-4
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            transition
                            duration-300
                            focus:border-[#d4af37]/50
                            focus:bg-[#241a13]
                            "
                        />

                        <textarea
                            rows={5}
                            placeholder="Write your investment question..."
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#1b140f]
                            p-6
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            transition
                            duration-300
                            focus:border-[#d4af37]/50
                            focus:bg-[#241a13]
                            "
                        />

                        <button
                            className="
                            rounded-full
                            bg-[#d4af37]
                            py-4
                            font-semibold
                            text-black
                            transition
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-[0_0_40px_rgba(212,175,55,.35)]
                            "
                        >
                            SEND QUESTION
                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}