"use client";

import MainMediaLibrary from "@/features/media-library/MediaLibrary";

type MediaType =
    | "image"
    | "video"
    | "pdf";

interface MediaItem {
    id: string;
    name: string;
    url: string;
    type: MediaType;
}

interface Props {
    open: boolean;
    type: MediaType;
    onClose: () => void;
    onSelect: (
        item: MediaItem
    ) => void;
}

export default function MediaLibrary(
    props: Props
) {
    if (!props.open) {
        return null;
    }

    return (
        <MainMediaLibrary
            selectable
            multiple={false}
            onSelect={(items) => {
                if (items.length === 0) {
                    return;
                }

                props.onSelect({
                    id: items[0].id,
                    name: items[0].name,
                    url: items[0].url,
                    type: items[0].type as MediaType,
                });

                props.onClose();
            }}
        />
    );
}