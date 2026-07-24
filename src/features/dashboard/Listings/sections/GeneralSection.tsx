"use client";

export default function GeneralSection() {

    return (

        <section
            className="
                rounded-3xl
                border
                border-[#D4AF37]/10
                bg-[#0F172A]
                p-6
            "
        >

            <div
                className="
                    mb-6
                    flex
                    items-center
                    gap-3
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F97316]
                        font-black
                        text-black
                    "
                >
                    1
                </div>

                <div>

                    <h2
                        className="
                            text-2xl
                            font-black
                            text-[#F97316]
                        "
                    >
                        General Information
                    </h2>

                    <p
                        className="
                            text-sm
                            text-slate-400
                        "
                    >
                        Basic property information.
                    </p>

                </div>

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        Property Title
                    </label>

                    <input
                        type="text"
                        placeholder="Property title"
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-sm
                            text-white
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    />

                </div>

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        Reference Code
                    </label>

                    <input
                        type="text"
                        placeholder="SPD-000001"
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-sm
                            text-white
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    />

                </div>

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        Price
                    </label>

                    <input
                        type="number"
                        placeholder="0"
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-sm
                            text-white
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    />

                </div>

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        Currency
                    </label>

                    <select
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-sm
                            text-white
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    >

                        <option>EGP</option>

                        <option>USD</option>

                        <option>EUR</option>

                        <option>SAR</option>

                        <option>AED</option>

                    </select>

                </div>

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        Property Status
                    </label>

                    <select
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-sm
                            text-white
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    >

                        <option>Available</option>

                        <option>Reserved</option>

                        <option>Sold</option>

                        <option>Coming Soon</option>

                    </select>

                </div>

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        Property Area (m²)
                    </label>

                    <input
                        type="number"
                        placeholder="0"
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-sm
                            text-white
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    />

                </div>

            </div>

        </section>

    );

}