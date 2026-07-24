export default function RentCTA() {
    return (
        <section className="py-32 px-6">

            <div className="max-w-7xl mx-auto">

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[40px]
                        border
                        border-[#D4AF37]/20
                        bg-gradient-to-br
                        from-[#111827]
                        via-[#0B1220]
                        to-[#05070D]
                        p-16
                        text-center
                    "
                >

                    {/* Glow Effect */}

                    <div
                        className="
                            absolute
                            top-1/2
                            left-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-[500px]
                            h-[500px]
                            bg-[#D4AF37]/10
                            blur-[140px]
                            pointer-events-none
                        "
                    />

                    <div className="relative z-10">

                        <span
                            className="
                                text-[#D4AF37]
                                uppercase
                                tracking-[4px]
                                text-sm
                            "
                        >
                            Start Your Journey
                        </span>

                        <h2
                            className="
                                mt-6
                                text-4xl
                                lg:text-6xl
                                font-bold
                            "
                        >
                            Find Your Perfect
                            <span className="block text-[#D4AF37]">
                                Red Sea Rental
                            </span>
                        </h2>

                        <p
                            className="
                                mt-8
                                max-w-3xl
                                mx-auto
                                text-zinc-400
                                text-lg
                                leading-8
                            "
                        >
                            Connect with SPEDO advisors and
                            discover verified rental opportunities
                            tailored to your lifestyle and
                            investment goals.
                        </p>

                        <div
                            className="
                                mt-12
                                flex
                                justify-center
                                gap-6
                                flex-wrap
                            "
                        >

                            <button
                                className="
                                    h-14
                                    px-10
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
                                    h-14
                                    px-10
                                    rounded-full
                                    border
                                    border-white/10
                                    hover:border-[#D4AF37]/50
                                    transition
                                "
                            >
                                Talk To Advisor
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}