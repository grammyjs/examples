import { bot } from '../src/bot'

const {
    VERCEL_BRANCH_URL: host,
    // set your webhook address or use default Vercel branch url
    WEBHOOK: webhook = `https://${host}/api`,
} = process.env

void bot.api.setWebhook(webhook)
