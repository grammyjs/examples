import { Bot, webhookCallback } from 'grammy'
import { Agent } from 'http'
import express from 'express'

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

const server = express()
server.use(express.json())

// 3. Register a handler for the bot
server.post('/webhook', webhookCallback(bot, 'express'))

server.listen(80)

// 4. Set webhook for handler in Bot API
bot.api.setWebhook('http://bot/webhook')
