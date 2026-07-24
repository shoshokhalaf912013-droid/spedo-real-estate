"use client";

interface Props {

    onUpload(): void;

}

export default function MediaToolbar({

    onUpload,

}: Props) {

    return (

        <div
            className="
                mb-8
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-center
                lg:justify-between
            "
        >

            <div>

                <h1
                    className="
                        text-5xl
                        font-black
                        text-white
                    "
                >

                    Media Library

                </h1>

                <p
                    className="
                        mt-3
                        text-slate-400
                    "
                >

                    Images • Videos • PDFs • Floor Plans

                </p>

            </div>

            <div
                className="
                    flex
                    gap-4
                "
            >

                <input

                    placeholder="Search media..."

                    className="
                        h-12
                        w-72
                        rounded-xl
                        border
                        border-white/10
                        bg-[#08101E]
                        px-4
                        text-white
                        outline-none
                    "

                />

                <button

                    onClick={onUpload}

                    className="
                        rounded-xl
                        bg-[#F97316]
                        px-7
                        font-bold
                        text-black
                    "

                >

                    Upload

                </button>

            </div>

        </div>

    );

}