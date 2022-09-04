# [grammY](https://grammy.dev) on [Deno Deploy](https://deno.com/deploy)

## Preparation

1. Create a project on [Deno Deploy](https://deno.com/deploy).
2. Set the `BOT_TOKEN` variable to your token (this can be done in project’s
   settings).
3. Set your bot’s webhook url to `https://<PROJECT_NAME>.deno.dev/<BOT_TOKEN>`
   (replacing `<...>` with respective values). To do that, you can open the
   request URL in your browser:

```text
https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=https://<PROJECT_NAME>.deno.dev/<BOT_TOKEN>
```

### Deploying with GitHub (easy)

4. Push your project to a GitHub repository.
5. Set up GitHub Integration in the project’s settings. Select `server.ts` as
   entry point.
6. You’re done! New versions will be automatically deployed on push.

### Deploying with `deployctl` (advanced)

4. Install [`deployctl`](https://github.com/denoland/deployctl)
5. Create a new [access token](https://dash.deno.com/user/access-tokens). Save
   it somewhere
6. Run this command to deploy:
   `deployctl deploy --project <PROJECT_NAME> ./server.ts --prod --token <ACCESS_TOKEN>`

## Running the bot locally

Use `poll.ts` to run the bot locally for development. Note that it will delete
the webhook URL and you’ll need to repeat the 3rd step to be able to run the bot
on Deno Deploy.
