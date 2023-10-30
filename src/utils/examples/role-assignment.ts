export default function roleAssignment(fileName) {
    return `import { CommandInteraction, SlashCommandBuilder, GuildMemberRoleManager, Role } from 'discord.js';

    export const data = new SlashCommandBuilder()
        .setName('${fileName}')
        .setDescription('This is a Description example for the assign-birthdays command.')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The member to update the role of')
                .setRequired(true))
        .addRoleOption(option =>
            option
                .setName('role')
                .setDescription('The selected role'));
    export async function execute(interaction: CommandInteraction) {
        if(!interaction.isChatInputCommand()) return;
        const member = interaction.options.getMember('target');
        const memberRoles = (interaction.member.roles as GuildMemberRoleManager).cache;
        if(memberRoles.some(role => role.name !== 'role name')) {
            if (!interaction.isChatInputCommand()) return;
            const role = interaction.options.getRole('role');
            (member.roles as GuildMemberRoleManager).add(role as Role);
        }
    }
    `;
}