# grammY Example Bots

This repository provides a number of example bots to help you get started.

1. Create a bot with [@BotFather](https://t.me/BotFather), and get the **bot token**
2. Clone this example repository
3. Run `npm install` in the root directory of this repo
4. Paste your token into the bot source file that you want to run (e.g. `./echo.ts`)
5. Run a bot with:

```bash
npm run bot <name>

# Example:
npm run bot echo
```

## Hello World ([`echo`](./echo.ts))

A simple echo bot that echoes all text messages.

## Send a Single Message ([`send-message`](./send-message.ts))

Not a real bot, only illustrates how to manually send a single message once. Maybe useful for scripts.

## Nested Menus ([`menu`](./menu.ts))

Advanced menu example bot that lets you manage different dishes (Pasta, Pizza, Sushi, Entrecôte) via a nested menu structure.
It shows how to build more complex menus where all data is generated at runtime.

## Media Menus ([`menu-with-photo`](./menu-with-photo.ts))

Similar to the nested menu example, but with menu messages that include photos.

## Sessions ([`stats`](./stats.ts))

Full-blown example bot that counts messages in a chat and stores the statistics in session objects.

## Lazy Sessions ([`stats-lazy`](./stats-lazy.ts))

Full-blown example bot that counts photos in a chat and stores the statistics using _[lazy sessions](https://grammy.dev/plugins/session.html#lazy-sessions)_.
The advantage of lazy sessions is that the storage is only queried whenever data is actually needed.

(Note that this bot stores data in-memory, it does not connect to a real database.
Therefore, using lazy sessions does not make much sense.
This bot uses them anyway in order to illustrate how to use them.)

## Runner Example ([`runner`](./runner.ts))

Illustrates how to use the [`@grammyjs/runner`](https://github.com/grammyjs/runner) package that is useful for large bots.

## Scaling Example ([`scaling`](./scaling/index.ts))

An advanced but minimal example bot that demonstrates a viable directory structure, for the collective orchestration of [`custom context flavors`](https://grammy.dev/guide/context.html#context-flavours), [`transformers`](https://grammy.dev/advanced/transformers.html#bot-api-transformers), [`sessions with initial data`](https://grammy.dev/plugins/session.html#how-to-use-sessions), [`composers`](https://grammy.dev/advanced/middleware.html#middleware-in-grammy), and [`routers`](https://grammy.dev/plugins/router.html#combining-routers-with-sessions).

## [Local Bot API Example »](./local-bot-api)

Illustrates how to run a bot using a [local Bot API server](https://core.telegram.org/bots/api#using-a-local-bot-api-server) via Docker.

## [Local Bot API with HTTPS Example »](./local-bot-api-https)

Illustrates how to run a bot using a [local Bot API server](https://core.telegram.org/bots/api#using-a-local-bot-api-server) with a reverse proxy and self-signed certificate via Docker.

## Please Contribute

We could need some more examples here, e.g. about

- command handling
- filter queries
- inline keyboards
- file support

and other things.
