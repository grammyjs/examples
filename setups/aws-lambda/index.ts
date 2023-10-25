import { Bot, webhookCallback } from 'grammy'

const {
    BOT_TOKEN: token = '',
} = process.env

// Set your token in the vercel environment variable
export const bot = new Bot(token)

// attach all middleware
bot.on('message', async ctx => {
    await ctx.reply('Hi there!')
})

// webhookCallback will make sure that the correct middleware(listener) function is called
export const lambdaHandler = webhookCallback(bot, 'aws-lambda-async')
