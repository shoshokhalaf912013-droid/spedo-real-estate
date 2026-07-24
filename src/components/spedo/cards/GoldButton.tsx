"use client";

import type {
    ButtonHTMLAttributes,
    ReactNode
} from "react";

interface GoldButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;
}

export default function GoldButton({
    children,
    className = "",
    type = "button",
    ...props
}: GoldButtonProps) {

    return (

        <button
            type={type}
            className={`
                inline-flex
                items-center
                justify-center
                rounded-2xl
                border
                border-[#D4AF37]/40
                bg-gradient-to-r
                from-[#B8860B]
                via-[#D4AF37]
                to-[#F5D76E]
                px-6
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${className}
            `}
            {...props}
        >
            {children}
        </button>

    );

}