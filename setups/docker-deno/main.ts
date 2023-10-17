import { Bot } from "./deps.ts";

// 1. Create a bot
export const bot = new Bot(Deno.env.get("BOT_TOKEN") as string)

// 2. Reply to text messages with the received text
bot.on('message:text', ctx => ctx.reply(ctx.message.text))

// 3. Start the bot
bot.start()
