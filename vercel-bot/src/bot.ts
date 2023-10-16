import { Bot } from 'grammy'

const {
    TELEGRAM_BOT_TOKEN: token,
} = process.env

// Set your token in the vercel environment variable
export const bot = new Bot(token as string)

// attach all middleware
bot.on('message', async ctx => {
    await ctx.reply('Hi there!')
})