export default function RentCalculator() {
    return (
        <section className="py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <span
                        className="
                            text-[#D4AF37]
                            uppercase
                            tracking-[3px]
                            text-sm
                        "
                    >
                        Rental Calculator
                    </span>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            font-bold
                        "
                    >
                        Estimate Your Rental Income
                    </h2>

                    <p
                        className="
                            mt-6
                            text-zinc-400
                            max-w-3xl
                            mx-auto
                        "
                    >
                        Calculate potential returns from
                        short-term and long-term rentals
                        across the Red Sea.
                    </p>

                </div>

                <div
                    className="
                        max-w-4xl
                        mx-auto
                        p-10
                        rounded-[32px]
                        bg-white/[0.03]
                        border
                        border-white/10
                    "
                >

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            gap-6
                        "
                    >

                        <input
                            placeholder="Property Price (€)"
                            className="
                                h-14
                                px-5
                                rounded-2xl
                                bg-zinc-900
                                border
                                border-white/10
                                outline-none
                            "
                        />

                        <input
                            placeholder="Monthly Rental Income (€)"
                            className="
                                h-14
                                px-5
                                rounded-2xl
                                bg-zinc-900
                                border
                                border-white/10
                                outline-none
                            "
                        />

                    </div>

                    <button
                        className="
                            mt-8
                            w-full
                            h-14
                            rounded-2xl
                            bg-[#D4AF37]
                            text-black
                            font-semibold
                        "
                    >
                        Calculate ROI
                    </button>

                    <div
                        className="
                            mt-8
                            p-6
                            rounded-2xl
                            bg-zinc-900
                            border
                            border-white/10
                            text-center
                        "
                    >

                        <p className="text-zinc-400">
                            Estimated Annual Yield
                        </p>

                        <h3
                            className="
                                mt-3
                                text-5xl
                                font-bold
                                text-[#D4AF37]
                            "
                        >
                            12%
                        </h3>

                    </div>

                </div>

            </div>

        </section>
    );
}