export default function BuyCTA() {
    return (
        <section className="py-32 px-6 lg:px-12">

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

                    {/* Background Glow */}

                    <div
                        className="
                            absolute
                            top-1/2
                            left-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-[600px]
                            h-[600px]
                            bg-[#D4AF37]/10
                            blur-[180px]
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
                                font-medium
                            "
                        >
                            Start Investing Today
                        </span>

                        <h2
                            className="
                                mt-6
                                text-4xl
                                lg:text-6xl
                                font-bold
                                leading-tight
                            "
                        >
                            Build Your Future In

                            <span className="block text-[#D4AF37]">
                                The Red Sea
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
                            Join investors from around the world
                            and discover verified opportunities
                            backed by trusted developers,
                            transparent pricing, and strong
                            long-term growth potential.
                        </p>

                        <div
                            className="
                                mt-12
                                flex
                                flex-wrap
                                justify-center
                                gap-6
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
                                Explore Properties
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
                                Talk To Investment Advisor
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}