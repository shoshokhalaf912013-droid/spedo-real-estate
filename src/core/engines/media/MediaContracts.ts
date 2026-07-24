import { MediaAsset } from "./types";

export interface MediaProvider {

    getAll(): Promise<MediaAsset[]>;

    upload(file: File): Promise<MediaAsset>;

    delete(id: string): Promise<void>;

    rename(

        id: string,

        name: string

    ): Promise<MediaAsset>;

}