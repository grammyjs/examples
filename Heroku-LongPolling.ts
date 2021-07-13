/* 
1. Create file named app.js
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
    This kind of dynos have timeout for 30 seconds for executing code, which is not suitable for long polling method.
  • Worker dynos: 
    Worker dynos are typically used for background jobs. It does not have timeout. We will use this dynos in our case.
    
    ⚠ REMINDER! 
    This worker dynos will run your script forever and will not sleep like Web dynos. 
    Make sure you have enough dynos hours if you want run your bot for a whole month.

Create file named Procfile without a file extension. For example, Procfile.txt or procfile is not valid. Then write this single line code
  
---------------------------------------------- */
worker: node app.js
/* -------------------------------------------

Our final directory structure should look like this
- node_modules
- package.json
- package-lock.json
- app.js
- Procfile 

3. Deploy to heroku
------------------------------------------- */
