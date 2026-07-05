import "@std/dotenv/load";
import { App, staticFiles } from "fresh";

import { grammy } from "$grammy/bot.ts";
import {
    IS_PRODUCTION,
    TELEGRAM_BOT_TOKEN,
    WEBAPP_URL,
} from "$utils/constants.ts";

export const app = new App();

app.use(staticFiles());
app.fsRoutes();

if (IS_PRODUCTION) {
    const webhookUrl =
        `${WEBAPP_URL}/api/botfather?token=${TELEGRAM_BOT_TOKEN}`;
    const webhookInfo = await grammy.api.getWebhookInfo();

    console.info(`existing webhook info fetched: ${webhookInfo.url}`);

    if (webhookInfo.url !== webhookUrl) {
        console.info("deleting existing webhook");
        await grammy.api.deleteWebhook();
        console.info("existing webhook deleted");

        console.info(`setting new webhook to: ${webhookUrl}`);
        await grammy.api.setWebhook(webhookUrl);
        console.info(`bot webhook set to: ${webhookUrl}`);
    }
}
