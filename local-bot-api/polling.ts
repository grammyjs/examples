import { Bot } from 'grammy'
import { Agent } from 'http'

// 1. Create a bot
export const bot = new Bot(process.env.BOT_TOKEN as string, {
    client: {
        // 2. Set the local Bot API URL
        apiRoot: 'http://bot-api:8081',
        baseFetchConfig: {
            compress: true,
            agent: new Agent({ keepAlive: true }),
        },
    },
})

bot.on('message:text', ctx => ctx.reply(ctx.message.text))

// 3. Start the bot
bot.start()
