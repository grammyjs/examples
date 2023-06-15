#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import './bot.ts';

await dev(import.meta.url, "./main.ts");
