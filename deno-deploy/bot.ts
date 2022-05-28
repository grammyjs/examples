import { Bot } from "./deps.deno.ts";

export const bot = new Bot(Deno.env.get("TOKEN") || "");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
