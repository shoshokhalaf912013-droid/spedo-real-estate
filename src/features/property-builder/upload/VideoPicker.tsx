"use client";

import BasePicker from "./BasePicker";

import type {
    UploadPickerProps,
} from "./UploadDialog";

import type {
    PickerFileMetadata,
} from "./BasePicker";


const MAX_VIDEO_SIZE =
    2 * 1024 * 1024 * 1024;


const VIDEO_TYPES = [
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "video/x-m4v",
];


async function readVideoMetadata(
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


            const video =
                document.createElement(
                    "video"
                );


            video.preload =
                "metadata";


            video.onloadedmetadata =
                () => {

                    resolve({

                        previewUrl,

                        duration:
                            video.duration,

                        width:
                            video.videoWidth,

                        height:
                            video.videoHeight,

                    });


                    video.remove();

                };


            video.onerror =
                () => {

                    URL.revokeObjectURL(
                        previewUrl
                    );


                    reject(
                        new Error(
                            "Unable to read video information."
                        )
                    );

                };


            video.src =
                previewUrl;

        }
    );

}



export default function VideoPicker(
    props: UploadPickerProps
) {


    return (

        <BasePicker

            {...props}


            configuration={{

                uploadType:
                    "video",


                provider:
                    "cloudflare-stream",


                accept:
                    ".mp4,.webm,.mov,.m4v",


                supportedMimeTypes:
                    VIDEO_TYPES,


                maxFileSize:
                    MAX_VIDEO_SIZE,


                heading:
                    "Select property videos",


                description:
                    "Upload MP4, WebM, MOV videos. They will be processed later by UploadEngine.",


                selectButtonLabel:
                    "Select Videos",


                emptySelectionLabel:
                    "No videos selected",


                preparingLabel:
                    "Preparing videos...",


                fileNounSingular:
                    "video",


                fileNounPlural:
                    "videos",


                readMetadata:
                    readVideoMetadata,

            }}


            renderPreview={
                prepared => (

                    <div className="aspect-video bg-black">

                        <video

                            src={
                                prepared
                                    .metadata
                                    .previewUrl
                            }

                            controls

                            className="h-full w-full object-contain"

                        />

                    </div>

                )
            }

        />

    );

}