const image = require("imageapi.js");
const Discord = require("discord.js");

module.exports = {
  name: "meme",
  description: "Gives you a meme",
  execute: async (message, args) => {
    const subReddits = ["dankmeme", "meme", "memes"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await image(random);

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`Your meme sir/ma'am. From r/${random}`)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
  },
};
