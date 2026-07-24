import type {

    MediaFile,

    UploadRequest,

} from "./types";

export class StorageClient {

    static async upload(

        request: UploadRequest

    ): Promise<MediaFile> {

        const formData =

            new FormData();

        formData.append(

            "file",

            request.file

        );

        if (

            request.folder

        ) {

            formData.append(

                "folder",

                request.folder

            );

        }

        if (

            request.fileName

        ) {

            formData.append(

                "fileName",

                request.fileName

            );

        }

        if (

            request.tags

        ) {

            formData.append(

                "tags",

                JSON.stringify(

                    request.tags

                )

            );

        }

        if (

            request.metadata

        ) {

            formData.append(

                "metadata",

                JSON.stringify(

                    request.metadata

                )

            );

        }

        const response =

            await fetch(

                "/api/storage/upload",

                {

                    method: "POST",

                    body: formData,

                }

            );

        if (

            !response.ok

        ) {

            const error =

                await response.json();

            throw new Error(

                error.message

            );

        }

        return response.json();

    }

}