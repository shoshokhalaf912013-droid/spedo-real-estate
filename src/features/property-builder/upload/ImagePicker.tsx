"use client";

import BasePicker from "./BasePicker";

import type {
    UploadPickerProps,
} from "./UploadDialog";

import type {
    PickerFileMetadata,
} from "./BasePicker";


const MAX_IMAGE_SIZE =
    25 * 1024 * 1024;


const IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
];


async function readImageMetadata(
    file: File
): Promise<PickerFileMetadata> {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            const previewUrl =
                URL.createObjectURL(
                    file
                );


            const image =
                new Image();


            image.onload =
                () => {

                    resolve({

                        previewUrl,

                        width:
                            image.naturalWidth,

                        height:
                            image.naturalHeight,

                    });

                };


            image.onerror =
                () => {

                    URL.revokeObjectURL(
                        previewUrl
                    );


                    reject(
                        new Error(
                            "Unable to read image information."
                        )
                    );

                };


            image.src =
                previewUrl;

        }
    );

}



export default function ImagePicker(
    props: UploadPickerProps
) {


    return (

        <BasePicker

            {...props}


            configuration={{

                uploadType:
                    "image",


                provider:
                    "cloudinary",


                accept:
                    ".jpg,.jpeg,.png,.webp,.avif",


                supportedMimeTypes:
                    IMAGE_TYPES,


                maxFileSize:
                    MAX_IMAGE_SIZE,


                heading:
                    "Select property images",


                description:
                    "Upload JPG, PNG, WebP, or AVIF images.",


                selectButtonLabel:
                    "Select Images",


                emptySelectionLabel:
                    "No images selected",


                preparingLabel:
                    "Preparing images...",


                fileNounSingular:
                    "image",


                fileNounPlural:
                    "images",


                readMetadata:
                    readImageMetadata,

            }}


            renderPreview={
                prepared => (

                    <div className="aspect-video bg-black">

                        <img

                            src={
                                prepared
                                    .metadata
                                    .previewUrl
                            }

                            alt={
                                prepared
                                    .task
                                    .file
                                    .name
                            }

                            className="h-full w-full object-contain"

                        />

                    </div>

                )
            }

        />

    );

}