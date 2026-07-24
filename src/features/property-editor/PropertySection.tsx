"use client";

import { useState } from "react";

import MediaPicker from "@/features/media-picker/MediaPicker";

import { MediaItem } from "@/features/media-library/components/MediaGrid";

import { PropertySection as Section } from "./types";

interface Props {

    section: Section;

    onDelete(
        id: string
    ): void;

}

export default function PropertySection({

    section,

    onDelete,

}: Props) {

    const [

        pickerOpen,

        setPickerOpen,

    ] = useState(false);

    const [

        gallery,

        setGallery,

    ] = useState<MediaItem[]>([]);

    function handleImages(

        images: MediaItem[]

    ) {

        setGallery(

            previous => [

                ...previous,

                ...images,

            ]

        );

    }

    return (

        <div
            className="
                rounded-2xl
                border
                border-slate-700
                bg-[#020817]
                p-6
            "
        >

            <div
                className="
                    mb-6
                    flex
                    items-center
                    justify-between
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >

                    {section.title}

                </h2>

                <button

                    onClick={() =>

                        onDelete(

                            section.id

                        )

                    }

                    className="
                        rounded-lg
                        bg-red-600
                        px-4
                        py-2
                        text-white
                    "

                >

                    Delete

                </button>

            </div>

            {

                section.type === "gallery" && (

                    <>

                        <div
                            className="
                                mb-6
                                grid
                                grid-cols-2
                                gap-4

                                md:grid-cols-3

                                lg:grid-cols-4
                            "
                        >

                            {

                                gallery.map(

                                    image => (

                                        <img

                                            key={

                                                image.id

                                            }

                                            src={

                                                image.url

                                            }

                                            alt={

                                                image.name

                                            }

                                            className="
                                                h-36
                                                w-full
                                                rounded-xl
                                                object-cover
                                            "

                                        />

                                    )

                                )

                            }

                        </div>

                        <div
                            className="
                                rounded-xl
                                border
                                border-dashed
                                border-slate-700
                                p-8
                                text-center
                            "
                        >

                            <button

                                onClick={() =>

                                    setPickerOpen(

                                        true

                                    )

                                }

                                className="
                                    rounded-xl
                                    bg-orange-500
                                    px-6
                                    py-3
                                    font-bold
                                    text-white
                                "

                            >

                                + Add Images

                            </button>

                        </div>

                        <MediaPicker

                            open={

                                pickerOpen

                            }

                            multiple

                            onClose={() =>

                                setPickerOpen(

                                    false

                                )

                            }

                            onSelect={

                                handleImages

                            }

                        />

                    </>

                )

            }

            {

                section.type === "videos" && (

                    <div
                        className="
                            rounded-xl
                            border
                            border-dashed
                            border-slate-700
                            p-8
                            text-center
                            text-slate-400
                        "
                    >

                        Video section (next step)

                    </div>

                )

            }

            {

                section.type === "floorplans" && (

                    <div
                        className="
                            rounded-xl
                            border
                            border-dashed
                            border-slate-700
                            p-8
                            text-center
                            text-slate-400
                        "
                    >

                        Floor Plans section (next step)

                    </div>

                )

            }

            {

                section.type === "amenities" && (

                    <div className="text-slate-400">

                        Amenities

                    </div>

                )

            }

            {

                section.type === "specifications" && (

                    <div className="text-slate-400">

                        Specifications

                    </div>

                )

            }

            {

                section.type === "faq" && (

                    <div className="text-slate-400">

                        FAQ

                    </div>

                )

            }

            {

                section.type === "location" && (

                    <div className="text-slate-400">

                        Location

                    </div>

                )

            }

            {

                section.type === "seo" && (

                    <div className="text-slate-400">

                        SEO

                    </div>

                )

            }

        </div>

    );

}