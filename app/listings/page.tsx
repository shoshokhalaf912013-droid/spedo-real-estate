import Link from "next/link";

export default function ListingsPage() {

    return (

        <main
            className="
                min-h-screen
                bg-[#08101E]
                pt-32
                pb-20
            "
        >

            <section
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    text-center
                "
            >

                <span
                    className="
                        inline-block
                        rounded-full
                        border
                        border-[#D4AF37]/30
                        bg-[#D4AF37]/10
                        px-8
                        py-3
                        text-sm
                        font-bold
                        uppercase
                        tracking-[6px]
                        text-[#D4AF37]
                    "
                >
                    SPEDO PROPERTY HUB
                </span>

                <h1
                    className="
                        mt-8
                        text-7xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Choose Your Property Journey
                </h1>

                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-4xl
                        text-2xl
                        text-slate-300
                    "
                >
                    Select whether you want to buy
                    or rent properties, then choose
                    residential or commercial units.
                </p>

            </section>

            {/* MAIN CARDS */}

            <section
                className="
                    mx-auto
                    mt-20
                    grid
                    max-w-7xl
                    gap-10
                    px-6
                    md:grid-cols-2
                "
            >

                {/* SALE */}

                <Link
                    href="/listings/sale"
                    className="
                        group
                        rounded-[50px]
                        bg-[#F97316]
                        p-14
                        text-center
                        transition-all
                        duration-500
                        hover:-translate-y-3
                    "
                >

                    <h2
                        className="
                            text-6xl
                            font-black
                            text-[#08101E]
                        "
                    >
                        SALE
                    </h2>

                    <p
                        className="
                            mt-8
                            text-2xl
                            font-bold
                            text-[#08101E]
                        "
                    >
                        Apartments, Villas, Chalets,
                        Commercial Units & Investment
                        Opportunities
                    </p>

                    <div
                        className="
                            mt-10
                            inline-flex
                            rounded-full
                            bg-[#08101E]
                            px-10
                            py-4
                            text-lg
                            font-black
                            text-white
                        "
                    >
                        View Sale Properties →
                    </div>

                </Link>

                {/* RENT */}

                <Link
                    href="/listings/rent"
                    className="
                        group
                        rounded-[50px]
                        bg-[#D4AF37]
                        p-14
                        text-center
                        transition-all
                        duration-500
                        hover:-translate-y-3
                    "
                >

                    <h2
                        className="
                            text-6xl
                            font-black
                            text-[#08101E]
                        "
                    >
                        RENT
                    </h2>

                    <p
                        className="
                            mt-8
                            text-2xl
                            font-bold
                            text-[#08101E]
                        "
                    >
                        Long-Term, Short-Term,
                        Furnished & Commercial Rentals
                        Across The Red Sea
                    </p>

                    <div
                        className="
                            mt-10
                            inline-flex
                            rounded-full
                            bg-[#08101E]
                            px-10
                            py-4
                            text-lg
                            font-black
                            text-white
                        "
                    >
                        View Rental Properties →
                    </div>

                </Link>

            </section>

        </main>

    );

}