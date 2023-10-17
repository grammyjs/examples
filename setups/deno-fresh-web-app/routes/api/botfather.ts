import { HandlerContext } from "$fresh/server.ts";
import { webhookCallback } from "grammy";
import { grammy } from "$grammy/bot.ts";
import { TELEGRAM_BOT_TOKEN } from "$utils/constants.ts";

const handleUpdate = webhookCallback(grammy, "std/http");

export const handler = async (req: Request, _ctx: HandlerContext) => {
  try {
    const url = new URL(req.url);

    if (url.searchParams.get("token") !== TELEGRAM_BOT_TOKEN) {
      return new Response("Unauthorized", { status: 401 });
    }

    return await handleUpdate(req);
  } catch (e) {
    console.error(e);
  }
};
