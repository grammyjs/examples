import { hydrateReply, parseMode } from "grammy_parse_mode";
import { GrammyContext } from "$grammy/context.ts";

import { Bot, GrammyError, HttpError } from "$grammy/deps.ts";
import commands, { listOfCommands } from "$grammy/handlers/commands/mod.ts";
// import conversationComposer from "$grammy/handlers/conversations/mod.ts";
// import groupEvents from "$grammy/middlewares/events.group.ts";
// import hearingComposer from "$grammy/middlewares/hearing.ts";
import ping from "$grammy/middlewares/ping.ts";
import session from "$grammy/middlewares/session.middleware.ts";
import { TELEGRAM_BOT_TOKEN } from "$utils/constants.ts";

export const grammy = new Bot<GrammyContext>(TELEGRAM_BOT_TOKEN);

// Plugins
grammy.api.config.use(parseMode("HTML"));
grammy.use(hydrateReply<GrammyContext>);

grammy.use(session);

// custom middlewares
grammy.use(ping);
// grammy.use(groupEvents);

grammy.use(commands);
// --- End menus

grammy.api
  .setMyCommands(
    listOfCommands.filter((c) => c.show)
  )
  .then(() => {
    console.log("default commands have been uploaded to BotFather");
  })
  .catch((e) =>
    console.error("Failed to upload default commands to BotFather", e)
  );

grammy.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});
