#!/usr/bin/env -S deno run -A --watch=telegram/,utils/

import "@std/dotenv/load";
import { green } from "@std/fmt/colors";

import { grammy } from "$grammy/bot.ts";

grammy.start({
    drop_pending_updates: true,
    allowed_updates: [
        "callback_query",
        "inline_query",
        "message",
    ],
    onStart: ({ username }) => console.log(`${green(username)} started.`),
});

Deno.addSignalListener("SIGINT", () => grammy.stop());
Deno.addSignalListener("SIGTERM", () => grammy.stop());
