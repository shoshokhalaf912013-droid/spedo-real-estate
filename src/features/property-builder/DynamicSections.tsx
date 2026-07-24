"use client";

import { useMemo, useState } from "react";

interface Section {

    id: string;

    type: string;

    title: string;

    hidden: boolean;

}

const AVAILABLE_SECTIONS = [

    {
        type: "overview",
        title: "Overview",
    },

    {
        type: "gallery",
        title: "Gallery",
    },

    {
        type: "video",
        title: "Video",
    },

    {
        type: "floorPlans",
        title: "Floor Plans",
    },

    {
        type: "features",
        title: "Features",
    },

    {
        type: "amenities",
        title: "Amenities",
    },

    {
        type: "location",
        title: "Location",
    },

    {
        type: "paymentPlan",
        title: "Payment Plan",
    },

    {
        type: "faq",
        title: "FAQ",
    },

    {
        type: "documents",
        title: "Documents",
    },

    {
        type: "virtualTour",
        title: "Virtual Tour",
    },

    {
        type: "nearby",
        title: "Nearby Places",
    },

    {
        type: "custom",
        title: "Custom Section",
    },

];

export default function DynamicSections() {

    const [

        sections,

        setSections,

    ] = useState<Section[]>([]);

    const [

        showPicker,

        setShowPicker,

    ] = useState(false);

    const [

        search,

        setSearch,

    ] = useState("");

    const filteredSections = useMemo(

        () =>

            AVAILABLE_SECTIONS.filter(

                section =>

                    section.title

                        .toLowerCase()

                        .includes(

                            search.toLowerCase()

                        )

            ),

        [search]

    );

    function addSection(

        type: string,

        title: string

    ) {

        setSections(

            previous => [

                ...previous,

                {

                    id:

                        crypto.randomUUID(),

                    type,

                    title,

                    hidden: false,

                },

            ]

        );

        setShowPicker(false);

        setSearch("");

    }

    function removeSection(

        id: string

    ) {

        setSections(

            previous =>

                previous.filter(

                    section =>

                        section.id !== id

                )

        );

    }

    function duplicateSection(

        id: string

    ) {

        const item =

            sections.find(

                section =>

                    section.id === id

            );

        if (!item) return;

        setSections(

            previous => [

                ...previous,

                {

                    ...item,

                    id:

                        crypto.randomUUID(),

                    title:

                        item.title +

                        " Copy",

                },

            ]

        );

    }

    function toggleHidden(

        id: string

    ) {

        setSections(

            previous =>

                previous.map(

                    section =>

                        section.id === id

                            ? {

                                  ...section,

                                  hidden:

                                      !section.hidden,

                              }

                            : section

                )

        );

    }

    function moveUp(

        index: number

    ) {

        if (

            index === 0

        )

            return;

        const items = [

            ...sections,

        ];

        [

            items[index - 1],

            items[index],

        ] = [

            items[index],

            items[index - 1],

        ];

        setSections(items);

    }

    function moveDown(

        index: number

    ) {

        if (

            index ===

            sections.length - 1

        )

            return;

        const items = [

            ...sections,

        ];

        [

            items[index + 1],

            items[index],

        ] = [

            items[index],

            items[index + 1],

        ];

        setSections(items);

    }

    return (

        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold text-orange-500">

                    Dynamic Sections

                </h2>

                <button

                    onClick={() =>

                        setShowPicker(

                            true

                        )

                    }

                    className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white"

                >

                    + Add Section

                </button>

            </div>

	               {

                showPicker && (

                    <div className="mb-8 rounded-2xl border border-slate-700 bg-[#020817] p-6">

                        <div className="mb-5 flex items-center justify-between">

                            <h3 className="text-xl font-bold text-white">

                                Select Section

                            </h3>

                            <button

                                onClick={() => {

                                    setShowPicker(false);

                                    setSearch("");

                                }}

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

                            placeholder="Search section..."

                            className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"

                        />

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                            {

                                filteredSections.map(

                                    section => (

                                        <button

                                            key={section.type}

                                            onClick={() =>

                                                addSection(

                                                    section.type,

                                                    section.title

                                                )

                                            }

                                            className="rounded-xl border border-slate-700 bg-slate-900 p-5 text-left transition hover:border-orange-500"

                                        >

                                            <div className="font-bold text-white">

                                                {section.title}

                                            </div>

                                            <div className="mt-2 text-sm text-slate-400">

                                                Click to add this section

                                            </div>

                                        </button>

                                    )

                                )

                            }

                        </div>

                    </div>

                )

            }

            <div className="space-y-4">

                {

                    sections.length === 0 && (

                        <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center text-slate-500">

                            No sections added yet.

                        </div>

                    )

                }

                {

                    sections.map(

                        (

                            section,

                            index

                        ) => (

                            <div

                                key={section.id}

                                className="rounded-xl border border-slate-700 bg-[#020817] p-5"

                            >

                                <div className="flex items-center justify-between">

                                    <div>

                                        <h3 className="font-bold text-white">

                                            {section.title}

                                        </h3>

                                        <p className="mt-1 text-sm text-slate-400">

                                            Type : {section.type}

                                        </p>

                                    </div>

                                    <div className="flex flex-wrap gap-2">

                                        <button

                                            onClick={() =>

                                                moveUp(

                                                    index

                                                )

                                            }

                                            className="rounded-lg bg-slate-700 px-3 py-2 text-white"

                                        >

                                            ↑

                                        </button>

                                        <button

                                            onClick={() =>

                                                moveDown(

                                                    index

                                                )

                                            }

                                            className="rounded-lg bg-slate-700 px-3 py-2 text-white"

                                        >

                                            ↓

                                        </button>

                                        <button

                                            onClick={() =>

                                                duplicateSection(

                                                    section.id

                                                )

                                            }

                                            className="rounded-lg bg-sky-600 px-3 py-2 text-white"

                                        >

                                            Duplicate

                                        </button>

                                        <button

                                            onClick={() =>

                                                toggleHidden(

                                                    section.id

                                                )

                                            }

                                            className="rounded-lg bg-amber-600 px-3 py-2 text-white"

                                        >

                                            {

                                                section.hidden

                                                    ? "Show"

                                                    : "Hide"

                                            }

                                        </button>

                                        <button

                                            onClick={() =>

                                                removeSection(

                                                    section.id

                                                )

                                            }

                                            className="rounded-lg bg-red-600 px-3 py-2 text-white"

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

        </section>

    );

}