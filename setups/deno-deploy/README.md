# [grammY](https://grammy.dev) on [Deno Deploy](https://deno.com/deploy)

## Running the bot on Deno Deploy

1. Push your project to a GitHub repository.
2. Create a new app on [Deno Deploy](https://deno.com/deploy) and select the
   repository where you pushed your project.
3. Click "Edit app config" and set `server.ts` as entrypoint.
4. Click "Add Environment variables" and add a `TELEGRAM_BOT_TOKEN` secret
   variable. Copy and paste your bot token in the value field.
5. Click "Create App" to build and deploy your project. New versions will be
   automatically deployed on push.
6. Set your bot’s webhook url to `https://<PROJECT_NAME>.deno.dev/<BOT_TOKEN>`
   (replacing `<...>` with respective values). To do that, you can open the
   request URL in your browser:

```text
https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=https://<PROJECT_NAME>.<USER_NAME>.deno.net/<BOT_TOKEN>
```

6. You’re done! New versions will be automatically deployed on push.

> (Advanced) You can also use the `deno deploy` CLI command to push your project
> to Deno Deploy.

## Running the bot locally

1. Copy the `.env.example` file to `.env` and set the `TELEGRAM_BOT_TOKEN`
   variable to your token.

2. Run `deno task bot` in your terminal to run the bot locally for development.

> Running the bot locally will delete the webhook URL and you’ll need to set it
> again to run the bot on Deno Deploy.
