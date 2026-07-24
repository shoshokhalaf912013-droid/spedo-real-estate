import {
    mapMedia,
    mapMediaArray,
} from "./media.mapper";

import { Media } from "./media.types";

export async function getMedia(): Promise<Media[]> {

    const response = await fetch(

        "/api/media",

        {

            cache: "no-store",

        }

    );

    if (!response.ok) {

        throw new Error(

            "Failed to load media."

        );

    }

    const data = await response.json();

    return mapMediaArray(data);

}

export async function uploadMedia(

    file: File

): Promise<Media> {

    const form = new FormData();

    form.append(

        "file",

        file

    );

    const response = await fetch(

        "/api/upload",

        {

            method: "POST",

            body: form,

        }

    );

    if (!response.ok) {

        throw new Error(

            "Upload failed."

        );

    }

    const data = await response.json();

    return mapMedia(data);

}

export async function deleteMedia(

    id: string

): Promise<void> {

    const response = await fetch(

        `/api/media/${id}`,

        {

            method: "DELETE",

        }

    );

    if (!response.ok) {

        throw new Error(

            "Delete failed."

        );

    }

}

export async function renameMedia(

    id: string,

    name: string

): Promise<Media> {

    const response = await fetch(

        `/api/media/${id}`,

        {

            method: "PATCH",

            headers: {

                "Content-Type":

                    "application/json",

            },

            body: JSON.stringify({

                name,

            }),

        }

    );

    if (!response.ok) {

        throw new Error(

            "Rename failed."

        );

    }

    const data = await response.json();

    return mapMedia(data);

}

export async function favoriteMedia(

    id: string

): Promise<Media> {

    const response = await fetch(

        `/api/media/${id}/favorite`,

        {

            method: "POST",

        }

    );

    if (!response.ok) {

        throw new Error(

            "Favorite failed."

        );

    }

    const data = await response.json();

    return mapMedia(data);

}

export async function setCover(

    id: string

): Promise<Media> {

    const response = await fetch(

        `/api/media/${id}/cover`,

        {

            method: "POST",

        }

    );

    if (!response.ok) {

        throw new Error(

            "Set cover failed."

        );

    }

    const data = await response.json();

    return mapMedia(data);

}