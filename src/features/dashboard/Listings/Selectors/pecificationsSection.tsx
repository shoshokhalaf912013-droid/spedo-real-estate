"use client";

interface Props {

    propertyType: string;

}

export default function SpecificationsSection({
    propertyType,
}: Props) {

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
                    mb-8
                "
            >

                <h2
                    className="
                        text-2xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Specifications
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-400
                    "
                >
                    Technical specifications and construction details.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-5
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Built Area (m²)
                    </label>

                    <input
                        placeholder="Built Area"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    />

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Land Area (m²)
                    </label>

                    <input
                        placeholder="Land Area"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    />

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Floor Number
                    </label>

                    <input
                        placeholder="Floor"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    />

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Total Floors
                    </label>

                    <input
                        placeholder="Building Floors"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    />

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Ceiling Height
                    </label>

                    <input
                        placeholder="Meters"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    />

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Construction Year
                    </label>

                    <input
                        placeholder="2026"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    />

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Electricity Meter
                    </label>

                    <select
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    >
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Water Meter
                    </label>

                    <select
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    >
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>

                </div>

                <div>

                    <label className="mb-2 block text-white font-semibold">
                        Gas
                    </label>

                    <select
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-white
                        "
                    >
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>

                </div>

            </div>

            <div
                className="
                    mt-8
                "
            >

                <label
                    className="
                        mb-3
                        block
                        text-white
                        font-semibold
                    "
                >
                    Additional Specifications
                </label>

                <textarea
                    rows={6}
                    placeholder="Any additional technical specifications..."
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#111827]
                        p-4
                        text-white
                    "
                />

            </div>

        </section>

    );

}