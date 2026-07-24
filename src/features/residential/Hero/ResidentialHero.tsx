import Link from "next/link";

export default function ResidentialHero() {

    return (

        <section
            className="
                relative
                overflow-hidden
                pt-32
                pb-24
            "
        >

            <div
                className="
                    absolute
                    inset-0
                    bg-[url('/images/residential/residential-hero.jpg')]
                    bg-cover
                    bg-center
                    opacity-20
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-[#020817]/70
                    via-[#020817]/90
                    to-[#020817]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    px-6
                "
            >

                <p
                    className="
                        mb-6
                        inline-block
                        rounded-full
                        border
                        border-[#D4AF37]/30
                        bg-[#D4AF37]/10
                        px-5
                        py-2
                        text-sm
                        font-semibold
                        text-[#D4AF37]
                    "
                >
                    SPEDO Residential
                </p>

                <h1
                    className="
                        max-w-4xl
                        text-4xl
                        font-bold
                        leading-tight
                        text-white
                        sm:text-5xl
                        lg:text-6xl
                    "
                >
                    Discover Luxury Homes Across Egypt&apos;s Red Sea Coast
                </h1>

                <p
                    className="
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-slate-300
                        lg:text-xl
                    "
                >
                    Explore premium apartments, villas, chalets and exclusive
                    residential communities in Hurghada, El Gouna, Sahl Hasheesh,
                    Makadi Bay and beyond.
                </p>

                <div
                    className="
                        mt-10
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                    "
                >

                    <Link
                        href="/residential/sale"
                        className="
                            rounded-full
                            bg-[#D4AF37]
                            px-8
                            py-4
                            text-center
                            font-bold
                            text-black
                            transition
                            hover:scale-105
                            active:scale-95
                        "
                    >
                        Buy Property
                    </Link>

                    <Link
                        href="/residential/rent"
                        className="
                            rounded-full
                            border
                            border-[#D4AF37]
                            px-8
                            py-4
                            text-center
                            font-bold
                            text-[#D4AF37]
                            transition
                            hover:bg-[#D4AF37]
                            hover:text-black
                            active:scale-95
                        "
                    >
                        Rent Property
                    </Link>

                </div>

            </div>

        </section>

    );

}