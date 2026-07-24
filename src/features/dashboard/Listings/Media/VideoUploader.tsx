"use client";

import MediaUploader from "./MediaUploader";

interface Props {

    value: string[];

    onChange: (files: string[]) => void;

}

export default function VideoUploader({

    value,

    onChange,

}: Props) {

    return (

        <MediaUploader

            title="Property Videos"

            description="
                Upload promotional videos,
                walkthrough videos,
                drone footage,
                or YouTube exported videos.
            "

            accept="video/*"

            multiple

            value={value}

            onChange={onChange}

        />

    );

}