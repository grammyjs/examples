import { Router } from '@grammyjs/router';
import type { CustomContext } from '../types/CustomContext';

const router = new Router<CustomContext>(ctx => ctx.session.route);

router.route('multiply-left', async ctx => {
  const leftOperand = Number(ctx.msg?.text);
  if (isNaN(leftOperand)) {
    await ctx.reply('Please provide a valid number.');
    return;
  }

  ctx.session.leftOperand = leftOperand;
  ctx.session.route = 'multiply-right';

  await ctx.reply('Please provide the next number to multiply.');
});

router.route('multiply-right', async ctx => {
  const rightOperand = Number(ctx.msg?.text);
  if (isNaN(rightOperand)) {
    await ctx.reply('Please provide a valid number.');
    return;
  }

  ctx.session.rightOperand = rightOperand;
  ctx.session.route = '';

  await ctx.reply(`The result of multiplying the numbers is \
${ctx.session.leftOperand * ctx.session.rightOperand}`);
});

export { router };
