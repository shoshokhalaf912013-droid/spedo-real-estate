import {

    getMedia,

    uploadMedia,

    deleteMedia,

    renameMedia,

    favoriteMedia,

    setCover,

} from "./media.service";

export const MediaRepository = {

    getAll() {

        return getMedia();

    },

    upload(

        file: File

    ) {

        return uploadMedia(file);

    },

    delete(

        id: string

    ) {

        return deleteMedia(id);

    },

    rename(

        id: string,

        name: string

    ) {

        return renameMedia(

            id,

            name

        );

    },

    favorite(

        id: string

    ) {

        return favoriteMedia(id);

    },

    cover(

        id: string

    ) {

        return setCover(id);

    },

};