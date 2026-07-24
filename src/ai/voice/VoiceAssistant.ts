import { spedoAssistant }
from "../SpedoAssistant";

import { speechRecognizer }
from "./SpeechRecognizer";

import { speechSynthesizer }
from "./SpeechSynthesizer";

export class VoiceAssistant {

    async listen() {

        const recognizer =
            speechRecognizer;

        if (!recognizer) {

            alert(
                "Voice Recognition Not Supported"
            );

            return null;

        }

        return new Promise(

            resolve => {

                recognizer.listen(

                    text => {

                        console.log(
                            "USER:",
                            text
                        );

                        const response =

                            spedoAssistant.ask(
                                text
                            );

                        let answer = "";

                        if (

                            response.total === 0

                        ) {

                            answer =

                                "لم أجد أي وحدات مطابقة لطلبك";

                        }

                        else {

                            const unit =

                                response.results[0];

                            answer =

                                `وجدت ${response.total} وحدة. أرخص وحدة هي ${unit.unitNo} بمساحة ${unit.area} متر وسعر ${unit.price.toLocaleString()} جنيه`;

                        }

                        speechSynthesizer.speak(
                            answer
                        );

                        resolve({

                            text,

                            response,

                            answer

                        });

                    }

                );

            }

        );

    }

}

export const voiceAssistant =
    new VoiceAssistant();

export default voiceAssistant;