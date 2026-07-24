export interface KernelModule {

    id: string;

    name: string;

    version: string;

    boot?(): void;

    shutdown?(): void;

}

export class ModuleRegistry {

    private readonly modules =
        new Map<string, KernelModule>();

    register(
        module: KernelModule
    ): void {

        if (this.modules.has(module.id)) {

            throw new Error(
                `Module '${module.id}' already registered.`
            );

        }

        this.modules.set(
            module.id,
            module
        );

    }

    get(
        id: string
    ): KernelModule | undefined {

        return this.modules.get(id);

    }

    has(
        id: string
    ): boolean {

        return this.modules.has(id);

    }

    all(): KernelModule[] {

        return [
            ...this.modules.values()
        ];

    }

    remove(
        id: string
    ): boolean {

        return this.modules.delete(id);

    }

    clear(): void {

        this.modules.clear();

    }

    count(): number {

        return this.modules.size;

    }

}