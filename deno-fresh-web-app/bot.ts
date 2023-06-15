#!/usr/bin/env -S deno run -A --allow-write --watch=routes/,main.ts

import "$std/dotenv/load.ts";
import { green } from "$std/fmt/colors.ts";

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
