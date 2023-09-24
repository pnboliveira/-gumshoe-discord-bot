import * as fs from 'fs-extra';
import * as readline from 'readline';
import * as examples from './examples';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let folderName = '';
let commandType = '';
let commandName = '';

// name the command category using readline and return it to folderName
function nameCommandCategory() {
  return new Promise((resolve, reject) => {
    rl.question('Name your command category: ', (answer) => {
      if(answer) {
        folderName = answer;
        resolve(answer);
      } else {
        reject(new Error('Invalid command category'));
      }
    });
  });
}

//select a command type using readline and return it to commandType
function selectCommandType() {
  return new Promise((resolve, reject) => {
    rl.question('Select a command type (reply/role/blank): ', (answer) => {
      if(answer === 'reply' || answer === 'role' || answer === 'blank') {
        commandType = answer;
        resolve(answer);
      } else {
        reject(new Error('Invalid command type. Please select one of these: role, reply or blank.'));
      }
    });
  });
}

//name the command using readline and return it to commandName
function nameCommand() {
  return new Promise((resolve, reject) => {
    rl.question('Name your command (avoid camelCase): ', (answer) => {
      if(answer) {
        commandName = answer;
        resolve(answer);
      } else {
        reject(new Error('Invalid command name'));
      }
    });
  });
}


async function generateFileAndFolder() {

  await nameCommandCategory();
  await selectCommandType();
  await nameCommand();


  try {
    switch(commandType) {
      case 'reply':
        await fs.ensureDir(`src/commands/${folderName}`); // Create a new directory if it doesn't exist
        await fs.writeFile(`src/commands/${folderName}/${commandName}.ts`, examples.reply(commandName)); // Create a new file with content
        console.log(`Command '${commandName}' created under '${folderName}'`);
        break;
      case 'role':
        await fs.ensureDir(`src/commands/${folderName}`); // Create a new directory if it doesn't exist
        await fs.writeFile(`src/commands/${folderName}/${commandName}.ts`, examples.role(commandName)); // Create a new file with content
        console.log(`Command '${commandName}' created under '${folderName}'`);
        break;
      default:
      case 'blank':
        await fs.ensureDir(`src/commands/${folderName}`); // Create a new directory if it doesn't exist
        await fs.writeFile(`src/commands/${folderName}/${commandName}.ts`, examples.blank(commandName)); // Create a new file with content
        console.log(`Command '${commandName}' created under '${folderName}'`);
        break;
    }
    process.exit(0);
  } catch(err) {

    console.error('Invalid command type. Command was not created. Error: ', err);
    process.exit(1);
  }
}

generateFileAndFolder();