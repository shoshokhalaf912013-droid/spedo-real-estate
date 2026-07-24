"use client";

interface NumberFieldProps {

    label: string;

    value: number;

    placeholder?: string;

    required?: boolean;

    disabled?: boolean;

    min?: number;

    max?: number;

    step?: number;

    onChange: (value: number) => void;

}

export default function NumberField({

    label,

    value,

    placeholder = "",

    required = false,

    disabled = false,

    min,

    max,

    step = 1,

    onChange,

}: NumberFieldProps) {

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

                type="number"

                value={value === 0 ? "" : value}

                placeholder={placeholder}

                disabled={disabled}

                min={min}

                max={max}

                step={step}

                onChange={(e)=>

                    onChange(

                        e.target.value === ""

                            ? 0

                            : Number(e.target.value)

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
                "
            />

        </div>

    );

}