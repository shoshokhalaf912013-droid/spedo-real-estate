"use client";

interface SwitchFieldProps {

    label: string;

    description?: string;

    checked: boolean;

    disabled?: boolean;

    onChange: (checked: boolean) => void;

}

export default function SwitchField({

    label,

    description,

    checked,

    disabled = false,

    onChange,

}: SwitchFieldProps) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-700
                bg-[#111827]
                p-4
            "
        >

            <div>

                <h4
                    className="
                        font-semibold
                        text-white
                    "
                >
                    {label}
                </h4>

                {

                    description && (

                        <p
                            className="
                                mt-1
                                text-sm
                                text-slate-400
                            "
                        >
                            {description}
                        </p>

                    )

                }

            </div>

            <button

                type="button"

                disabled={disabled}

                onClick={()=>

                    onChange(

                        !checked

                    )

                }

                className={`
                    relative
                    h-7
                    w-14
                    rounded-full
                    transition-all
                    duration-300

                    ${

                        checked

                            ? "bg-emerald-500"

                            : "bg-slate-600"

                    }

                    ${

                        disabled

                            ? "cursor-not-allowed opacity-50"

                            : ""

                    }

                `}
            >

                <span
                    className={`
                        absolute
                        top-0.5
                        h-6
                        w-6
                        rounded-full
                        bg-white
                        transition-all
                        duration-300

                        ${

                            checked

                                ? "left-7"

                                : "left-0.5"

                        }

                    `}
                />

            </button>

        </div>

    );

}