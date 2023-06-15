import { Composer, InlineKeyboard } from "grammy";

import { GrammyContext } from "$grammy/context.ts";
import { WEBAPP_URL } from "$utils/constants.ts";
import { getFullName } from "$utils/grammy.ts";

const composer = new Composer<GrammyContext>();

composer.command("start", async (ctx) => {
  await ctx.replyWithChatAction("typing");

  await ctx.reply(
    `
		Hi ${getFullName(ctx.from!).replaceAll(".", "")}, welcome to the <b>${
      ctx.me.username
    }</b>.
    \nI am here to help you make money from your sneaky calls 🥳🎉
		\nType "/" in the message box or click the "menu" button to see the list of commands.
        `,
    {
      reply_markup: {
        inline_keyboard: new InlineKeyboard().webApp("Open WebApp", WEBAPP_URL)
          .inline_keyboard,
      },
    }
  );
});

export default composer;
