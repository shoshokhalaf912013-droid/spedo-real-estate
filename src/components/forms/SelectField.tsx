"use client";

interface Option {

    label: string;

    value: string;

}

interface SelectFieldProps {

    label: string;

    value: string;

    options: Option[];

    placeholder?: string;

    required?: boolean;

    disabled?: boolean;

    onChange: (value: string) => void;

}

export default function SelectField({

    label,

    value,

    options,

    placeholder = "Select...",

    required = false,

    disabled = false,

    onChange,

}: SelectFieldProps) {

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

            <select

                value={value}

                disabled={disabled}

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
                "
            >

                <option value="">

                    {placeholder}

                </option>

                {

                    options.map(

                        option=>(

                            <option

                                key={option.value}

                                value={option.value}

                            >

                                {option.label}

                            </option>

                        )

                    )

                }

            </select>

        </div>

    );

}