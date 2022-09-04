# [grammY](https://grammy.dev) on [Deta](https://deta.sh)

## Preparation

1. Copy `.env.example` file as `.env`
2. Put your bot token in it
3. Create a new project on [deta.sh](https://deta.sh). Make sure to select Europe region (there is no way to know it from the UI, so it's better to reassure). Skip if you already have one
4. Run `deta new --node --project <PROJECT_NAME>`
5. Run `deta update -e .env` to sync the token
6. Run `yarn install` to install dependencies
7. Run `yarn deploy` to deploy the project
8. Set your bot's webhook url to `<ENDPOINT>/<BOT_TOKEN>` (replacing `<...>` with respective values). Endpoint can be seen by running `deta details` (`"endpoint"` property). In order to do that, run this url (in your browser, for example): `https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<ENDPOINT>/<BOT_TOKEN>`

## Running the bot locally

Use `yarn dev` to run the bot locally for development.

Note that it will delete webhook url and you'll need to repeat the 3rd step to be able to run the bot on Deta (or you can use a different token).

Note that you'll have to manually provide `DETA_PROJECT_KEY` env in order for Deta Base session storage to work.
It can be obtained on the Project Settings page.
