import { bot } from '~/utils/bot'
import { webhookCallback } from 'grammy'

export default defineEventHandler(async (event) => {
  const handle = webhookCallback(bot, 'http')
  return handle(event.node.req, event.node.res)
})