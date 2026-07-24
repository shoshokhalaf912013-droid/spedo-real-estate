export interface Engine {

    readonly id: string;

    readonly name: string;

    readonly version: string;

    boot(): Promise<void> | void;

    shutdown?(): Promise<void> | void;

}