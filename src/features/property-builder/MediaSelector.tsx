"use client";

import { useMemo, useState } from "react";

export type MediaType =
    | "image"
    | "video"
    | "pdf";

export interface MediaItem {

    id: string;

    name: string;

    url: string;

    type: MediaType;

}

interface MediaSelectorProps {

    open: boolean;

    type: MediaType;

    items: MediaItem[];

    multiple?: boolean;

    onClose: () => void;

    onAttach: (

        items: MediaItem[]

    ) => void;

}

export default function MediaSelector({

    open,

    type,

    items,

    multiple = true,

    onClose,

    onAttach,

}: MediaSelectorProps) {

    const [

        search,

        setSearch,

    ] = useState("");

    const [

        selected,

        setSelected,

    ] = useState<string[]>([]);

    const filtered = useMemo(

        () =>

            items.filter(

                item =>

                    item.type === type &&

                    item.name

                        .toLowerCase()

                        .includes(

                            search.toLowerCase()

                        )

            ),

        [

            items,

            search,

            type,

        ]

    );

    function toggle(

        id: string

    ) {

        if (

            multiple

        ) {

            setSelected(

                previous =>

                    previous.includes(

                        id

                    )

                        ? previous.filter(

                              x =>

                                  x !==

                                  id

                          )

                        : [

                              ...previous,

                              id,

                          ]

            );

        } else {

            setSelected([

                id,

            ]);

        }

    }

    function attach() {

        const result =

            filtered.filter(

                item =>

                    selected.includes(

                        item.id

                    )

            );

        onAttach(

            result

        );

        setSelected([]);

        onClose();

    }

    if (!open)

        return null;

    return (

        <div className="fixed inset-0 z-50 bg-black/70">

            <div className="mx-auto mt-10 max-w-7xl rounded-2xl bg-slate-900 p-6">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-white">

                        Media Library

                    </h2>

                    <button

                        onClick={onClose}

                        className="rounded-lg bg-red-600 px-4 py-2 text-white"

                    >

                        Close

                    </button>

                </div>

                <input

                    value={search}

                    onChange={e =>

                        setSearch(

                            e.target.value

                        )

                    }

                    placeholder="Search media..."

                    className="mb-6 w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                />

                <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                    {

                        filtered.map(

                            item => (

                                <button

                                    key={item.id}

                                    onClick={() =>

                                        toggle(

                                            item.id

                                        )

                                    }

                                    className={`rounded-xl border p-4 transition ${
                                        selected.includes(

                                            item.id

                                        )

                                            ? "border-orange-500"

                                            : "border-slate-700"
                                    }`}

                                >

                                    <div className="mb-3 flex h-32 items-center justify-center rounded-lg bg-slate-800">

                                        {

                                            item.type ===

                                            "image"

                                                ? "🖼️"

                                                : item.type ===

                                                  "video"

                                                ? "🎥"

                                                : "📄"

                                        }

                                    </div>

                                    <div className="truncate text-sm text-white">

                                        {

                                            item.name

                                        }

                                    </div>

                                </button>

                            )

                        )

                    }

                </div>

                <div className="mt-8 flex justify-end gap-3">

                    <button

                        onClick={onClose}

                        className="rounded-xl bg-slate-700 px-6 py-3 text-white"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={attach}

                        className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white"

                    >

                        Attach Selected

                    </button>

                </div>

            </div>

        </div>

    );

}