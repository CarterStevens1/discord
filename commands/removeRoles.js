const Discord = require("discord.js");

module.exports = {
  name: "removerole",
  description: "removes a role from the user",
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",

  execute(message, args) {
    let targetMember = message.mentions.users.first();
    if (!targetMember) {
      message.reply("please specify someone to remove a role from.");
      return;
    }

    // @ new members
    args.shift();

    const roleName = args.join(" ");
    const { guild } = message;

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName;
    });
    if (!role) {
      message.reply(`There is no role with the name ${roleName}`);
    }

    const member = guild.members.cache.get(targetMember.id);

    if (member.roles.cache.get(role.id)) {
      member.roles.remove(role);
      message.reply(`${member} does not have the ${roleName} role anymore`);
    } else {
      message.reply(`That user does not have the ${roleName} role`);
    }
  },
};
