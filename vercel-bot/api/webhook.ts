import { bot } from '../src/bot'
import { webhookCallback } from 'grammy'

// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, 'http')
