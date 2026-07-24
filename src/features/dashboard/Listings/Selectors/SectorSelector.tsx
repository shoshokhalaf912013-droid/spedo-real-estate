"use client";

interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function SectorSelector({
    value,
    onChange,
}: Props) {

    return (

        <div>

            <label
                className="
                    mb-3
                    block
                    font-bold
                    text-white
                "
            >
                Property Sector
            </label>

            <select
                value={value}
                onChange={(e) =>
                    onChange(
                        e.target.value
                    )
                }
                className="
                    w-full
                    rounded-2xl
                    bg-[#08101E]
                    p-5
                    text-white
                    outline-none
                "
            >

                <option value="residential">
                    Residential
                </option>

                <option value="commercial">
                    Commercial
                </option>

                <option value="investment">
                    Investment
                </option>

            </select>

        </div>

    );

}