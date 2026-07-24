import type {

    MediaFile,

    UploadRequest,

} from "./types";

export interface StorageProvider {

    upload(

        request: UploadRequest

    ): Promise<MediaFile>;

}