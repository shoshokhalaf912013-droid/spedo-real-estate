"use client";

export default function InstallmentForm() {

    return (

        <div
            className="
                grid
                gap-4
            "
        >

            <input
                placeholder="Total Price"
                className="
                    h-11
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#0F172A]
                    px-4
                    text-white
                "
            />

            <select
                className="
                    h-11
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#0F172A]
                    px-4
                    text-white
                "
            >
                <option>EGP</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <input
                    placeholder="Down Payment %"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

                <input
                    placeholder="Down Payment Amount"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <input
                    placeholder="Installment Years"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

                <input
                    placeholder="Number Of Installments"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

            </div>

            <select
                className="
                    h-11
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#0F172A]
                    px-4
                    text-white
                "
            >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Semi Annual</option>
                <option>Annual</option>
            </select>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <input
                    placeholder="Maintenance %"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

                <input
                    placeholder="Maintenance Amount"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <input
                    type="date"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

                <input
                    placeholder="Grace Period"
                    className="
                        h-11
                        rounded-xl
                        border
                        border-slate-700
                        bg-[#0F172A]
                        px-4
                        text-white
                    "
                />

            </div>

            <textarea
                rows={4}
                placeholder="Installment Notes"
                className="
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#0F172A]
                    p-4
                    text-white
                "
            />

        </div>

    );

}