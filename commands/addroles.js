const Discord = require("discord.js");

module.exports = {
  name: "addrole",
  description: "adds a role to a user",
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",

  execute(message, args) {
    let targetMember = message.mentions.users.first();
    if (!targetMember) {
      message.reply("please specify someone to give a role to.");
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
    member.roles.add(role);

    message.reply(`${member} now has the role ${roleName}`);
  },
};
