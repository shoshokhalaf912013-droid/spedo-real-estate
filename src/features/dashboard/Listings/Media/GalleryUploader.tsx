"use client";

import MediaUploader from "./MediaUploader";

interface Props {

    value: string[];

    onChange: (files: string[]) => void;

}

export default function GalleryUploader({

    value,

    onChange,

}: Props) {

    return (

        <MediaUploader

            title="Gallery"

            description="Upload all property gallery images."

            accept="image/*"

            multiple

            value={value}

            onChange={onChange}

        />

    );

}