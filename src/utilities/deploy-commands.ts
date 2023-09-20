import { REST, Routes } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';
import { config } from '../config';

const commands = [];
// Grab all the command files from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = import(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(JSON.parse(JSON.stringify(command.data)));
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(config.DISCORD_TOKEN);

// and deploy your commands!
async function deployCommands() {
	try {
		console.log(`Started refreshing application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		await rest.put(
			Routes.applicationGuildCommands(config.APPLICATION_ID, config.GUILD_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
}

deployCommands();