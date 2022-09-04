# [grammY](https://grammy.dev) on [Deno Deploy](https://deno.com/deploy)

## Preparation

1. Create a project on [Deno Deploy](https://deno.com/deploy).
2. Add `TOKEN` to environment variables (it can be found on project’s settings page)
3. Set your bot’s webhook url to `https://<PROJECT_NAME>.deno.dev/<TOKEN>` (Replacing `<...>` with respective values). In order to do that, run this url (in your browser, for example): `https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<PROJECT_NAME>.deno.dev/<TOKEN>`

### Deploying with GitHub (easy)

4. Host your project on GitHub
5. Set up Git Integration on project page (it can be found on Overview tab or on Settings tab). Select `server.ts` as entry point.
6. You’re done! New versions will be automatically deployed on push.

### Deploying with `deployctl` (advanced usage)

4. Install [`deployctl`](https://github.com/denoland/deployctl)
5. Create a new [access token](https://dash.deno.com/user/access-tokens). Save it somewhere
6. Run this command to deploy: `deployctl deploy --project <PROJECT_NAME> ./server.ts --prod --token <ACCESS_TOKEN>`

## Running the bot locally

Use `poll.ts` to run the bot locally for development. Note that it will delete webhook url and you’ll need to repeat the 3rd step to be able to run the bot on Deno Deploy.
