import { Bot } from 'grammy'

const {
    BOT_TOKEN: token = '',
} = process.env

// Set your token in the vercel environment variable
export const bot = new Bot(token)

// attach all middleware
bot.on('message', async ctx => {
    await ctx.reply('Hi there!')
})
