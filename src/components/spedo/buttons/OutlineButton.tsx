import { ReactNode } from "react";

interface OutlineButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function OutlineButton({
    children,
    onClick,
    className = "",
}: OutlineButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
                px-8
                py-4

                rounded-2xl

                border
                border-[#D4AF37]/30

                text-white

                transition-all
                duration-300

                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]

                active:scale-95

                ${className}
            `}
        >
            {children}
        </button>
    );
}