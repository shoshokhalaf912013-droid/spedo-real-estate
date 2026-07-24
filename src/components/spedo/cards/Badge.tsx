import type {
    HTMLAttributes,
    ReactNode
} from "react";

interface BadgeProps
    extends HTMLAttributes<HTMLSpanElement> {

    children: ReactNode;
}

export default function Badge({
    children,
    className = "",
    ...props
}: BadgeProps) {

    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                border
                border-[#D4AF37]/30
                bg-black/60
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-[#D4AF37]
                backdrop-blur-md
                ${className}
            `}
            {...props}
        >
            {children}
        </span>

    );

}