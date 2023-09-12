import { Bot, webhookCallback } from 'grammy';
import Fastify from 'fastify';

// This example to use grammY with Fastify

// Fastify server instance
const app = Fastify();

const TOKEN = ''; // <-- place your token inside this string
const bot = new Bot(TOKEN);

bot.on('message:text', ctx => ctx.reply(ctx.message.text));

// Receive webhook updates on path https://example.com/<YOUR-TOKEN>
// NOTE: if you want to use NGROK, just run this command in ngrok sheel
// ngrok http 3000
// and replace the URL with new URL from NGROK: <NGROK-URL>/<YOUR-TOKEN>
bot.api.setWebhook(''); // <-- add your webhook URL 

app.post(`/${TOKEN}`, webhookCallback(bot, 'fastify'));

// Fastify error handler
app.setErrorHandler(async error => {
    console.error(error);
});

// Run The Server!
app.listen({ port: 3000, host: '0.0.0.0' }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
