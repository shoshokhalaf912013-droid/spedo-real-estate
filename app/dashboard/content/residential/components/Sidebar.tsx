"use client";

const PROPERTY_TYPES = [

    "Apartments",
    "Studios",
    "Chalets",
    "Villas",
    "Townhouses",
    "Twin Houses",
    "Duplex",
    "Penthouses",
    "Buildings",
    "Residential Land",

];

interface Props {

    active: string;

    onChange(value: string): void;

}

export default function Sidebar({

    active,

    onChange,

}: Props) {

    return (

        <aside
            className="
                rounded-3xl
                border
                border-white/10
                bg-[#08101E]
                p-6
            "
        >

            <h2
                className="
                    mb-6
                    text-2xl
                    font-black
                    text-white
                "
            >
                Residential
            </h2>

            <div
                className="
                    space-y-2
                "
            >

                {

                    PROPERTY_TYPES.map(

                        item=>(

                            <button

                                key={item}

                                onClick={()=>

                                    onChange(item)

                                }

                                className={`
                                    w-full
                                    rounded-xl
                                    px-5
                                    py-3
                                    text-left
                                    font-semibold
                                    transition

                                    ${
                                        active===item

                                        ?

                                        "bg-[#F97316] text-black"

                                        :

                                        "text-slate-300 hover:bg-[#111827]"
                                    }
                                `}
                            >

                                {item}

                            </button>

                        )

                    )

                }

            </div>

        </aside>

    );

}