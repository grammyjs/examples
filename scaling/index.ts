import { apiThrottler } from '@grammyjs/transformer-throttler';
import { Bot, session } from 'grammy';
import { composer } from './composers';
import { router as addRouter } from './routers/add';
import { router as multiplyRouter } from './routers/multiply';

import type { CustomContext } from './types/CustomContext';
import type { SessionData } from './types/SessionData';

// 1. Create a bot with a token (get it from https://t.me/BotFather)
const bot = new Bot<CustomContext>(''); // <-- place your token inside this string

// 2. Attach an api throttler transformer to the bot
bot.api.config.use(apiThrottler());

// 3. Attach a session middleware and specify the initial data
bot.use(session({
  initial: (): SessionData => ({
    route: '',
    leftOperand: 0,
    rightOperand: 0,
  })
}));

// 4. Attach all routers to the bot as middleware
bot.use(addRouter);
bot.use(multiplyRouter);

// 5. Attach all composers to the bot as middleware
bot.use(composer);

// 6. Start the bot
bot.start();
