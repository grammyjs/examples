/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />


import "$std/dotenv/load.ts";
import { bold, yellow } from "$std/fmt/colors.ts";


import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { grammy } from "$grammy/bot.ts";
import {
    IS_PRODUCTION,
    TELEGRAM_BOT_TOKEN
} from "$utils/constants.ts";
import { WEBAPP_URL } from "./utils/constants.ts";

await start(manifest, {

  onListen: async ({ hostname, port }) => {
    console.log(
      bold(`Listening on http://`) +
        yellow(`${hostname === "0.0.0.0" ? "localhost" : hostname}:${port}/`)
    );

    if (IS_PRODUCTION) {
      const webhookInfo = await grammy.api.getWebhookInfo();
      const webhookUrl = `${WEBAPP_URL}/api/botfather?token=${TELEGRAM_BOT_TOKEN}`;

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
}
});
