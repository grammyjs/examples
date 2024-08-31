import { Bot } from 'grammy'

export const bot = new Bot(process.env.BOT_TOKEN!)

// attach all middleware
bot.on('message', async ctx => {
	await ctx.reply('Hi there! Welcome to Nuxt!')
})

