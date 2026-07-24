"use client";

interface TextAreaFieldProps {

    label: string;

    value: string;

    placeholder?: string;

    rows?: number;

    required?: boolean;

    disabled?: boolean;

    onChange: (value: string) => void;

}

export default function TextAreaField({

    label,

    value,

    placeholder = "",

    rows = 5,

    required = false,

    disabled = false,

    onChange,

}: TextAreaFieldProps) {

    return (

        <div
            className="
                flex
                flex-col
                gap-2
            "
        >

            <label
                className="
                    text-sm
                    font-semibold
                    text-white
                "
            >

                {label}

                {

                    required && (

                        <span
                            className="
                                ml-1
                                text-red-500
                            "
                        >
                            *
                        </span>

                    )

                }

            </label>

            <textarea

                value={value}

                rows={rows}

                disabled={disabled}

                placeholder={placeholder}

                onChange={(e)=>

                    onChange(

                        e.target.value

                    )

                }

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#111827]
                    p-4
                    text-white
                    outline-none
                    transition
                    resize-none
                    focus:border-[#F97316]
                    disabled:cursor-not-allowed
                    disabled:bg-slate-900
                    disabled:text-slate-500
                "
            />

        </div>

    );

}