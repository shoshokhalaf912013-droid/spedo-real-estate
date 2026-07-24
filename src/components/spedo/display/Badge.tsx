import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export default function Badge({
    children,
    className = "",
}: BadgeProps) {
    return (
        <div
            className={`
                inline-flex
                items-center
                gap-2

                px-4
                py-2

                rounded-full

                bg-white/5
                border
                border-white/10

                text-sm
                text-zinc-300

                backdrop-blur-md

                transition-all
                duration-300

                hover:border-[#D4AF37]/30
                hover:text-[#D4AF37]

                ${className}
            `}
        >
            {children}
        </div>
    );
}