import * as fs from 'fs-extra';

async function generateFileAndFolder() {
  const args = process.argv.slice(2); // Get command-line arguments (excluding 'ts-node' and script name)

  if (args.length !== 2) {
    console.error('Usage: npm run create:command <folderName> <fileName>');
    process.exit(1);
  }

  let generateCommand = () => {
    return `import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

    export const data = new SlashCommandBuilder()
        .setName('${fileName}')
        .setDescription('This is a Description example for the ${fileName} command.');
    
    export async function execute(interaction: CommandInteraction) {
        return interaction.reply('test!');
    };`;
}

  const folderName = args[0];
  const fileName = args[1];

  try {
    await fs.ensureDir(`src/commands/${folderName}`); // Create a new directory if it doesn't exist
    await fs.writeFile(`src/commands/${folderName}/${fileName}.ts`, generateCommand()); // Create a new file with content
    console.log(`Command '${fileName}' created under '${folderName}'`);
  } catch (err) {
    console.error('Error:', err);
  }
}

generateFileAndFolder();