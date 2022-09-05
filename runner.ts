import { Bot } from "grammy";
import { run } from "@grammyjs/runner";

// If you bot has long-running operations such as file transfers,
// or if it processes several thousand messages per hour,
// you should switch from `bot.start` to the grammY runner package.

// 1. Create a bot with a token (get it from https://t.me/BotFather)
const bot = new Bot(""); // <-- place your token inside this string

// 2. Reply to text messages with the received text
bot.on("message:text", (ctx) => ctx.reply(ctx.message.text));

// 3. Start the bot using the runner package
run(bot);
