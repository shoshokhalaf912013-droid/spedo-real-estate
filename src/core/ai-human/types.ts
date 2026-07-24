export type AvatarEmotion =

    | "happy"
    | "thinking"
    | "explaining"
    | "welcome"
    | "neutral";

export interface HumanAssistantResponse {

    text: string;

    voice: boolean;

    openResults: boolean;

    avatarEmotion: AvatarEmotion;

}

export interface VoiceOptions {

    language?: string;

    rate?: number;

    pitch?: number;

    volume?: number;

}

export interface SpeechResult {

    success: boolean;

    text: string;

}