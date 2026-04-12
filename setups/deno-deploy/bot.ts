import { Bot } from "grammy";

export const bot = new Bot(Deno.env.get("TELEGRAM_BOT_TOKEN") || "");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
