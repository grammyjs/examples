import { Bot, webhookCallback } from 'grammy'


const bot = new Bot(process.env['BOT_TOKEN'])

export default async (req, res) => { // <-- Fill in the address of your deployed vercel allocation.
  webhookCallback(bot, 'http')(req, res) // <-- The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
}