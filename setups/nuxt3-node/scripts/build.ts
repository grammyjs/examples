import { bot } from '../utils/bot'

const {
    VERCEL_BRANCH_URL: host,
    // set your webhook address or use default Vercel deployment url
    WEBHOOK: webhook = `https://${host}/api/webhook`,
} = process.env

bot.api.setWebhook(webhook)