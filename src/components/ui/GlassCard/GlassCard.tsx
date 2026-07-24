import type {
    HTMLAttributes,
    ReactNode
} from "react";

interface GlassCardProps
    extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;
}

export default function GlassCard({
    children,
    className = "",
    ...props
}: GlassCardProps) {

    return (

        <div
            className={`
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
                ${className}
            `}
            {...props}
        >
            {children}
        </div>

    );

}