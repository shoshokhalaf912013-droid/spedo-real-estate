import { ReactNode } from "react";

type Variant =
    | "hero"
    | "redSea"
    | "benefits"
    | "projects"
    | "process"
    | "faq"
    | "cta"
    | "dark";

interface SpedoSectionProps {
    children: ReactNode;
    variant?: Variant;
    className?: string;
}

const backgrounds: Record<Variant, string> = {
    hero: `
        bg-[#05070D]
    `,

    redSea: `
        bg-gradient-to-b
        from-[#F8F2E8]
        via-[#F5EBDC]
        to-[#EFE4D3]
    `,

    benefits: `
        bg-[#05070D]
    `,

    projects: `
        bg-gradient-to-b
        from-[#08101E]
        via-[#0D1727]
        to-[#05070D]
    `,

    process: `
        bg-gradient-to-b
        from-[#111827]
        via-[#0F172A]
        to-[#08101E]
    `,

    faq: `
        bg-gradient-to-b
        from-[#F8F2E8]
        via-[#F6EEDF]
        to-[#EFE4D3]
    `,

    cta: `
        bg-gradient-to-r
        from-[#08101E]
        via-[#111827]
        to-[#08101E]
    `,

    dark: `
        bg-[#05070D]
    `,
};

export default function SpedoSection({
    children,
    variant = "dark",
    className = "",
}: SpedoSectionProps) {
    return (
        <section
            className={`
                relative
                overflow-hidden

                py-28

                ${backgrounds[variant]}

                ${className}
            `}
        >
            {children}
        </section>
    );
}