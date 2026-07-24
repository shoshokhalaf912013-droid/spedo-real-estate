import type { StorageProvider } from "../provider";

import type {
    MediaFile,
    UploadRequest,
} from "../types";

export class R2Provider implements StorageProvider {

    async upload(
        request: UploadRequest
    ): Promise<MediaFile> {

        void request;

        throw new Error(
            "Cloudflare R2 provider not implemented yet."
        );

    }

}