import { ReactNode } from "react";

interface SpedoInfoCardProps {
    icon?: ReactNode;

    title: string;

    value: string;

    className?: string;
}

export default function SpedoInfoCard({
    icon,
    title,
    value,
    className = "",
}: SpedoInfoCardProps) {
    return (
        <div
            className={`
                group

                rounded-[28px]

                border
                border-white/10

                bg-white/[0.03]

                p-8

                transition-all
                duration-300

                hover:border-[#D4AF37]/30

                ${className}
            `}
        >
            {icon && (
                <div
                    className="
                        mb-6

                        flex
                        h-14
                        w-14

                        items-center
                        justify-center

                        rounded-2xl

                        bg-[#D4AF37]/10

                        text-[#D4AF37]
                    "
                >
                    {icon}
                </div>
            )}

            <p
                className="
                    text-sm
                    uppercase
                    tracking-[3px]
                    text-slate-400
                "
            >
                {title}
            </p>

            <h3
                className="
                    mt-3
                    text-3xl
                    font-bold
                    text-white
                "
            >
                {value}
            </h3>
        </div>
    );
}