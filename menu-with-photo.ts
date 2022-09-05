import { Bot, Context, InputFile, session, SessionFlavor } from "grammy";
import { Menu, MenuRange } from "@grammyjs/menu";

interface Pizza {
  id: string;
  name: string;
  source: string;
}

interface SessionData {
  favoriteIds: string[];
}
type MyContext = Context & SessionFlavor<SessionData>;

const pizzaDatabase: Pizza[] = [
  {
    id: "pepperoni",
    name: "Pepperoni",
    source: "https://riotfest.org/wp-content/uploads/2016/10/p-evid1.jpg",
  },
  {
    id: "hawaiana",
    name: "Hawaina",
    source:
      "https://www.tantefanny.nl/wp-content/uploads/sites/2/2018/02/Pizza_Hawaii.jpg",
  },
];

const bot = new Bot<MyContext>("");

bot.use(session({
  initial(): SessionData {
    return { favoriteIds: [] };
  },
}));

// Create a dynamic menu that lists all pizzas in the pizzaDatabase,
// one button each
const mainText = "Pick a pizza to rate it!";
const mainMenu = new Menu<MyContext>("food", { autoAnswer: false });
mainMenu.dynamic(() => {
  const range = new MenuRange<MyContext>();
  for (const pizza of pizzaDatabase) {
    range.text(
      { text: pizza.name, payload: pizza.id }, // label and payload
      async (ctx) => {
        const pizzaId = ctx.match;
        const pizza = pizzaDatabase.find((p) => p.id === pizzaId);
        if (pizza === undefined) throw new Error("Pizza not found!");
        await ctx.replyWithChatAction("upload_photo");
        // We cannot edit a text message to become a photo message,
        // so we need to send a new message with the target menu
        await ctx.replyWithPhoto(new InputFile({ url: pizza.source }), {
          caption: pizza.name,
          reply_markup: pizzaMenu,
        });
        await ctx.answerCallbackQuery();
        await ctx.deleteMessage();
      }, // handler
    )
      .row();
  }
  return range;
});

// Create the sub-menu that is used for rendering pizzas
const pizzaMenu = new Menu<MyContext>("pizza");
pizzaMenu.dynamic((ctx) => {
  const pizza = ctx.match;
  if (typeof pizza !== "string") throw new Error("No pizza chosen!");
  return createPizzaMenu(pizza);
});
/** Creates a menu that can render any given pizza */
function createPizzaMenu(pizza: string) {
  return new MenuRange<MyContext>()
    .text({
      text: (ctx) =>
        ctx.session.favoriteIds.includes(pizza) ? "Yummy!" : "Meh.",
      payload: pizza,
    }, (ctx) => {
      const set = new Set(ctx.session.favoriteIds);
      if (!set.delete(pizza)) set.add(pizza);
      ctx.session.favoriteIds = Array.from(set.values());
      ctx.menu.update();
    })
    .row()
    .text({ text: "X Delete", payload: pizza }, async (ctx) => {
      const index = pizzaDatabase.findIndex((p) => p.id === pizza);
      pizzaDatabase.splice(index, 1);
      await backToMain(ctx);
    })
    .row()
    .text({ text: "Back", payload: pizza }, backToMain);
}
async function backToMain(ctx: MyContext) {
  // Changing message type back from photo to text, have to re-send message
  await ctx.reply(mainText, { reply_markup: mainMenu });
  await ctx.deleteMessage();
}

mainMenu.register(pizzaMenu);

bot.use(mainMenu);

bot.command(
  "start",
  (ctx) => ctx.reply(mainText, { reply_markup: mainMenu }),
);
bot.command(
  "help",
  async (ctx) => {
    const text =
      "Send /start to see and rate pizzas. Send /fav to list your favorites!";
    await ctx.reply(text);
  },
);
bot.command("fav", async (ctx) => {
  const favs = ctx.session.favoriteIds;
  if (favs.length === 0) {
    await ctx.reply("You do not have any favorites yet!");
    return;
  }
  const names = favs
    .map((id) => pizzaDatabase.find((pizza) => pizza.id === id))
    .filter((pizza): pizza is Pizza => pizza !== undefined)
    .map((pizza) => pizza.name)
    .join("\n");
  await ctx.reply(`Those are your favorite pizzas:\n\n${names}`);
});

bot.catch(console.error.bind(console));
bot.start();
