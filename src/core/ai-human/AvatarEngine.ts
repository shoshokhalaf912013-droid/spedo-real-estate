import type {
    AvatarEmotion
}
from "./types";

export class AvatarEngine {

    private emotion:
        AvatarEmotion =
        "neutral";

    setEmotion(
        emotion: AvatarEmotion
    ): void {

        this.emotion =
            emotion;

        console.log(

            "AVATAR EMOTION:",

            emotion

        );

    }

    getEmotion():
        AvatarEmotion {

        return this.emotion;

    }

    isHappy(): boolean {

        return this.emotion ===
            "happy";

    }

    isThinking(): boolean {

        return this.emotion ===
            "thinking";

    }

    isExplaining(): boolean {

        return this.emotion ===
            "explaining";

    }

    isWelcome(): boolean {

        return this.emotion ===
            "welcome";

    }

    reset(): void {

        this.emotion =
            "neutral";

    }

}

export const avatarEngine =
    new AvatarEngine();

export default avatarEngine;