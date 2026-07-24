"use client";

interface TextFieldProps {

    label: string;

    value: string;

    placeholder?: string;

    required?: boolean;

    disabled?: boolean;

    readOnly?: boolean;

    type?: string;

    onChange: (value: string) => void;

}

export default function TextField({

    label,

    value,

    placeholder = "",

    required = false,

    disabled = false,

    readOnly = false,

    type = "text",

    onChange,

}: TextFieldProps) {

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

            <input

                type={type}

                value={value}

                placeholder={placeholder}

                disabled={disabled}

                readOnly={readOnly}

                onChange={(e)=>

                    onChange(

                        e.target.value

                    )

                }

                className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#111827]
                    px-4
                    text-white
                    outline-none
                    transition
                    focus:border-[#F97316]
                    disabled:cursor-not-allowed
                    disabled:bg-slate-900
                    disabled:text-slate-500
                    read-only:bg-slate-900
                "
            />

        </div>

    );

}