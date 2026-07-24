import { Event } from "./Event";

export type EventHandler<T = unknown> = (

    event: Event<T>

) => void;