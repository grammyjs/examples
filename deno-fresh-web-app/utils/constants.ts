import { getEnvOrThrow } from "$utils/misc.ts"

export const IS_PRODUCTION =
    Deno.env.get('IS_PRODUCTION') === 'true' ||
    typeof Deno.env.get('DENO_DEPLOYMENT_ID') !== 'undefined'
        ? true
        : false
export const IS_DEVELOPMENT = !IS_PRODUCTION
export const WEBAPP_URL = getEnvOrThrow('WEBAPP_URL')

export const TELEGRAM_BOT_TOKEN = getEnvOrThrow('TELEGRAM_BOT_TOKEN')
