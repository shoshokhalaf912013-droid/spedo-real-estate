"use client";

export default function FAQActionButtons() {

    return (

        <div
            className="
            mt-10
            flex
            flex-col
            gap-4
            md:flex-row
            "
        >

            <button
                className="
                flex-1
                rounded-2xl
                bg-[#d4af37]
                px-6
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[2px]
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(212,175,55,.25)]
                "
            >
                Ask About This Topic
            </button>

            <button
                className="
                flex-1
                rounded-2xl
                border
                border-[#25D366]/30
                bg-[#0d1b12]
                px-6
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[2px]
                text-[#25D366]
                transition-all
                duration-300
                hover:border-[#25D366]/60
                hover:bg-[#122017]
                "
            >
                WhatsApp Advisor
            </button>

        </div>

    );

}