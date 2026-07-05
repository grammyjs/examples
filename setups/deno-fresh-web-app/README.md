# [grammY webApp](https://github.com/grammyjs/web-app) using [Fresh](https://usefresh.dev) on [Deno Deploy](https://deno.com/deploy)

## Running the bot and web app on Deno Deploy

1. Push your project to a GitHub repository.
2. Create an organization (if you don't have one yet) at
   [console.deno.com](https://console.deno.com) and create a new app there,
   selecting the repository where you pushed your project. Deno Deploy
   auto-detects Fresh and sets the build command to `deno task build` and the
   entrypoint to `_fresh/server.js` — double check these under "Edit app config"
   if it doesn't.
3. Click "Add Environment variables" and add:
   - `TELEGRAM_BOT_TOKEN`: your bot token.
   - `WEBAPP_URL`: your app's Deno Deploy URL, e.g.
     `https://<PROJECT_NAME>.<USER_NAME>.deno.net`.
4. Click "Create App" to build and deploy your project. New versions will be
   automatically deployed on push.
5. Visit your new app's url, `https://<PROJECT_NAME>.<USER_NAME>.deno.net`.
   `main.ts` automatically sets the bot's webhook to
   `https://<PROJECT_NAME>.<USER_NAME>.deno.net/api/botfather?token=<BOT_TOKEN>`
   the first time it boots in production, so this is all you need to do.

> (Advanced) You can also use the `deno deploy` CLI command to push your project
> to Deno Deploy.

## Running the bot and web app locally

Copy the `.env.example` file to `.env` and set the `TELEGRAM_BOT_TOKEN` variable
to your token and the `WEBAPP_URL` variable to a proxy url of your Fresh app
url, e.g. `https://llreoesss.trycloudflare.com`. You can use
[Cloudflare's TryCloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/#using-trycloudflare)
to get a free proxy url.

Run these two commands in separate terminals:

- `deno task bot` — runs the bot (polling).
- `deno task dev` — runs the Fresh web app (Vite dev server).

> Running the bot locally will delete the webhook URL and you'll need to repeat
> step 5 above to run the bot on Deno Deploy again. To avoid that, please create
> a test bot and use its token for local development.

## Testing the bot

Use the `/start` command to test the bot. This will display a welcome message
and a button to open the web app.
