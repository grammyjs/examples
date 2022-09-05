import { Bot } from "grammy";

// 1. Create a bot
export const bot = new Bot(process.env.BOT_TOKEN as string, {
  client: {
    // 2. Set the local Bot API URL
    apiRoot: "http://bot-api:8081",
  },
});

bot.on("message:text", (ctx) => ctx.reply(ctx.message.text));

// 3. Start the bot
bot.start();
