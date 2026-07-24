"use client";

import MediaUploader from "./MediaUploader";

interface Props {

    value: string[];

    onChange: (files: string[]) => void;

}

export default function BrochureUploader({

    value,

    onChange,

}: Props) {

    return (

        <MediaUploader

            title="Brochures & Documents"

            description="
                Upload brochures,
                PDFs,
                price lists,
                payment plans,
                catalogs,
                contracts,
                and all supporting documents.
            "

            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"

            multiple

            value={value}

            onChange={onChange}

        />

    );

}