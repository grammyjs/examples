import { Bot, webhookCallback } from "https://deno.land/x/grammy/mod.ts";
import env from "./env.ts";

const bot = new Bot(env.BOT_TOKEN);
const handleUpdate = webhookCallback(bot, "serveHttp");

bot.command("start", (ctx) => ctx.reply("Hi!"));

const server = Deno.listen({ port: 8000 });

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    if (requestEvent.request.method == "POST") {
      await handleUpdate(requestEvent);
    } else {
      await requestEvent.respondWith(new Response(undefined, { status: 200 }));
    }
  }
}
