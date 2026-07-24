"use client";

export interface MediaItem {

    id: string;

    name: string;

    url: string;

    type: "image" | "video" | "pdf";

}

interface Props {

    item: MediaItem;

    selectable?: boolean;

    selected?: boolean;

    onPreview(
        item: MediaItem
    ): void;

    onDelete(
        id: string
    ): void;

    onSelect?(
        item: MediaItem
    ): void;

}

export default function MediaCard({

    item,

    selectable = false,

    selected = false,

    onPreview,

    onDelete,

    onSelect,

}: Props) {

    return (

        <div
            className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                transition
                hover:border-orange-500
            "
        >

            <button

                onClick={() =>

                    selectable

                        ? onSelect?.(

                              item

                          )

                        : onPreview(

                              item

                          )

                }

                className="
                    block
                    h-52
                    w-full
                    overflow-hidden
                    bg-[#020817]
                "

            >

                {

                    item.type === "image" && (

                        <img

                            src={item.url}

                            alt={item.name}

                            className="
                                h-full
                                w-full
                                object-cover
                            "

                        />

                    )

                }

                {

                    item.type === "video" && (

                        <video

                            src={item.url}

                            className="
                                h-full
                                w-full
                                object-cover
                            "

                        />

                    )

                }

                {

                    item.type === "pdf" && (

                        <div
                            className="
                                flex
                                h-full
                                items-center
                                justify-center
                                text-6xl
                            "
                        >

                            📄

                        </div>

                    )

                }

            </button>

            <div
                className="
                    space-y-4
                    p-4
                "
            >

                <div>

                    <h3
                        className="
                            truncate
                            text-sm
                            font-semibold
                            text-white
                        "
                    >

                        {item.name}

                    </h3>

                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >

                    {

                        selectable ? (

                            <button

                                onClick={() =>

                                    onSelect?.(

                                        item

                                    )

                                }

                                className={`
                                    rounded-lg
                                    px-4
                                    py-2
                                    text-sm
                                    font-semibold
                                    transition

                                    ${
                                        selected

                                            ? "bg-green-600 text-white"

                                            : "bg-orange-500 text-white hover:bg-orange-600"

                                    }
                                `}

                            >

                                {

                                    selected

                                        ? "Selected"

                                        : "Select"

                                }

                            </button>

                        ) : (

                            <button

                                onClick={() =>

                                    onPreview(

                                        item

                                    )

                                }

                                className="
                                    rounded-lg
                                    bg-blue-600
                                    px-4
                                    py-2
                                    text-sm
                                    text-white
                                "

                            >

                                Preview

                            </button>

                        )

                    }

                    <button

                        onClick={() =>

                            onDelete(

                                item.id

                            )

                        }

                        className="
                            rounded-lg
                            bg-red-600
                            px-4
                            py-2
                            text-sm
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