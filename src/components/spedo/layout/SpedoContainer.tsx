import { ReactNode } from "react";

interface SpedoContainerProps {
    children: ReactNode;
    className?: string;
}

export default function SpedoContainer({
    children,
    className = "",
}: SpedoContainerProps) {
    return (
        <div
            className={`
                relative
                mx-auto
                w-full
                max-w-7xl
                px-6
                lg:px-8
                xl:px-10

                ${className}
            `}
        >
            {children}
        </div>
    );
}