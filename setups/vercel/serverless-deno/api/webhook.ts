import { bot } from '../src/bot.ts'
import { webhookCallback } from '../src/deps.deno.ts'

// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, 'std/http')
