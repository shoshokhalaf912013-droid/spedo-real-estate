"use client";

import { MediaItem } from "./MediaGrid";

interface Props {

    item: MediaItem | null;

    onClose(): void;

    onDelete(id: number): void;

    onSetCover(item: MediaItem): void;

}

export default function MediaPreview({

    item,

    onClose,

    onDelete,

    onSetCover,

}: Props) {

    if (!item) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/80
                p-10
            "
        >

            <div
                className="
                    w-full
                    max-w-6xl
                    overflow-hidden
                    rounded-3xl
                    bg-[#08101E]
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        px-8
                        py-6
                    "
                >

                    <div>

                        <h2
                            className="
                                text-3xl
                                font-black
                                text-white
                            "
                        >

                            {item.name}

                        </h2>

                        <p
                            className="
                                mt-2
                                text-slate-400
                            "
                        >

                            {item.type.toUpperCase()}

                        </p>

                    </div>

                    <button

                        onClick={onClose}

                        className="
                            text-4xl
                            text-white
                        "

                    >

                        ✕

                    </button>

                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-center
                        bg-black
                        p-8
                    "
                >

                    {

                        item.type === "image" &&

                        <img

                            src={item.url}

                            alt={item.name}

                            className="
                                max-h-[70vh]
                                rounded-2xl
                            "

                        />

                    }

                    {

                        item.type === "video" &&

                        <video

                            controls

                            autoPlay

                            className="
                                max-h-[70vh]
                                rounded-2xl
                            "

                            src={item.url}

                        />

                    }

                    {

                        item.type === "pdf" &&

                        <iframe

                            src={item.url}

                            className="
                                h-[70vh]
                                w-full
                                rounded-2xl
                                bg-white
                            "

                        />

                    }

                </div>

                <div
                    className="
                        grid
                        gap-4
                        border-t
                        border-white/10
                        p-8
                        md:grid-cols-4
                    "
                >

                    <button

                        onClick={()=>

                            onSetCover(item)

                        }

                        className="
                            rounded-xl
                            bg-[#F97316]
                            py-4
                            font-black
                            text-black
                        "

                    >

                        Set As Cover

                    </button>

                    <button
                        className="
                            rounded-xl
                            border
                            border-white/10
                            py-4
                            text-white
                        "
                    >

                        Add To Gallery

                    </button>

                    <button
                        className="
                            rounded-xl
                            border
                            border-white/10
                            py-4
                            text-white
                        "
                    >

                        Copy URL

                    </button>

                    <button

                        onClick={()=>

                            onDelete(item.id)

                        }

                        className="
                            rounded-xl
                            bg-red-600
                            py-4
                            font-bold
                            text-white
                        "

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}