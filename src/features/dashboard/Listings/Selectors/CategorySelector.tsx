"use client";

interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function CategorySelector({
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
                Listing Category
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

                <option value="sale">
                    Sale
                </option>

                <option value="rent">
                    Rent
                </option>

            </select>

        </div>

    );

}