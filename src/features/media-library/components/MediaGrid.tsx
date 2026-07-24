"use client";

import MediaCard, {
    MediaItem,
} from "./MediaCard";

export type {
    MediaItem,
};

interface Props {

    items: MediaItem[];

    selectable?: boolean;

    selected?: string[];

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

export default function MediaGrid({

    items,

    selectable = false,

    selected = [],

    onPreview,

    onDelete,

    onSelect,

}: Props) {

    if (

        items.length === 0

    ) {

        return (

            <div
                className="
                    flex
                    h-80
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-dashed
                    border-slate-700
                    bg-slate-900
                    text-slate-400
                "
            >

                No media uploaded yet.

            </div>

        );

    }

    return (

        <div
            className="
                mt-8
                grid
                gap-6

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-4
            "
        >

            {

                items.map(

                    item => (

                        <MediaCard

                            key={

                                item.id

                            }

                            item={

                                item

                            }

                            selectable={

                                selectable

                            }

                            selected={

                                selected.includes(

                                    item.id

                                )

                            }

                            onPreview={

                                onPreview

                            }

                            onDelete={

                                onDelete

                            }

                            onSelect={

                                onSelect

                            }

                        />

                    )

                )

            }

        </div>

    );

}