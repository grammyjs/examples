import { bot } from '../src/bot'

const {
    VERCEL_URL: defaultHost,
    VERCEL_BRANCH_URL: host = defaultHost,
    // set your webhook address or use default Vercel deployment url
    WEBHOOK: webhook = `https://${host}/api/webhook`,
} = process.env

void bot.api.setWebhook(webhook)
