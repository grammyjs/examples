import { Bot } from 'grammy'

// 1. Create a bot
const bot = new Bot(process.env.BOT_TOKEN as string)

// 2. Reply to text messages with the received text
bot.on('message:text', ctx => ctx.reply(ctx.message.text))

// 3. Start the bot
bot.start()
