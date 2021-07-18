import { Composer } from 'grammy';
import type { CustomContext } from '../types/CustomContext';

const composer = new Composer<CustomContext>();

composer.command('add', async ctx => {
  ctx.session.route = 'add-left';
  ctx.session.leftOperand = 0;
  ctx.session.rightOperand = 0;
  await ctx.reply('Send me the first number to add.');
});

composer.command('multiply', async ctx => {
  ctx.session.route = 'multiply-left';
  ctx.session.leftOperand = 0;
  ctx.session.rightOperand = 0;
  await ctx.reply('Send me the first number to multiply.');
});

composer.command('help', async ctx => {
  await ctx.reply('To add numbers, do /add. To multiply numbers, do /multiply.');
});

composer.use(async ctx => {
  await ctx.reply('Not a recognised input. If you need help, do /help.');
});

export { composer };
