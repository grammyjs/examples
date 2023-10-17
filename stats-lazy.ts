import { Bot, Context, lazySession, LazySessionFlavor } from 'grammy'

// This bot will count how many photos are sent in the chat. The counter can be
// retrieved with the `/stats` command.

// This is the data that will be saved per chat.
interface SessionData {
    photoCount: number
}

// flavor the context type to include sessions
type MyContext = Context & LazySessionFlavor<SessionData>

// Create a bot
const bot = new Bot<MyContext>('') // <-- place your token inside this string

// Note that using `lazySession()` will only save the data in-memory. If the
// Node.js process terminates, all data will be lost. A bot running in production
// will need some sort of database or file storage to persist data between
// restarts. Confer the grammY documentation to find out how to store data with
// your bot.
bot.use(lazySession({ initial: () => ({ photoCount: 0 }) }))

// Collect statistics
bot.on('message:photo', async (ctx, next) => {
    const stats = await ctx.session
    stats.photoCount++
    await next()
})

bot.filter(ctx => ctx.chat?.type === 'private').command('start', ctx =>
    ctx.reply(
        'Hi there! I will count the photos in this chat so you can get your /stats!'
    )
)

bot.on(':new_chat_members:me', ctx =>
    ctx.reply(
        'Hi everyone! I will count the photos in this chat so you can get your /stats!'
    )
)

// Send statistics upon `/stats`
bot.command('stats', async ctx => {
    const stats = await ctx.session

    // Format stats to string
    const message = `You sent <b>${stats.photoCount} photos</b> since I'm here!`

    // Send message in same chat using `reply` shortcut. Don't forget to `await`!
    await ctx.reply(message, { parse_mode: 'HTML' })
})

// Catch errors and log them
bot.catch(err => console.error(err))

// Start bot!
bot.start()
