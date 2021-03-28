# grammY Example Bots

This repository provides a number of example bots to help you get started.

1. Create a bot with [@BotFather](https://t.me/BotFather), and get the **bot token**
2. Clone this example repo
3. Run `npm install`
4. Paste your token into the bot source file that you want to run (e.g. `echo.ts`)
5. Run a bot with:

```bash
npm run bot -- <file>

# Example:
npm run bot -- echo.ts
```

## Hello World ([`./echo.ts`](./echo.ts))

A simple echo bot that echoes all text messages.

## Send a Single Message ([`./send-message.ts`](./send-message.ts))

Not a real bot, only illustrates how to manually send a single message once. Maybe useful for scripts.

## Please Contribute

We could need some more examples here, e.g. about

-   command handling
-   filter queries
-   inline keyboards
-   file support

and other things.

## Runner Example ([`./runner.ts`](./runner.ts))

Illustrates how to use the [`@grammyjs/runner`](https://github.com/grammyjs/runner) package that is useful for large bots.
