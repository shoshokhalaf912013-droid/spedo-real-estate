import { SPEDOConfig } from "./Config";
import { defaultConfig } from "./defaultConfig";

export class Configuration {

    private config: SPEDOConfig = defaultConfig;

    get(): SPEDOConfig {

        return this.config;

    }

    update(

        config: Partial<SPEDOConfig>

    ) {

        this.config = {

            ...this.config,

            ...config

        };

    }

}