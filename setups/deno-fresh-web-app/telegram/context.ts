import type { Context, SessionFlavor } from "./deps.ts";

export interface GrammySession {
    user?: {
        __language_code?: string;
    };
}

export type GrammyContext = SessionFlavor<GrammySession> & Context;
