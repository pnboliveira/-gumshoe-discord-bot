export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        DISCORD_TOKEN: string;
        APPLICATION_ID: string;
        GUILD_ID: string;
    }
  }
}
