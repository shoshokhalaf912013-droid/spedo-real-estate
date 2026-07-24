import type { ReactNode } from "react";

interface SectionHeaderProps {
    badge: string;
    title: ReactNode;
    highlight?: ReactNode;
    description: ReactNode;
    light?: boolean;
}

export default function SectionHeader({
    badge,
    title,
    highlight,
    description,
    light = false,
}: SectionHeaderProps) {
    return (
        <div className="mb-24 text-center">
            <span
                className="
                    inline-block
                    uppercase
                    tracking-[6px]
                    text-sm
                    font-medium
                    text-[#D4AF37]
                "
            >
                {badge}
            </span>

            <h2
                className={`
                    mt-8
                    text-5xl
                    lg:text-6xl
                    font-bold
                    leading-tight

                    ${
                        light
                            ? "text-[#1A2433]"
                            : "text-white"
                    }
                `}
            >
                {title}

                {highlight && (
                    <>
                        {" "}
                        <span className="text-[#F97316]">
                            {highlight}
                        </span>
                    </>
                )}
            </h2>

            <p
                className={`
                    mx-auto
                    mt-8
                    max-w-3xl
                    text-lg
                    leading-9

                    ${
                        light
                            ? "text-slate-600"
                            : "text-slate-300"
                    }
                `}
            >
                {description}
            </p>
        </div>
    );
}