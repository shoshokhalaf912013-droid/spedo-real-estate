import { Event } from "./Event";
import { EventHandler } from "./EventHandler";

export class EventBus {

    private handlers = new Map<
        string,
        EventHandler[]
    >();

    on<T = unknown>(

        type: string,

        handler: EventHandler<T>

    ): void {

        const handlers =
            this.handlers.get(type) ?? [];

        handlers.push(
            handler as EventHandler
        );

        this.handlers.set(
            type,
            handlers
        );

    }

    off(

        type: string,

        handler: EventHandler

    ): void {

        const handlers =
            this.handlers.get(type);

        if (!handlers)
            return;

        this.handlers.set(

            type,

            handlers.filter(

                h => h !== handler

            )

        );

    }

    emit<T = unknown>(

        type: string,

        payload: T

    ): void {

        const event: Event<T> = {

            type,

            timestamp: new Date(),

            payload

        };

        const handlers =
            this.handlers.get(type);

        if (!handlers)
            return;

        for (const handler of handlers) {

            handler(event);

        }

    }

    clear(): void {

        this.handlers.clear();

    }

}