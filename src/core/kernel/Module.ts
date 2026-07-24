/**
 * ============================================================================
 * SPEDO Kernel
 * Module Contract
 * ============================================================================
 */

import type { Runtime } from "../runtime/Runtime";
import type { Container } from "./Container";

export interface ModuleMetadata {

    id: string;

    name: string;

    description?: string;

    version: string;

    author?: string;

    enabled: boolean;

    priority: number;

}

export interface ModuleContext {

    runtime: Runtime;

    container: Container;

}

export interface Module {

    readonly metadata: ModuleMetadata;

    register(
        container: Container
    ): void;

    boot(
        context: ModuleContext
    ): Promise<void>;

    shutdown(): Promise<void>;

}

export abstract class BaseModule
implements Module {

    abstract readonly metadata: ModuleMetadata;

    register(
        container: Container
    ): void {

    }

    async boot(
        context: ModuleContext
    ): Promise<void> {

    }

    async shutdown(): Promise<void> {

    }

}