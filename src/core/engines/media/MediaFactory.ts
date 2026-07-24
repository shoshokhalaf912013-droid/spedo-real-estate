import { MediaAsset } from "./types";

export class MediaFactory {

    static create(

        data: Partial<MediaAsset>

    ): MediaAsset {

        return {

            id:

                crypto.randomUUID(),

            name:

                data.name ?? "",

            url:

                data.url ?? "",

            type:

                data.type ?? "image",

            folder:

                data.folder,

            tags:

                data.tags ?? [],

            cover:

                data.cover ?? false,

            favorite:

                data.favorite ?? false,

            createdAt:

                new Date(),

        };

    }

}