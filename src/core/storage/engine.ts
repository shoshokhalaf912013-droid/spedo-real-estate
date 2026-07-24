import type {

    MediaFile,

    UploadRequest,

} from "./types";

import type {

    StorageProvider,

} from "./provider";

import {

    CloudinaryProvider,

} from "./providers/cloudinary";

import {

    R2Provider,

} from "./providers/r2";

class StorageEngineClass {

    private readonly providers: {

        image: StorageProvider;

        video: StorageProvider;

        pdf: StorageProvider;

        document: StorageProvider;

        other: StorageProvider;

    };

    constructor() {

        const cloudinary =

            new CloudinaryProvider();

        const r2 =

            new R2Provider();

        this.providers = {

            image: cloudinary,

            video: r2,

            pdf: r2,

            document: r2,

            other: r2,

        };

    }

    async upload(

        request: UploadRequest

    ): Promise<MediaFile> {

        const type =

            request.file.type;

        if (

            type.startsWith(

                "image/"

            )

        ) {

            return this.providers.image.upload(

                request

            );

        }

        if (

            type.startsWith(

                "video/"

            )

        ) {

            return this.providers.video.upload(

                request

            );

        }

        if (

            type ===

            "application/pdf"

        ) {

            return this.providers.pdf.upload(

                request

            );

        }

        return this.providers.other.upload(

            request

        );

    }

}

export const StorageEngine =

    new StorageEngineClass();