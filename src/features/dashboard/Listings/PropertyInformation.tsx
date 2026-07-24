"use client";

export default function PropertyInformation() {

    return (

        <section
            className="
                rounded-[40px]
                bg-[#111827]
                p-10
            "
        >

            <h2
                className="
                    mb-8
                    text-4xl
                    font-black
                    text-[#F97316]
                "
            >
                Property Information
            </h2>

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                "
            >

                <input
                    placeholder="Property Title"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Developer"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Project Name"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="City"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="District"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Area (m²)"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Bedrooms"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Bathrooms"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Floor Number"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Delivery Date"
                    type="date"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

            </div>

            <textarea
                rows={8}
                placeholder="Property Description"
                className="
                    mt-6
                    w-full
                    rounded-2xl
                    bg-[#08101E]
                    p-6
                    text-white
                    outline-none
                "
            />

            {/* FINANCIAL */}

            <div
                className="
                    mt-10
                    grid
                    gap-6
                    md:grid-cols-3
                "
            >

                <input
                    placeholder="Price"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <select
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                >

                    <option>
                        EGP
                    </option>

                    <option>
                        USD
                    </option>

                    <option>
                        EUR
                    </option>

                </select>

                <select
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                >

                    <option>
                        Cash
                    </option>

                    <option>
                        Installments
                    </option>

                    <option>
                        Cash + Installments
                    </option>

                </select>

                <input
                    placeholder="Down Payment"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Monthly Installment"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

                <input
                    placeholder="Installment Years"
                    type="number"
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                />

            </div>

            {/* STATUS */}

            <div
                className="
                    mt-10
                    grid
                    gap-6
                    md:grid-cols-2
                "
            >

                <select
                    className="
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                        outline-none
                    "
                >

                    <option>
                        Available
                    </option>

                    <option>
                        Reserved
                    </option>

                    <option>
                        Sold
                    </option>

                </select>

                <label
                    className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        bg-[#08101E]
                        p-5
                        text-white
                    "
                >

                    <input
                        type="checkbox"
                    />

                    Featured Property

                </label>

            </div>

        </section>

    );

}