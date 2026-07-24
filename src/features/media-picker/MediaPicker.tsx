"use client";

import { MediaLibrary } from "@/features/media-library";
import { MediaItem } from "@/features/media-library/components/MediaGrid";

interface Props {

    open: boolean;

    multiple?: boolean;

    onClose(): void;

    onSelect(
        items: MediaItem[]
    ): void;

}

export default function MediaPicker({

    open,

    multiple = true,

    onClose,

    onSelect,

}: Props) {

    if (!open) {

        return null;

    }

    function handleSelect(

        items: MediaItem[]

    ) {

        onSelect(items);

        onClose();

    }

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                bg-black/70
                overflow-y-auto
                pt-24
                pb-8
            "
        >

            <div
                className="
                    mx-auto
                    w-[92vw]
                    max-w-7xl
                    rounded-2xl
                    bg-[#020817]
                    shadow-2xl
                "
            >

                <div
                    className="
                        sticky
                        top-0
                        z-10
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-700
                        bg-[#020817]
                        p-6
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                    >

                        Media Library

                    </h2>

                    <button

                        onClick={onClose}

                        className="
                            rounded-lg
                            bg-red-600
                            px-5
                            py-2
                            font-semibold
                            text-white
                        "

                    >

                        Close

                    </button>

                </div>

                <div
                    className="
                        p-6
                    "
                >

                    <MediaLibrary

                        selectable

                        multiple={multiple}

                        onSelect={handleSelect}

                    />

                </div>

            </div>

        </div>

    );

}