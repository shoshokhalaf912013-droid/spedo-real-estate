"use client";

import { MediaItem } from "./MediaSelector";

interface MediaGridProps {

    items: MediaItem[];

    onRemove: (

        id: string

    ) => void;

    onPreview?: (

        item: MediaItem

    ) => void;

}

export default function MediaGrid({

    items,

    onRemove,

    onPreview,

}: MediaGridProps) {

    return (

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

            {

                items.length === 0 && (

                    <div className="col-span-full rounded-xl border border-dashed border-slate-700 p-10 text-center text-slate-500">

                        No media selected

                    </div>

                )

            }

            {

                items.map(

                    item => (

                        <div

                            key={item.id}

                            className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900"

                        >

                            <div className="flex h-44 items-center justify-center bg-slate-800">

                                {

                                    item.type ===

                                    "image"

                                    ? (

                                        <img

                                            src={item.url}

                                            alt={item.name}

                                            className="h-full w-full object-cover"

                                        />

                                    )

                                    : item.type ===

                                      "video"

                                    ? (

                                        <div className="text-6xl">

                                            🎥

                                        </div>

                                    )

                                    : (

                                        <div className="text-6xl">

                                            📄

                                        </div>

                                    )

                                }

                            </div>

                            <div className="space-y-4 p-4">

                                <div className="truncate font-bold text-white">

                                    {

                                        item.name

                                    }

                                </div>

                                <div className="flex gap-2">

                                    <button

                                        onClick={() =>

                                            onPreview?.(

                                                item

                                            )

                                        }

                                        className="flex-1 rounded-lg bg-sky-600 py-2 text-sm font-bold text-white"

                                    >

                                        Preview

                                    </button>

                                    <button

                                        onClick={() =>

                                            onRemove(

                                                item.id

                                            )

                                        }

                                        className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-bold text-white"

                                    >

                                        Delete

                                    </button>

                                </div>

                            </div>

                        </div>

                    )

                )

            }

        </div>

    );

}