export interface Module {

    readonly id: string;

    readonly name: string;

    register(): Promise<void> | void;

}