import { Composer } from "grammy";

import { GrammyContext } from "$grammy/context.ts";

import start from "$grammy/handlers/commands/start.ts";

const composer = new Composer<GrammyContext>();

composer.use(start);

export const listOfCommands: Array<{
  command: string;
  description: string;
  show: boolean;
}> = [
  { command: "start", description: "Start the bot", show: true },

];

export default composer;
