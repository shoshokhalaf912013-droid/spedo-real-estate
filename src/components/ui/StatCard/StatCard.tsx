import type {
    HTMLAttributes,
    ReactNode
} from "react";

interface StatCardProps
    extends HTMLAttributes<HTMLDivElement> {

    title: string;

    value: ReactNode;

    description?: string;
}

export default function StatCard({
    title,
    value,
    description,
    className = "",
    ...props
}: StatCardProps) {

    return (

        <div
            className={`
                rounded-3xl
                border
                border-white/10
                bg-[#111111]
                p-6
                ${className}
            `}
            {...props}
        >

            <p
                className="
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-gray-500
                "
            >
                {title}
            </p>

            <div
                className="
                    mt-3
                    text-3xl
                    font-semibold
                    text-[#D4AF37]
                "
            >
                {value}
            </div>

            {description && (

                <p
                    className="
                        mt-3
                        text-sm
                        leading-6
                        text-gray-400
                    "
                >
                    {description}
                </p>

            )}

        </div>

    );

}