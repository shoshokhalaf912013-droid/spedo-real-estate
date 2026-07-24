import { ReactNode } from "react";

interface GoldButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function GoldButton({
    children,
    onClick,
    className = "",
}: GoldButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
                px-8
                py-4

                rounded-2xl

                bg-[#D4AF37]
                text-black
                font-bold

                transition-all
                duration-300

                hover:scale-105
                hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]

                active:scale-95

                ${className}
            `}
        >
            {children}
        </button>
    );
}