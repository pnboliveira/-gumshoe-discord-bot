import * as fs from 'fs';
import * as path from 'path';
import { Events, GatewayIntentBits, Collection } from 'discord.js';
import { config } from './config';
import { MySuperClient } from './types/client';
import './utils/database';

const client = new MySuperClient({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

export default async function initClient() {
	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));
		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const command = await import(filePath);
			// Set a new item in the Collection with the key as the command name and the value as the exported module
			if ('data' in command && 'execute' in command) {
				client.commands.set(command.data['name'], command);
			} else {
				console.log(`ERROR: Command in ${filePath} is missing a required data or execute function!`);
			}
		}
	}
	
	client.on(Events.InteractionCreate, async interaction => {
		if(!interaction.isChatInputCommand()) return;
		
		const command = Object.assign(client.commands.get(interaction.commandName));

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}
	
		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	});
	
	client.once(Events.ClientReady, c => {
		console.log(`Ready! You're now logged in as ${c.user.tag}`);
	});
	
	client.login(config.DISCORD_TOKEN);
}

initClient();