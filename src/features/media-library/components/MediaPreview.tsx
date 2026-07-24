"use client";

import { MediaItem } from "./MediaCard";

interface Props {

    item: MediaItem | null;

    onClose(): void;

    onDelete(
        id: string
    ): void;

    onSetCover(
        item: MediaItem
    ): void;

}

export default function MediaPreview({

    item,

    onClose,

    onDelete,

    onSetCover,

}: Props) {

    if (!item) {

        return null;

    }

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
            "
        >

            <div
                className="
                    w-[900px]
                    max-w-[95vw]
                    rounded-2xl
                    bg-slate-900
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

                        {item.name}

                    </h2>

                    <button

                        onClick={onClose}

                        className="
                            rounded-lg
                            bg-red-600
                            px-4
                            py-2
                            text-white
                        "

                    >

                        Close

                    </button>

                </div>

                {

                    item.type === "image" && (

                        <img

                            src={item.url}

                            alt={item.name}

                            className="
                                max-h-[70vh]
                                w-full
                                rounded-xl
                                object-contain
                            "

                        />

                    )

                }

                {

                    item.type === "video" && (

                        <video

                            src={item.url}

                            controls

                            className="
                                max-h-[70vh]
                                w-full
                                rounded-xl
                            "

                        />

                    )

                }

                {

                    item.type === "pdf" && (

                        <iframe

                            src={item.url}

                            className="
                                h-[70vh]
                                w-full
                                rounded-xl
                            "

                        />

                    )

                }

                <div
                    className="
                        mt-6
                        flex
                        justify-end
                        gap-3
                    "
                >

                    <button

                        onClick={() =>

                            onSetCover(item)

                        }

                        className="
                            rounded-lg
                            bg-green-600
                            px-5
                            py-2
                            text-white
                        "

                    >

                        Set Cover

                    </button>

                    <button

                        onClick={() => {

                            onDelete(item.id);

                            onClose();

                        }}

                        className="
                            rounded-lg
                            bg-red-600
                            px-5
                            py-2
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