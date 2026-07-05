import { Composer, InlineKeyboard } from "grammy";
import { b, fmt } from "grammy_parse_mode";

import { GrammyContext } from "$grammy/context.ts";
import { WEBAPP_URL } from "$utils/constants.ts";
import { getFullName } from "$utils/grammy.ts";

const composer = new Composer<GrammyContext>();

composer.command("start", async (ctx) => {
    await ctx.replyWithChatAction("typing");

    const name = getFullName(ctx.from!).replaceAll(".", "");
    const message = fmt`Hi ${name}, welcome to the ${b}${ctx.me.username}${b}.

I am here to help you make money from your sneaky calls 🥳🎉

Type "/" in the message box or click the "menu" button to see the list of commands.`;

    await ctx.reply(message.text, {
        entities: message.entities,
        reply_markup: {
            inline_keyboard:
                new InlineKeyboard().webApp("Open WebApp", WEBAPP_URL)
                    .inline_keyboard,
        },
    });
});

export default composer;
