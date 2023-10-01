import * as dotenv from "dotenv"

dotenv.config()

const { DISCORD_TOKEN, APPLICATION_ID, GUILD_ID, DB_NAME, DB_USER, DB_PASS, DB_HOST  } = process.env;

switch(true) {
    case !DISCORD_TOKEN:
        throw new Error("Please provide a valid Discord bot token.");
    case !APPLICATION_ID:
        throw new Error("Please provide a valid Discord application ID.");
    case !GUILD_ID:
        throw new Error("Please provide a valid Discord guild ID.");
    case !DB_NAME:
        throw new Error("Please provide a valid database name.");
    case !DB_USER:
        throw new Error("Please provide a valid database user.");
    case !DB_PASS:
        throw new Error("Please provide a valid database password.");
    case !DB_HOST:
        throw new Error("Please provide a valid database host.");
}

export const config = {
    DISCORD_TOKEN,
    APPLICATION_ID,
    GUILD_ID,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST
};