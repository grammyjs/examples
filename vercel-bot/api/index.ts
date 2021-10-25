import { Bot, webhookCallback } from 'grammy'

const bot = new Bot('') // <-- Set your token in the vercel environment variable and call it with `process.env`

// Set an option to repeat what you said.
bot.on("message", async ctx => {
  await ctx.reply(ctx.msg.text)
})

export default async (req, res) => {
  await bot.api.setWebhook('') // <-- Fill in the address of your deployed vercel allocation.
  webhookCallback(bot, 'http')(req, res) // <-- The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
}