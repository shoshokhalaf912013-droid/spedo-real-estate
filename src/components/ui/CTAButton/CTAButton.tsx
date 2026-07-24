"use client";

import type {
    ButtonHTMLAttributes,
    ReactNode
} from "react";

interface CTAButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;

    fullWidth?: boolean;
}

export default function CTAButton({
    children,
    className = "",
    type = "button",
    fullWidth = false,
    ...props
}: CTAButtonProps) {

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
                bg-[#D4AF37]
                px-7
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#E8C65A]
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>

    );

}