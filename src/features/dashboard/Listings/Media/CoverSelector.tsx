"use client";

import { useRef } from "react";

interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function CoverSelector({

    value,

    onChange,

}: Props) {

    const inputRef = useRef<HTMLInputElement>(null);

    function openFilePicker() {

        inputRef.current?.click();

    }

    function handleFileChange(

        event: React.ChangeEvent<HTMLInputElement>

    ) {

        const file = event.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        onChange(imageUrl);

    }

    function removeImage() {

        onChange("");

        if (inputRef.current) {

            inputRef.current.value = "";

        }

    }

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
                Cover Image
            </h3>

            <p
                className="
                    mt-2
                    text-slate-400
                "
            >
                Upload the main image that appears in search results and property pages.
            </p>

            <input

                ref={inputRef}

                type="file"

                accept="image/*"

                className="hidden"

                onChange={handleFileChange}

            />

            {

                value ? (

                    <div
                        className="
                            mt-8
                        "
                    >

                        <img

                            src={value}

                            alt="Cover"

                            className="
                                h-72
                                w-full
                                rounded-2xl
                                object-cover
                                border
                                border-slate-700
                            "

                        />

                        <div
                            className="
                                mt-5
                                flex
                                gap-4
                            "
                        >

                            <button

                                type="button"

                                onClick={openFilePicker}

                                className="
                                    rounded-xl
                                    bg-[#F97316]
                                    px-6
                                    py-3
                                    font-bold
                                    text-black
                                "

                            >

                                Replace Image

                            </button>

                            <button

                                type="button"

                                onClick={removeImage}

                                className="
                                    rounded-xl
                                    bg-red-600
                                    px-6
                                    py-3
                                    font-bold
                                    text-white
                                "

                            >

                                Remove

                            </button>

                        </div>

                    </div>

                ) : (

                    <div
                        className="
                            mt-8
                            flex
                            h-72
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border-2
                            border-dashed
                            border-slate-700
                        "
                    >

                        <p
                            className="
                                mb-6
                                text-slate-400
                            "
                        >
                            No cover image selected
                        </p>

                        <button

                            type="button"

                            onClick={openFilePicker}

                            className="
                                rounded-xl
                                bg-[#F97316]
                                px-8
                                py-4
                                font-bold
                                text-black
                            "

                        >

                            Upload Cover

                        </button>

                    </div>

                )

            }

        </div>

    );

}