interface SpedoStatCardProps {
    value: string;
    label: string;
    description?: string;
}

export default function SpedoStatCard({
    value,
    label,
    description,
}: SpedoStatCardProps) {
    return (
        <div
            className="
                group
                relative
                overflow-hidden

                rounded-[32px]

                border
                border-[#D4AF37]/15

                bg-gradient-to-br
                from-[#10213B]
                via-[#0D1727]
                to-[#08101B]

                p-10

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#D4AF37]/60
                hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
            "
        >
            <div
                className="
                    text-5xl
                    font-black
                    text-[#D4AF37]
                "
            >
                {value}
            </div>

            <h3
                className="
                    mt-5
                    text-2xl
                    font-bold
                    text-white
                "
            >
                {label}
            </h3>

            {description && (
                <p
                    className="
                        mt-5
                        leading-8
                        text-slate-300
                    "
                >
                    {description}
                </p>
            )}
        </div>
    );
}