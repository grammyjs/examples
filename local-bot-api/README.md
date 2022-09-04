## Local Bot API Example ([`./polling.ts`](./polling.ts), [`./webhook.ts`](./webhook.ts))

This example illustrates how to run a bot using a
[local Bot API server](https://core.telegram.org/bots/api#using-a-local-bot-api-server)
via Docker.

1. Create an application with <https://my.telegram.org/apps>, and get **api id**
   and **api hash**
2. Create a bot with [@BotFather](https://t.me/BotFather), and get the **bot
   token**
3. Paste your api id, api hash and token into the
   [`docker-compose.yml`](./docker-compose.yml) file
4. Run a bot with:

```shell
docker-compose up
```
