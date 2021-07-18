# grammY Example Bots

This repository provides a number of example bots to help you get started.

1. Create a bot with [@BotFather](https://t.me/BotFather), and get the **bot token**
2. Clone this example repo
3. Run `npm install`
4. Paste your token into the bot source file that you want to run (e.g. `echo.ts`)
5. Run a bot with:

```bash
npm run bot <file>

# Example:
npm run bot echo.ts
```

## Hello World ([`./echo.ts`](./echo.ts))

A simple echo bot that echoes all text messages.

## Send a Single Message ([`./send-message.ts`](./send-message.ts))

Not a real bot, only illustrates how to manually send a single message once. Maybe useful for scripts.

## Sessions ([`./stats.ts`](./stats.ts))

Full-blown example bot that counts messages in a chat and stores the statistics in session objects.

## Runner Example ([`./runner.ts`](./runner.ts))

Illustrates how to use the [`@grammyjs/runner`](https://github.com/grammyjs/runner) package that is useful for large bots.

## Scaling Example ([`./scaling/index.ts`](./scaling/index.ts))

An advanced but minimal example bot that demonstrates a viable directory structure, for the collective orchestration of [`custom context flavors`](https://grammy.dev/guide/context.html#context-flavours), [`transformers`](https://grammy.dev/advanced/transformers.html#bot-api-transformers), [`sessions with initial data`](https://grammy.dev/plugins/session.html#how-to-use-sessions), [`composers`](https://grammy.dev/advanced/middleware.html#middleware-in-grammy), and [`routers`](https://grammy.dev/plugins/router.html#combining-routers-with-sessions).

## Please Contribute

We could need some more examples here, e.g. about

-   command handling
-   filter queries
-   inline keyboards
-   file support

and other things.
