"use client";

const nationalities = [

    "Germany",
    "Poland",
    "United Kingdom",
    "Italy",
    "Russia",
    "Turkey",
    "Spain",
    "Slovakia",
    "Other"

];

const budgets = [

    "Under €50K",
    "€50K - €100K",
    "€100K - €200K",
    "€200K - €500K",
    "Above €500K"

];

const areas = [

    "Hurghada",
    "El Gouna",
    "Sahl Hasheesh",
    "Makadi Bay",
    "Soma Bay",
    "Need Advice"

];

export default function FAQContact() {

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#020202]
	    pt-20
            pb-8
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.04),transparent_40%)]
                "
            />

            <div
                className="
                relative
                mx-auto
                max-w-6xl
                px-6
                "
            >

                <div
                    className="
                    overflow-hidden
                    rounded-[42px]
                    border
                    border-[#d4af37]/10
                    bg-[#111111]
                    p-12
                    shadow-[0_20px_80px_rgba(0,0,0,.45)]
                    "
                >

                    <div
                        className="
                        mb-16
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
                                Free Consultation
                            </span>

                            <h2
                                className="
                                mt-6
                                text-5xl
                                font-light
                                leading-[0.92]
                                tracking-[-0.04em]
                                text-[#ff8c1a]
                                md:text-6xl
                                "
                            >
                                Talk To A
                                Red Sea
                                Investment
                                Advisor
                            </h2>

                            <p
                                className="
                                mt-8
                                max-w-xl
                                text-lg
                                leading-8
                                text-gray-400
                                "
                            >
                                Get personalized
                                investment guidance,
                                legal support and
                                project recommendations
                                from experienced local
                                professionals.
                            </p>

                        </div>

                        <div
                            className="
                            space-y-6
                            "
                        >

                            <div
                                className="
                                flex
                                items-center
                                gap-4
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

                                <span className="text-gray-300">
                                    Free Consultation
                                </span>
                            </div>

                            <div
                                className="
                                flex
                                items-center
                                gap-4
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

                                <span className="text-gray-300">
                                    Verified Developers
                                </span>
                            </div>

                            <div
                                className="
                                flex
                                items-center
                                gap-4
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

                                <span className="text-gray-300">
                                    Legal Guidance
                                </span>
                            </div>

                            <div
                                className="
                                flex
                                items-center
                                gap-4
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

                                <span className="text-gray-300">
                                    After Sales Support
                                </span>
                            </div>

                        </div>

                    </div>
			                    <form
                        className="
                        grid
                        gap-6
                        md:grid-cols-2
                        "
                    >

                        <input
                            placeholder="Full Name"
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#171717]
                            px-6
                            py-4
                            text-white
                            outline-none
                            transition
                            focus:border-[#d4af37]/30
                            "
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#171717]
                            px-6
                            py-4
                            text-white
                            outline-none
                            transition
                            focus:border-[#d4af37]/30
                            "
                        />

                        <select
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#171717]
                            px-6
                            py-4
                            text-gray-300
                            outline-none
                            transition
                            focus:border-[#d4af37]/30
                            "
                        >

                            <option>
                                Nationality
                            </option>

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

                        <select
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#171717]
                            px-6
                            py-4
                            text-gray-300
                            outline-none
                            transition
                            focus:border-[#d4af37]/30
                            "
                        >

                            <option>
                                Investment Budget
                            </option>

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
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#171717]
                            px-6
                            py-4
                            text-gray-300
                            outline-none
                            transition
                            focus:border-[#d4af37]/30
                            "
                        >

                            <option>
                                Preferred Area
                            </option>

                            {

                                areas.map(

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

                        <input
                            placeholder="WhatsApp Number"
                            className="
                            rounded-2xl
                            border
                            border-[#d4af37]/10
                            bg-[#171717]
                            px-6
                            py-4
                            text-white
                            outline-none
                            transition
                            focus:border-[#d4af37]/30
                            "
                        />

                        <textarea
                            rows={7}
                            placeholder="Tell us about your investment goals..."
                            className="
                            md:col-span-2
                            rounded-[28px]
                            border
                            border-[#d4af37]/10
                            bg-[#171717]
                            p-6
                            text-white
                            outline-none
                            transition
                            focus:border-[#d4af37]/30
                            "
                        />

                        <button
                            className="
                            mt-4
                            w-fit
                            rounded-full
                            bg-[#d4af37]
                            px-10
                            py-4
                            font-semibold
                            text-black
                            transition
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_0_30px_rgba(212,175,55,.25)]
                            "
                        >
                            BOOK FREE CONSULTATION
                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}