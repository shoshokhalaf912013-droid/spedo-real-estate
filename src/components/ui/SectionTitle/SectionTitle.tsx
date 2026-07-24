import { ReactNode } from "react";

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
}

export default function SectionTitle({
    children,
    className = "",
}: SectionTitleProps) {
    return (
        <h2
            className={`
                mt-4
                text-4xl
                lg:text-5xl
                font-bold
                text-[#FF6B1A]
                ${className}
            `}
        >
            {children}
        </h2>
    );
}