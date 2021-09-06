import { Bot } from 'grammy'
import { Agent } from 'https'

// 1. Create a bot
export const bot = new Bot(process.env.BOT_TOKEN as string, {
    client: {
        // 2. Set the local Bot API URL
        apiRoot: 'https://bot-api',
        baseFetchConfig: {
            compress: true,
            agent: new Agent({
                keepAlive: true,
                // 3. Disable Bot API server certificate verification
                rejectUnauthorized: false
            }),
        },
    },
})

bot.on('message:text', ctx => ctx.reply(ctx.message.text))

// 4. Start the bot
bot.start()
