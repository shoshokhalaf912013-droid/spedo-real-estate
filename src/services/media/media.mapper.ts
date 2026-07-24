import { Media } from "./media.types";

export function mapMedia(
    data: any
): Media {

    return {

        id: data.id,

        name: data.name,

        url: data.url,

        type: data.type,

        size: data.size ?? 0,

        width: data.width,

        height: data.height,

        favorite:
            data.favorite ?? false,

        cover:
            data.cover ?? false,

        createdAt:
            data.createdAt,

        updatedAt:
            data.updatedAt,

    };

}

export function mapMediaArray(
    data: any[]
): Media[] {

    return data.map(
        mapMedia
    );

}