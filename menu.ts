import { Bot, Context, InputFile, session, SessionFlavor } from "grammy";
import { Menu, MenuRange } from "@grammyjs/menu";

/** This is how the dishes look that this bot is managing */
// interface Dish {
//   id: string;
//   name: string;
// }

interface Pizza {
  id: string;
  name: string;
  source: string;
}

interface SessionData {
  favoriteIds: string[];
}
type MyContext = Context & SessionFlavor<SessionData>;

/**
 * All known dishes. Users can rate them to store which ones are their favorite
 * dishes.
 *
 * They can also decide to delete them. If a user decides to delete a dish, it
 * will be gone for everyone.
 */
// const dishDatabase: Dish[] = [
//   { id: "pasta", name: "Pasta" },
//   { id: "pizza", name: "Pizza" },
//   { id: "sushi", name: "Sushi" },
//   { id: "entrct", name: "Entrecôte" },
// ];

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

// Create a dynamic menu that lists all dishes in the dishDatabase,
// one button each
const mainText = "Pick a dish to rate it!";
const mainMenu = new Menu<MyContext>("food");
mainMenu.dynamic(() => {
  const range = new MenuRange<MyContext>();
  for (const dish of pizzaDatabase) {
    range.text(
      { text: dish.name, payload: dish.id }, // label and payload
      async (ctx) => {
        const pizzaId = ctx.match;
        const pizza = pizzaDatabase.find((p) => p.id === pizzaId);
        if (pizza === undefined) throw new Error("Pizza not found!");
        // We cannot edit a text message to become a photo message,
        // so we need to send a new message with the target menu
        await ctx.replyWithPhoto(new InputFile({ url: pizza.source }), {
          caption: pizza.name,
          reply_markup: dishMenu,
        });
        await ctx.deleteMessage();
      }, // handler
    )
      .row();
  }
  return range;
});

// Create the sub-menu that is used for rendering dishes
const dishText = (dish: string) => `<b>${dish}</b>\n\nYour rating:`;
const dishMenu = new Menu<MyContext>("dish");
dishMenu.dynamic((ctx) => {
  const dish = ctx.match;
  if (typeof dish !== "string") throw new Error("No dish chosen!");
  return createDishMenu(dish);
});
/** Creates a menu that can render any given dish */
function createDishMenu(dish: string) {
  return new MenuRange<MyContext>()
    .text({
      text: (ctx) => ctx.session.favoriteIds.includes(dish) ? "Yummy!" : "Meh.",
      payload: dish,
    }, (ctx) => {
      const set = new Set(ctx.session.favoriteIds);
      if (!set.delete(dish)) set.add(dish);
      ctx.session.favoriteIds = Array.from(set.values());
      ctx.menu.update();
    })
    .row()
    .text({ text: "X Delete", payload: dish }, async (ctx) => {
      const index = pizzaDatabase.findIndex((p) => p.id === dish);
      pizzaDatabase.splice(index, 1);
      await backToMain(ctx);
    })
    .row()
    .text({ text: "Back", payload: dish }, backToMain);
}
async function backToMain(ctx: MyContext) {
  // Changing message type back from photo to text, have to re-send message
  await ctx.reply(mainText, { reply_markup: mainMenu });
  await ctx.deleteMessage();
}

mainMenu.register(dishMenu);

bot.use(mainMenu);

bot.command(
  "start",
  (ctx) => ctx.reply(mainText, { reply_markup: mainMenu }),
);
bot.command(
  "help",
  async (ctx) => {
    const text =
      "Send /start to see and rate dishes. Send /fav to list your favorites!";
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
  await ctx.reply(`Those are your favorite dishes:\n\n${names}`);
});

bot.catch(console.error.bind(console));
bot.start();
