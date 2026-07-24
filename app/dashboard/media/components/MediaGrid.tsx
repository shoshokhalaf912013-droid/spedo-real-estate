"use client";

import MediaCard from "./MediaCard";

export interface MediaItem {

    id: number;

    name: string;

    type: "image" | "video" | "pdf";

    url: string;

}

interface Props {

    items: MediaItem[];

    onDelete(id: number): void;

    onPreview(item: MediaItem): void;

}

export default function MediaGrid({

    items,

    onDelete,

    onPreview,

}: Props) {

    if (!items.length) {

        return (

            <div
                className="
                    flex
                    h-[500px]
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-dashed
                    border-white/10
                    bg-[#08101E]
                "
            >

                <div
                    className="
                        text-center
                    "
                >

                    <div
                        className="
                            text-7xl
                        "
                    >

                        📂

                    </div>

                    <h2
                        className="
                            mt-6
                            text-2xl
                            font-black
                            text-white
                        "
                    >

                        Media Library is Empty

                    </h2>

                    <p
                        className="
                            mt-3
                            text-slate-400
                        "
                    >

                        Upload your first media file.

                    </p>

                </div>

            </div>

        );

    }

    return (

        <div
            className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                2xl:grid-cols-5
            "
        >

            {

                items.map(

                    item=>(

                        <MediaCard

                            key={item.id}

                            item={item}

                            onDelete={

                                onDelete

                            }

                            onPreview={

                                onPreview

                            }

                        />

                    )

                )

            }

        </div>

    );

}