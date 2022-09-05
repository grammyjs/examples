import { Bot, Context, session, SessionFlavor } from "grammy";
import { DetaAdapter } from "@grammyjs/storage-deta";

interface SessionData {
  count: number;
}
type MyContext = Context & SessionFlavor<SessionData>;

export const bot = new Bot<MyContext>(process.env.BOT_TOKEN || "");

bot.use(
  session({
    initial: () => ({ count: 0 }),
    storage: new DetaAdapter<SessionData>({
      baseName: "session", // <-- Base name - your choice.
      projectKey: process.env.DETA_PROJECT_KEY || "",
    }),
  }),
);

bot.command("start", async (ctx) => {
  await ctx.reply("Up and running! Deta");
});

bot.on("message", async (ctx) => {
  ctx.session.count++;
  await ctx.reply(`Message count: ${ctx.session.count}`);
});
