# Gumshoe - A TypeScript Discord bot

Gumshoe is a Discord bot built completely in TypeScript using the [discord.js](https://discord.js.org/) and [Sequelize](https://sequelize.org) libraries.

## Installation

### Requirements
- Node v16.14.0 or newer;
- A [free Discord Account](https://discord.com/register) and [server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-);
- A SQL database (MariaDB, Postgres, MongoDB, etc)
- An Application created in the Discord Developer Portal;

### Steps
- After downloading the files, access the folder and run `npm ci` to install the required modules;
- Create a new `.env` file in the root of the folder according to the [example environment file](.env.example) and add the required parameters. (HINT: follow [this guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html) from the official DiscordJS guide, which this project is utilizing.)
- To run the project, run `npm start`.

## Features

### Command Generator
To generate a new command, type `npm run create:command` and follow the CLI instructions. This will:
- Create a new category and command under `src/commands`
- Assign the chosen category for the command.
- Generate a base working template with a command of your choosing: reply, role or a blank template.

More information about commands can be found [on the official DiscordJS guide](https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue).

### Command Deployments
To deploy your newly created commands, run `npm run update:commands`.
This will check the current commands and will update your server with a list that the bot can execute.

## Deployment

Part of the deployment will be done using Docker and Kubernetes.

This section is coming soon!

## Testing
This project uses ESLint to verify if the project has the proper code set up and written.
To make sure your code is correct before you start the project, run `npm run test:lint`.

This will check the current code and will alert you of any linting errors. (If you use VSCode and have the ESLint plugin installed, this will show automatically!)

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/license/mit/).
