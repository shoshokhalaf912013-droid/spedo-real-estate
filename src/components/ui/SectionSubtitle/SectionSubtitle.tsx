import { ReactNode } from "react";

interface SectionSubtitleProps {
    children: ReactNode;
    className?: string;
}

export default function SectionSubtitle({
    children,
    className = "",
}: SectionSubtitleProps) {
    return (
        <p
            className={`
                mt-6
                max-w-3xl
                mx-auto
                text-zinc-400
                text-lg
                leading-8
                ${className}
            `}
        >
            {children}
        </p>
    );
}