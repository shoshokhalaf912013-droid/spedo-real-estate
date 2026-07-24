export class Container {

    private readonly services =
        new Map<string, unknown>();

    register<T>(
        key: string,
        value: T
    ): void {

        this.services.set(
            key,
            value
        );

    }

    resolve<T>(
        key: string
    ): T {

        const service =
            this.services.get(key);

        if (!service) {

            throw new Error(
                `Service '${key}' not found.`
            );

        }

        return service as T;

    }

    tryResolve<T>(
        key: string
    ): T | undefined {

        return this.services.get(
            key
        ) as T | undefined;

    }

    has(
        key: string
    ): boolean {

        return this.services.has(key);

    }

    remove(
        key: string
    ): void {

        this.services.delete(key);

    }

    clear(): void {

        this.services.clear();

    }

    count(): number {

        return this.services.size;

    }

    keys(): string[] {

        return [
            ...this.services.keys()
        ];

    }

}