import { Bot } from 'grammy'

const bot = new Bot(process.env['BOT_TOKEN']) // <-- Set your token in the vercel environment variable

bot.api.setWebhook(process.env['WEBHOOK'])
