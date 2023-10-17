# [grammY](https://grammy.dev) on [Vercel](https://vercel.dev)

You can deploy your bots to Vercel as a serverless function that runs on
[Bun](https://bun.sh).

Webhook will be set automatically by execute `scripts/build.ts` during
[Vercel build step](https://vercel.com/docs/deployments/builds)

> **⚠️ The [Bun](https://github.com/oven-sh/bun/issues/159)
> [runtime](https://github.com/vercel-community/bun) for Vercel Serverless
> Functions is experimental.**
>
> You may face bugs that aren’t related to grammY or may have limited support
> for some plugins. We don’t plan on making grammY specifically compatible with
> Bun or this runtime for Vercel Serverless Functions.
