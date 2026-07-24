import Link from "next/link";

export default function RentHero() {

    return (

        <section
            className="
            relative
            overflow-hidden
            border-b
            border-white/10
            bg-[#05070D]
            py-32
            "
        >

            <div
                className="
                absolute
                inset-0
                opacity-10
                "
                style={{
                    backgroundImage:
                        "radial-gradient(circle at top right, #F97316 0%, transparent 40%)"
                }}
            />

            <div
                className="
                relative
                z-10
                mx-auto
                max-w-7xl
                px-6
                "
            >

                <div
                    className="
                    max-w-4xl
                    "
                >

                    <span
                        className="
                        inline-block
                        rounded-full
                        border
                        border-[#F97316]/30
                        bg-[#F97316]/10
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                        text-[#F97316]
                        "
                    >
                        Red Sea Rental Properties
                    </span>

                    <h1
                        className="
                        mt-10
                        font-playfair
                        text-5xl
                        leading-tight
                        text-white
                        md:text-7xl
                        "
                    >
                        Find Premium
                        Rental Properties
                        In Hurghada
                        & The Red Sea
                    </h1>

                    <p
                        className="
                        mt-10
                        max-w-3xl
                        text-xl
                        leading-9
                        text-slate-300
                        "
                    >
                        Discover luxury apartments,
                        holiday homes, family residences
                        and commercial rental opportunities
                        across Hurghada and the Red Sea
                        with verified SPEDO listings.
                    </p>

                    <div
                        className="
                        mt-12
                        flex
                        flex-wrap
                        gap-5
                        "
                    >

                        <Link
                            href="/projects"
                            className="
                            rounded-2xl
                            bg-[#F97316]
                            px-10
                            py-5
                            font-bold
                            text-white
                            transition
                            hover:brightness-110
                            "
                        >
                            Explore Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="
                            rounded-2xl
                            border
                            border-white/20
                            bg-white/5
                            px-10
                            py-5
                            font-bold
                            text-white
                            transition
                            hover:bg-white/10
                            "
                        >
                            Talk To Advisor
                        </Link>

                    </div>

                </div>

            </div>

        </section>

    );

}