import * as dotenv from "dotenv"

dotenv.config()

const { DISCORD_TOKEN, APPLICATION_ID, GUILD_ID } = process.env;

switch(true) {
    case !DISCORD_TOKEN:
        throw new Error("Please provide a valid Discord bot token.");
    case !APPLICATION_ID:
        throw new Error("Please provide a valid Discord application ID.");
    case !GUILD_ID:
        throw new Error("Please provide a valid Discord guild ID.");
}

export const config:any = {
    DISCORD_TOKEN,
    APPLICATION_ID,
    GUILD_ID
};