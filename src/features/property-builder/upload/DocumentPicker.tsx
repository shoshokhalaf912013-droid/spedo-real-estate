"use client";

import BasePicker from "./BasePicker";

import type {
    UploadPickerProps,
} from "./UploadDialog";

import type {
    PickerFileMetadata,
} from "./BasePicker";


const MAX_DOCUMENT_SIZE =
    100 * 1024 * 1024;


const DOCUMENT_TYPES = [
    "application/pdf",
];


export default function DocumentPicker(
    props: UploadPickerProps
) {


    return (

        <BasePicker

            {...props}


            configuration={{

                uploadType:
                    "document",


                provider:
                    "cloudflare-r2",


                accept:
                    ".pdf",


                supportedMimeTypes:
                    DOCUMENT_TYPES,


                maxFileSize:
                    MAX_DOCUMENT_SIZE,


                heading:
                    "Select documents",


                description:
                    "Upload PDF documents related to the property.",


                selectButtonLabel:
                    "Select Documents",


                emptySelectionLabel:
                    "No documents selected",


                preparingLabel:
                    "Preparing documents...",


                fileNounSingular:
                    "document",


                fileNounPlural:
                    "documents",


            }}


            renderPreview={
                prepared => (

                    <div className="flex aspect-video items-center justify-center bg-slate-950">

                        <div className="text-center">

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mx-auto h-12 w-12 text-red-400"
                            >
                                <path d="M6 2h9l3 3v17H6z" />

                                <path d="M14 2v4h4" />

                                <path d="M9 14h6" />

                                <path d="M9 18h6" />

                            </svg>


                            <p className="mt-3 text-sm font-bold text-white">
                                PDF Document
                            </p>

                        </div>

                    </div>

                )
            }

        />

    );

}