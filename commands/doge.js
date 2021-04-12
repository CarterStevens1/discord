const image = require("imageapi.js");
const Discord = require("discord.js");

module.exports = {
  name: "doge",
  description: "doge meme generator",
  execute: async (message, args) => {
    const subReddits = ["doge"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await image(random).catch((err) => {
      console.log("Error fetching image: ", JSON.stringify(err));
      return false;
    });

    if (!img) {
      return message.channel.send("Unable to fetch image try again later.");
    }

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`From r/${random}`)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
  },
};
