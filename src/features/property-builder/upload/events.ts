export const UploadEvents = {

    START: "upload:start",

    PREPARE: "upload:prepare",

    QUEUE: "upload:queue",

    PROGRESS: "upload:progress",

    PAUSE: "upload:pause",

    RESUME: "upload:resume",

    RETRY: "upload:retry",

    CANCEL: "upload:cancel",

    COMPLETE: "upload:complete",

    FAILED: "upload:failed",

    NETWORK_LOST: "upload:network-lost",

    NETWORK_RESTORED: "upload:network-restored",

    SESSION_CREATED: "upload:session-created",

    SESSION_RESTORED: "upload:session-restored",

    CHUNK_STARTED: "upload:chunk-started",

    CHUNK_FINISHED: "upload:chunk-finished",

    CHUNK_FAILED: "upload:chunk-failed",

    VERIFYING: "upload:verifying",

    VERIFIED: "upload:verified",

    ENCODING: "upload:encoding",

    READY: "upload:ready",

} as const;

export type UploadEventName =
    typeof UploadEvents[keyof typeof UploadEvents];

export interface UploadEventPayload<T = unknown> {

    event: UploadEventName;

    uploadId: string;

    timestamp: number;

    data?: T;

}

type Listener<T = unknown> = (

    payload: UploadEventPayload<T>

) => void;

class UploadEventBus {

    private listeners = new Map<
        UploadEventName,
        Set<Listener>
    >();

    on(

        event: UploadEventName,

        listener: Listener

    ) {

        if (!this.listeners.has(event)) {

            this.listeners.set(

                event,

                new Set()

            );

        }

        this.listeners.get(event)!.add(listener);

    }

    off(

        event: UploadEventName,

        listener: Listener

    ) {

        this.listeners

            .get(event)

            ?.delete(listener);

    }

    emit<T = unknown>(

        payload: UploadEventPayload<T>

    ) {

        this.listeners

            .get(payload.event)

            ?.forEach(listener =>

                listener(payload)

            );

    }

    clear() {

        this.listeners.clear();

    }

}

export const UploadBus =
    new UploadEventBus();