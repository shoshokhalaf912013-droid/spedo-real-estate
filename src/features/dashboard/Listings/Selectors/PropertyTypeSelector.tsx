"use client";

interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

const PROPERTY_TYPES = [

    "apartments",
    "studios",
    "chalets",
    "villas",
    "townhouses",
    "twin-houses",
    "duplex",
    "penthouses",

    "shops",
    "offices",
    "clinics",
    "pharmacies",
    "cafes",
    "restaurants",
    "hotels",
    "warehouses",
    "factories",
    "land",

];

export default function PropertyTypeSelector({
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
                Property Type
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

                {PROPERTY_TYPES.map(
                    (type) => (

                        <option
                            key={type}
                            value={type}
                        >
                            {type}
                        </option>

                    )
                )}

            </select>

        </div>

    );

}