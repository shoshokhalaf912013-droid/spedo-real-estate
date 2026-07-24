"use client";

interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function VirtualTourInput({

    value,

    onChange,

}: Props) {

    return (

        <div
            className="
                rounded-3xl
                border
                border-[#D4AF37]/10
                bg-[#08101E]
                p-8
            "
        >

            <h3
                className="
                    text-2xl
                    font-black
                    text-white
                "
            >
                Virtual Tour
            </h3>

            <p
                className="
                    mt-2
                    mb-6
                    text-slate-400
                "
            >
                Add a Matterport, YouTube, Vimeo, Kuula,
                or any 360° virtual tour link.
            </p>

            <input

                type="url"

                value={value}

                placeholder="https://"

                onChange={(e)=>

                    onChange(

                        e.target.value

                    )

                }

                className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-slate-700
                    bg-[#0F172A]
                    px-5
                    text-white
                    outline-none
                    transition
                    focus:border-[#F97316]
                "

            />

            {

                value && (

                    <div
                        className="
                            mt-6
                            rounded-2xl
                            border
                            border-[#F97316]/20
                            bg-[#0F172A]
                            p-5
                        "
                    >

                        <p
                            className="
                                mb-3
                                text-sm
                                text-slate-400
                            "
                        >
                            Preview Link
                        </p>

                        <a

                            href={value}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="
                                break-all
                                font-semibold
                                text-[#F97316]
                                hover:underline
                            "

                        >

                            {value}

                        </a>

                    </div>

                )

            }

        </div>

    );

}