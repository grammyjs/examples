import { bot } from '../src/bot.ts'

const webhook = Deno.env.get('WEBHOOK') ||
    `https://${Deno.env.get('VERCEL_URL')}/api/webhook`

void bot.api.setWebhook(webhook)
