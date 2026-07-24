"use client";

import { MediaItem } from "./MediaGrid";

interface Props {

    item: MediaItem;

    onDelete(id: number): void;

    onPreview(item: MediaItem): void;

}

export default function MediaCard({

    item,

    onDelete,

    onPreview,

}: Props) {

    return (

        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#08101E]
                transition
                hover:border-[#F97316]
            "
        >

            {

                item.type === "image" &&

                <img

                    src={item.url}

                    alt={item.name}

                    className="
                        h-56
                        w-full
                        object-cover
                    "

                />

            }

            {

                item.type === "video" &&

                <video

                    className="
                        h-56
                        w-full
                    "

                    src={item.url}

                />

            }

            {

                item.type === "pdf" &&

                <div
                    className="
                        flex
                        h-56
                        items-center
                        justify-center
                        text-7xl
                    "
                >

                    📄

                </div>

            }

            <div
                className="
                    p-5
                "
            >

                <div
                    className="
                        truncate
                        text-lg
                        font-bold
                        text-white
                    "
                >

                    {item.name}

                </div>

                <div
                    className="
                        mt-5
                        grid
                        grid-cols-2
                        gap-3
                    "
                >

                    <button

                        onClick={()=>

                            onPreview(item)

                        }

                        className="
                            rounded-xl
                            border
                            border-[#F97316]
                            py-3
                            text-sm
                            font-bold
                            text-[#F97316]
                            transition
                            hover:bg-[#F97316]
                            hover:text-black
                        "

                    >

                        Preview

                    </button>

                    <button

                        onClick={()=>

                            onDelete(item.id)

                        }

                        className="
                            rounded-xl
                            bg-red-600
                            py-3
                            text-sm
                            font-bold
                            text-white
                            transition
                            hover:bg-red-700
                        "

                    >

                        Delete

                    </button>

                </div>

                <div
                    className="
                        mt-3
                        grid
                        grid-cols-2
                        gap-3
                    "
                >

                    <button
                        className="
                            rounded-xl
                            border
                            border-white/10
                            py-3
                            text-sm
                            text-white
                        "
                    >

                        Rename

                    </button>

                    <button
                        className="
                            rounded-xl
                            border
                            border-white/10
                            py-3
                            text-sm
                            text-white
                        "
                    >

                        Copy URL

                    </button>

                </div>

                <button
                    className="
                        mt-3
                        w-full
                        rounded-xl
                        bg-[#F97316]
                        py-3
                        text-sm
                        font-black
                        text-black
                    "
                >

                    Set As Cover

                </button>

            </div>

        </div>

    );

}