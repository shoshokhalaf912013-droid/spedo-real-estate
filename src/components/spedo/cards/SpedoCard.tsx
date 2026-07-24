import { ReactNode } from "react";

interface SpedoCardProps {
    children: ReactNode;
    className?: string;
    variant?: "dark" | "light" | "glass";
    hover?: boolean;
    glow?: boolean;
}

export default function SpedoCard({
    children,
    className = "",
    variant = "dark",
    hover = true,
    glow = true,
}: SpedoCardProps) {

    const variants = {

        dark: `
            bg-gradient-to-b
            from-[#10213B]
            via-[#0D1727]
            to-[#05070D]

            border
            border-[#D4AF37]/15
        `,

        light: `
            bg-gradient-to-b
            from-[#10213B]
            via-[#0D1727]
            to-[#05070D]

            border
            border-[#D4AF37]/15
        `,

        glass: `
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
        `,
    };

    return (

        <div
            className={`
                group
                relative
                overflow-hidden
                rounded-[36px]
                p-10

                transition-all
                duration-500

                ${variants[variant]}

                ${
                    hover
                        ? `
                            hover:-translate-y-3
                            hover:border-[#D4AF37]/60
                        `
                        : ""
                }

                ${
                    glow
                        ? `
                            hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]
                        `
                        : ""
                }

                ${className}
            `}
        >

            <div
                className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-0
                    bg-[#D4AF37]
                    transition-all
                    duration-700
                    group-hover:w-full
                "
            />

            {children}

            <div
                className="
                    absolute
                    left-0
                    bottom-0
                    h-[2px]
                    w-0
                    bg-[#D4AF37]
                    transition-all
                    duration-700
                    group-hover:w-full
                "
            />

        </div>

    );
}