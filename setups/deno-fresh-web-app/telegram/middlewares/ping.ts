import { Context, MiddlewareFn } from "grammy";

const ping: MiddlewareFn<Context> = async (ctx, next) => {
  const start = new Date().getTime();
  try {
    await next();
  } catch (err) {
    console.error(err);
  }
  const ms = new Date().getTime() - start;
  console.log(
    `${new Date().toTimeString()} >> Update ID: ${ctx.update.update_id} ${
      ctx.chat?.type !== "private"
        ? `|| ${ctx.chat?.title}(${ctx.chat?.id})`
        : ""
    } || Response time: ${ms} ms || User: ${ctx.from?.first_name} (${
      ctx.from?.id
    })`
  );
};

export default ping;
