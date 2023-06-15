
export function getEnvOrThrow(name: string) {
    const value = Deno.env.get(name);
    if (value == null) {
      throw new Error(`Missing env variable: ${name}`);
    }
    return value;
  }
