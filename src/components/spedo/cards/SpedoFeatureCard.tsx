import { ReactNode } from "react";
import SpedoCard from "./SpedoCard";

interface SpedoFeatureCardProps {
    icon?: ReactNode;

    number?: string;

    title: string;

    description: string;

    variant?: "dark" | "light" | "glass";

    className?: string;
}

export default function SpedoFeatureCard({
    icon,
    number,
    title,
    description,
    variant = "dark",
    className = "",
}: SpedoFeatureCardProps) {
    return (
        <SpedoCard
            variant={variant}
            className={`
                min-h-[360px]
                flex
                flex-col

                ${className}
            `}
        >
            {/* ICON */}

            {icon && (
                <div
                    className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#D4AF37]/20

                        bg-[#FFF8E7]

                        text-[#D4AF37]

                        shadow-[0_0_20px_rgba(255,255,255,0.12)]
                    "
                >
                    {icon}
                </div>
            )}

            {/* NUMBER */}

            {number && (
                <div
                    className="
                        mt-8

                        flex
                        h-10
                        w-full

                        items-center
                        justify-center

                        rounded-full

                        bg-gradient-to-r
                        from-[#FFD700]
                        to-[#D4AF37]

                        font-extrabold
                        text-[18px]

                        text-black

                        shadow-[0_4px_20px_rgba(212,175,55,0.35)]
                    "
                >
                    {number}
                </div>
            )}

            {/* TITLE */}

            <h3
                style={{
                    color: "#FFFFFF",
                }}
                className="
                    mt-8

                    text-[30px]

                    font-extrabold

                    leading-tight

                    transition-all
                    duration-300

                    group-hover:text-[#D4AF37]
                "
            >
                {title}
            </h3>

            {/* GOLD LINE */}

            <div
                className="
                    mt-5

                    h-[2px]
                    w-16

                    bg-[#D4AF37]
                "
            />

            {/* DESCRIPTION */}

            <p
                className="
                    mt-8

                    flex-1

                    text-[16px]

                    leading-9

                    text-slate-300
                "
            >
                {description}
            </p>

        </SpedoCard>
    );
}