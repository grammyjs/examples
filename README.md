# grammY Examples

This repository contains various bots and setups to help you get started with
grammY.

1. Contact [@BotFather](https://t.me/BotFather) to create a bot and get its
   token.
2. Clone the repository.
3. Paste your bot’s token to the source files of the examples you would like to
   run (e.g. `./echo.ts`).
4. Run `npm install` from the root.
5. Run the examples this way:

```shell
npm run bot <name>

# For example, to run the echo example:
npm run bot echo
```

## Hello World ([`echo`](./echo.ts))

A simple bot that echoes the text messages it receives.

## Send a Single Message ([`send-message`](./send-message.ts))

Not a real bot, only an illustration of sending a single message once. Might
be useful in scripts.

## Nested Menus ([`menu`](./menu.ts))

Advanced menu example bot that lets you manage different dishes (Pasta, Pizza,
Sushi, Entrecôte) via a nested menu structure. It shows how to build more
complex menus when all the data is generated at runtime.

## Menus with Media ([`menu-with-photo`](./menu-with-photo.ts))

Similar to the nested menu example, but with photos.

## Sessions ([`stats`](./stats.ts))

Full-blown example bot that counts messages in a chat and stores the statistics
in session objects.

## Lazy Sessions ([`stats-lazy`](./stats-lazy.ts))

Full-blown example bot that counts photos in a chat and stores the statistics
using _[lazy sessions](https://grammy.dev/plugins/session.html#lazy-sessions)_.
The advantage of lazy sessions is that the storage is only queried whenever data
is actually needed.

(Note that this bot stores data in-memory, it does not connect to a database.
Therefore, using lazy sessions does not make much sense. This bot is only an
illustratation on how to use them.)

## Runner Example ([`runner`](./runner.ts))

Illustrates how to use the [`grammY runner`](https://github.com/grammyjs/runner)
to run large bots.

## Fastify Example ([`fastify`](./fastify.ts))

Simple example for using [`grammY`](https://github.com/grammyjs/grammy)
with [`Fastify`](https://github.com/fastify/fastify) and [`Ngrok`](https://ngrok.com/)

## Scaling Example ([`scaling`](./scaling/index.ts))

NOTE: This example is not endorsement of any directory structure. See
[`Awesome grammY`](https://github.com/grammyjs/awesome-grammY) for live examples
instead.

A minimal example bot that demonstrates how various grammY objects can be
orchestrated together, including
[`custom context flavors`](https://grammy.dev/guide/context.html#context-flavours),
[`transformers`](https://grammy.dev/advanced/transformers.html#bot-api-transformers),
[`sessions with initial data`](https://grammy.dev/plugins/session.html#how-to-use-sessions),
[`composers`](https://grammy.dev/advanced/middleware.html#middleware-in-grammy),
and
[`routers`](https://grammy.dev/plugins/router.html#combining-routers-with-sessions).

## [Vercel Example »](./vercel-bot)

Example bot that can run on [Vercel](https://vercel.com/).

## [Deno Deploy Example »](./deno-deploy)

Example bot that can run on [Deno Deploy](https://deno.com/deploy/).

## [Deta Example »](./deta)

Example bot that can run on [Deta](https://deta.sh/).

## [Supabase Edge Functions Example »](./supabase-edge-functions)

Example bot that can run on
[Supabase Edge Functions](https://supabase.com/edge-functions).

## [Docker Example (Deno) »](./docker-deno)

Example Deno bot that can run using Docker.

## [Docker Example (Node.js) »](./docker-node)

Example Node.js bot that can run using Docker.

## [Local Bot API Example »](./local-bot-api)

Use Docker to setup a
[local Bot API server](https://core.telegram.org/bots/api#using-a-local-bot-api-server)
and run your bot on it.

## [Local Bot API with HTTPS Example »](./local-bot-api-https)

Use Docker to setup a
[local Bot API server](https://core.telegram.org/bots/api#using-a-local-bot-api-server)
with a self-signed TLS certificate, and run your bot on it.

## Please Contribute

We could have some more examples here, for example:

-   command handling
-   filter queries
-   inline keyboards
-   file support

and other things.
