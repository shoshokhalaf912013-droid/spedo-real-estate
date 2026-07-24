"use client";

import type {
    ButtonHTMLAttributes,
    ReactNode
} from "react";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;

    variant?: "gold" | "dark" | "outline";
}

export default function Button({
    children,
    className = "",
    type = "button",
    variant = "gold",
    ...props
}: ButtonProps) {

    const variants = {

        gold: `
            border-[#D4AF37]/40
            bg-gradient-to-r
            from-[#B8860B]
            via-[#D4AF37]
            to-[#F5D76E]
            text-black
        `,

        dark: `
            border-white/10
            bg-[#111111]
            text-white
        `,

        outline: `
            border-[#D4AF37]/40
            bg-transparent
            text-[#D4AF37]
        `

    };

    return (

        <button
            type={type}
            className={`
                inline-flex
                items-center
                justify-center
                rounded-2xl
                border
                px-6
                py-4
                font-semibold
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>

    );

}