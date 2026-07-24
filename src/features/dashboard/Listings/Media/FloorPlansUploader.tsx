"use client";

import MediaUploader from "./MediaUploader";

interface Props {

    value: string[];

    onChange: (files: string[]) => void;

}

export default function FloorPlansUploader({

    value,

    onChange,

}: Props) {

    return (

        <MediaUploader

            title="Floor Plans"

            description="
                Upload architectural floor plans,
                unit layouts,
                engineering drawings,
                and apartment plans.
            "

            accept="image/*,.pdf"

            multiple

            value={value}

            onChange={onChange}

        />

    );

}