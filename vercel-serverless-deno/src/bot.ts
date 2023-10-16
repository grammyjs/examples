import { Bot } from './deps.deno.ts'

// Set your token in the vercel environment variable
export const bot = new Bot(Deno.env.get('BOT_TOKEN') || '')

// attach all middleware
bot.on('message', async ctx => {
    await ctx.reply('Hi there!')
})
