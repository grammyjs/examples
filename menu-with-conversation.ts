import { Bot, Context, session, type SessionFlavor } from "grammy";
import { Menu } from "@grammyjs/menu";
import { hydrate, type HydrateFlavor } from "@grammyjs/hydrate";
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from "@grammyjs/conversations";

interface SessionData {
    name?: string;
    email?: string;
}
type MyContext = ConversationFlavor<Context & SessionFlavor<SessionData>>;

type NameContext = Context;
type NameConversation = Conversation<NameContext>;

type EmailContext = HydrateFlavor<Context>;
type EmailConversation = Conversation<EmailContext>;

const bot = new Bot<MyContext>("");

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

const menu = new Menu<MyContext>("root")
    .submenu("Settings", "settings")
    .submenu("About", "about");

const settings = new Menu<MyContext>("settings")
    .text("Set name", (ctx) => ctx.conversation.enter("name"))
    .text("Set email", (ctx) => ctx.conversation.enter("email"))
    .back("Back");
menu.register(settings);

const about = new Menu<MyContext>("about")
    .back("Back");
menu.register(about);

async function name(conversation: NameConversation, ctx: NameContext) {
    const settingsClone = conversation.menu(settings);
    const nameMenu = conversation.menu().text("Cancel", async (ctx) => {
        await ctx.menu.nav("settings", { immediate: true });
        await conversation.halt();
    });
    await ctx.editMessageReplyMarkup({ reply_markup: nameMenu });
    await ctx.reply("What's your name?");
    const name = await conversation.form.text();
    await conversation.external((ctx: MyContext) => ctx.session.name = name);
    await ctx.reply("Name set!");
    await ctx.editMessageReplyMarkup({ reply_markup: settingsClone });
}
async function email(conversation: EmailConversation, ctx: EmailContext) {
    const settingsClone = conversation.menu(settings);
    const emailMenu = conversation.menu().text("Cancel", async (ctx) => {
        await ctx.menu.nav("settings", { immediate: true });
        await conversation.halt();
    });
    await ctx.editMessageReplyMarkup({ reply_markup: emailMenu });
    const currentName = await conversation.external((ctx: MyContext) =>
        ctx.session.name
    );
    const question = await ctx.reply(
        currentName
            ? `What's your email, ${currentName}?`
            : "What's your email?",
    );
    const email = await conversation.form.text({
        action: (ctx) => ctx.deleteMessage(),
    });
    await Promise.all([
        question.delete(),
        conversation.external((ctx: MyContext) => ctx.session.email = email),
        ctx.reply("Email set!"),
        ctx.editMessageReplyMarkup({ reply_markup: settingsClone }),
    ]);
}

bot.use(createConversation(name));
bot.use(createConversation(email, { plugins: [hydrate()] }));
bot.use(menu);

bot.command("start", async (ctx) => {
    await ctx.reply("Menu", { reply_markup: menu });
});

bot.use((ctx) => ctx.reply("Send /start"));

bot.start();
