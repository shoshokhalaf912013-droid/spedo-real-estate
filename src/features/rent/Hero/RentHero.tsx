export default function RentHero() {
    return (
        <section
            className="
                relative
                overflow-hidden
                py-32
                px-6
                lg:px-12
            "
        >
            {/* Background Glow */}

            <div
                className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-[900px]
                    h-[900px]
                    bg-[#D4AF37]/5
                    blur-[180px]
                    pointer-events-none
                "
            />

            <div className="relative max-w-7xl mx-auto">

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-20
                        items-center
                    "
                >
                    {/* LEFT CONTENT */}

                    <div>

                        <span
                            className="
                                inline-flex
                                items-center
                                px-5
                                py-2
                                rounded-full
                                bg-[#D4AF37]/10
                                border
                                border-[#D4AF37]/20
                                text-[#D4AF37]
                                text-sm
                                font-medium
                                mb-8
                            "
                        >
                            VERIFIED RED SEA RENTALS
                        </span>

                        <h1
                            className="
                                text-5xl
                                md:text-6xl
                                lg:text-7xl
                                font-bold
                                leading-tight
                            "
                        >
                            Find Your Perfect

                            <span className="block text-[#D4AF37]">
                                Rental Property
                            </span>
                        </h1>

                        <p
                            className="
                                mt-8
                                text-zinc-400
                                text-lg
                                lg:text-xl
                                leading-relaxed
                                max-w-2xl
                            "
                        >
                            Discover premium apartments,
                            villas, and investment-ready
                            rental opportunities across
                            Hurghada, El Gouna,
                            Makadi Bay, and
                            Sahl Hasheesh.
                        </p>

                        {/* TRUST BADGES */}

                        <div
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-4
                            "
                        >
                            <Badge text="Verified Properties" />
                            <Badge text="Airbnb Friendly" />
                            <Badge text="Flexible Rental Plans" />
                            <Badge text="Investment Ready" />
                        </div>

                        {/* CTA */}

                        <div
                            className="
                                mt-12
                                flex
                                flex-wrap
                                gap-4
                            "
                        >
                            <button
                                className="
                                    px-8
                                    py-4
                                    rounded-full
                                    bg-[#D4AF37]
                                    text-black
                                    font-semibold
                                    transition
                                    hover:scale-105
                                "
                            >
                                Explore Rentals
                            </button>

                            <button
                                className="
                                    px-8
                                    py-4
                                    rounded-full
                                    border
                                    border-zinc-700
                                    hover:border-[#D4AF37]
                                    transition
                                "
                            >
                                Talk To Advisor
                            </button>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div
                        className="
                            relative
                            h-[600px]
                            rounded-[40px]
                            overflow-hidden
                            border
                            border-white/10
                            bg-gradient-to-br
                            from-[#0B1220]
                            to-[#111827]
                        "
                    >
                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <span
                                className="
                                    text-zinc-500
                                    text-xl
                                "
                            >
                                Luxury Rental Showcase
                            </span>
                        </div>

                        {/* Floating Card */}

                        <div
                            className="
                                absolute
                                bottom-8
                                left-8
                                right-8
                                p-6
                                rounded-3xl
                                backdrop-blur-xl
                                bg-white/5
                                border
                                border-white/10
                            "
                        >
                            <div
                                className="
                                    flex
                                    justify-between
                                "
                            >
                                <div>
                                    <p className="text-zinc-400 text-sm">
                                        Average Yield
                                    </p>

                                    <h3
                                        className="
                                            text-3xl
                                            font-bold
                                            text-[#D4AF37]
                                        "
                                    >
                                        12%
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-zinc-400 text-sm">
                                        Verified Units
                                    </p>

                                    <h3
                                        className="
                                            text-3xl
                                            font-bold
                                            text-[#D4AF37]
                                        "
                                    >
                                        500+
                                    </h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* STATS */}

                <div
                    className="
                        grid
                        md:grid-cols-4
                        gap-6
                        mt-24
                    "
                >
                    <Stat
                        number="500+"
                        label="Verified Rentals"
                    />

                    <Stat
                        number="12%"
                        label="Average Rental Yield"
                    />

                    <Stat
                        number="5"
                        label="Premium Areas"
                    />

                    <Stat
                        number="24/7"
                        label="Advisor Support"
                    />
                </div>

            </div>
        </section>
    );
}

function Badge({
    text,
}: {
    text: string;
}) {
    return (
        <div
            className="
                px-4
                py-2
                rounded-full
                bg-white/5
                border
                border-white/10
                text-sm
                text-zinc-300
            "
        >
            ✓ {text}
        </div>
    );
}

function Stat({
    number,
    label,
}: {
    number: string;
    label: string;
}) {
    return (
        <div
            className="
                p-8
                rounded-3xl
                bg-white/[0.03]
                border
                border-white/5
            "
        >
            <h3
                className="
                    text-4xl
                    font-bold
                    text-[#D4AF37]
                "
            >
                {number}
            </h3>

            <p className="mt-3 text-zinc-400">
                {label}
            </p>
        </div>
    );
}