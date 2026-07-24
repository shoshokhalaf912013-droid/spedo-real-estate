"use client";

export default function CashForm() {

    return (

        <div
            className="
                grid
                gap-4
            "
        >

            <input
                placeholder="Cash Price"
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

            <input
                placeholder="Cash Discount %"
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
                placeholder="Final Cash Price"
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
                placeholder="Cash Notes"
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