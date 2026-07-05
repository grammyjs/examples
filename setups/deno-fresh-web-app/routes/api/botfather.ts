import { webhookCallback } from "grammy";
import { define } from "../../utils.ts";
import { grammy } from "$grammy/bot.ts";
import { TELEGRAM_BOT_TOKEN } from "$utils/constants.ts";

const handleUpdate = webhookCallback(grammy, "std/http");

export const handler = define.handlers(async (ctx) => {
    try {
        const url = new URL(ctx.req.url);

        if (url.searchParams.get("token") !== TELEGRAM_BOT_TOKEN) {
            return new Response("Unauthorized", { status: 401 });
        }

        return await handleUpdate(ctx.req);
    } catch (e) {
        console.error(e);
        return new Response("Internal Server Error", { status: 500 });
    }
});
