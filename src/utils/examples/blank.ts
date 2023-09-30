export default function blank(fileName) {
    return `import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
.setName('${fileName}')
.setDescription('This is a Description example for the ${fileName} command.');
export async function execute(interaction: CommandInteraction) {
  
}`;
}