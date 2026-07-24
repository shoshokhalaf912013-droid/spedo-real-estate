"use client";

import { useEffect, useRef, useState } from "react";

import MediaToolbar from "./components/MediaToolbar";

import MediaGrid, {
    MediaItem,
} from "./components/MediaGrid";

import MediaPreview from "./components/MediaPreview";

interface Props {

    selectable?: boolean;

    multiple?: boolean;

    onSelect?(
        items: MediaItem[]
    ): void;

}

export default function MediaLibrary({

    selectable = false,

    multiple = true,

    onSelect,

}: Props) {

    const [

        items,

        setItems,

    ] = useState<MediaItem[]>([]);

    const [

        preview,

        setPreview,

    ] = useState<MediaItem | null>(null);

    const [

        selected,

        setSelected,

    ] = useState<string[]>([]);

    const inputRef =
        useRef<HTMLInputElement>(null);

    useEffect(() => {

        loadMedia();

    }, []);

    async function loadMedia() {

        try {

            const response =
                await fetch("/api/media");

            if (!response.ok) {

                return;

            }

            const data =
                await response.json();
	
	    console.log("MEDIA DATA", data);

            setItems(data);

        }

        catch (error) {

            console.error(error);

        }

    }

    async function upload(

        e: React.ChangeEvent<HTMLInputElement>

    ) {

        const files =

            Array.from(

                e.target.files ?? []

            );

        for (

            const file

            of files

        ) {

            const form =
                new FormData();

            form.append(

                "file",

                file

            );

            try {
      
                 const uploadUrl =

  		     file.type.startsWith(

                       "image/"

                  )

                     ? "/api/cloudinary/upload"

                     : "/api/r2/upload";

const response =

    await fetch(

        uploadUrl,

        {

            method: "POST",

            body: form,

        }

    );

                const result =
                    await response.json();

                console.log(
                   "========== UPLOAD =========="
);

console.log(result);

console.log(
    "============================"
);
                if (

                    !response.ok

                ) {

                    alert(
                        "Upload Failed"
                    );

                    continue;

                }

                alert(
                    "Upload Success"
                );

            }

            catch (error) {

                console.error(error);

                alert(
                    "Upload Error"
                );

            }

        }

        await loadMedia();

        e.target.value = "";

    }

    function remove(

        id: string

    ) {

        setItems(

            previous =>

                previous.filter(

                    item =>

                        item.id !== id

                )

        );

    }

    function toggleSelection(

        item: MediaItem

    ) {

        if (

            !multiple

        ) {

            onSelect?.([

                item,

            ]);

            return;

        }

        setSelected(

            previous =>

                previous.includes(

                    item.id

                )

                    ? previous.filter(

                          id =>

                              id !== item.id

                      )

                    : [

                          ...previous,

                          item.id,

                      ]

        );

    }

    function confirmSelection() {

        const result =

            items.filter(

                item =>

                    selected.includes(

                        item.id

                    )

            );

        onSelect?.(

            result

        );

    }

    return (

        <div className="space-y-8">

            <MediaToolbar

                onUpload={() =>

                    inputRef.current?.click()

                }

            />

            <input

                hidden

                ref={inputRef}

                multiple

                type="file"

                accept="image/*,video/*,.pdf"

                onChange={upload}

            />

            <MediaGrid

                items={items}

                selectable={selectable}

                selected={selected}

                onPreview={setPreview}

                onDelete={remove}

                onSelect={toggleSelection}

            />

            {

                selectable && multiple && (

                    <div
                        className="
                            flex
                            justify-end
                        "
                    >

                        <button

                            onClick={

                                confirmSelection

                            }

                            className="
                                rounded-xl
                                bg-orange-500
                                px-8
                                py-3
                                font-bold
                                text-white
                            "

                        >

                            Select

                        </button>

                    </div>

                )

            }

            <MediaPreview

                item={preview}

                onClose={() =>

                    setPreview(

                        null

                    )

                }

                onDelete={remove}

                onSetCover={() => {}}

            />

        </div>

    );

}