// npm i grammy fastify @ngrok/ngrok@0.9.0
import { Bot, webhookCallback } from 'grammy';
import fastify from 'fastify';
import ngrok from '@ngrok/ngrok'; // Note: This example is pinned to 0.9.0 (unstable)

// This example to use grammY with Fastify, Ngrok with secret_token

// Fastify server instance
const server = fastify();


const { TOKEN, PORT, SECRET_TOKEN } = process.env;
const bot = new Bot(TOKEN);

bot.command('start', ctx => ctx.reply("Hi, I'm run faster than you :)"));

bot.on('message:text', ctx => ctx.reply(`You said: ${ctx.message.text}`));

// Receive webhook updates on path https://example.com/<YOUR-TOKEN>
server.post(`/${TOKEN}`, webhookCallback(bot, 'fastify', { secretToken: SECRET_TOKEN }));

// Fastify error handler
server.setErrorHandler(async error => {
  console.error(error);
});

// Run The Server!
server.listen({ port: +PORT }, async (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  const listener = await ngrok.connect(+PORT);
  await bot.api.setWebhook(`${listener.url()}/${TOKEN}`, { secret_token: SECRET_TOKEN });
});