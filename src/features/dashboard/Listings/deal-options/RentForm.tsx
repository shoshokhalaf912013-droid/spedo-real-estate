"use client";

export default function RentForm() {

    return (

        <div
            className="
                grid
                gap-4
            "
        >

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <input
                    placeholder="Daily Price"
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
                    placeholder="Weekly Price"
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
                    placeholder="Monthly Price"
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
                    placeholder="Yearly Price"
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

            <input
                placeholder="Security Deposit"
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
                placeholder="Minimum Rental Period"
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

            <textarea
                rows={4}
                placeholder="Rental Notes"
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