import { Bot, webhookCallback } from 'grammy'


const bot = new Bot(process.env['BOT_TOKEN'])

// attach all middleware
bot.on("message", (ctx) => {
  ctx.reply("Hi there!")
})

// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, 'express')(req, res)
