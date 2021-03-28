import { Bot } from 'grammy'

// Send a single message to a specific user by ID.

// 1. Create a bot with a token (get it from https://t.me/BotFather)
const bot = new Bot('') // <-- place your token inside this string

// 2. Send message to user `1234` (find user IDs with https://t.me/getidsbot)
bot.api.sendMessage(1234, 'I wrote a Telegram bot!')
