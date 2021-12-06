import { cleanEnv, str } from "https://deno.land/x/envalid/mod.ts";

export default cleanEnv(Deno.env.toObject(), { BOT_TOKEN: str() });
