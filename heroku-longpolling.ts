/* 
1. Create file named bot.ts
---------------------------------------------- */
import { Bot } from 'grammy';

const bot = new Bot(''); // <-- put your bot token between the ''

// React to /start command
bot.command('start', (ctx) => ctx.reply("I'm running on Heroku using long polling!"));

// Start your bot
bot.start();
  
/* -------------------------------------------

2. Set up Procfile

Heroku have three type of dynos. I will try explain two of them:
  • Web dynos: 
    Web dynos are dynos of the “web” process that receive HTTP traffic from the routers. 
    This kind of dynos have timeout for 30 seconds for executing code, which is not suitable for long polling but useful for Webhook method.
  
  • Worker dynos: 
    Worker dynos are typically used for background jobs. It does not have timeout. We will use this dynos in our case.
    
    ⚠ REMINDER! 
    This worker dynos will run your script forever and will not sleep like Web dynos. 
    Make sure you have enough dynos hours if you want run your bot for a whole month.

Create file named Procfile without a file extension in root directory of our project. For example, Procfile.txt or procfile is not valid. 
Then write this single line code.

<dynos type>: <command for executing our main entry file> 

For example:
---------------------------------------------- */
worker: node bot.js
/* -------------------------------------------

Our final directory structure after compiling .ts files should look like this:
.
├── .git/
├── node_modules/
├── .gitignore 
├── package.json
├── package-lock.json
├── bot.ts
├── bot.js
├── tsconfig.json
└── Procfile

3. Final step: Deploy to heroku
------------------------------------------- */
