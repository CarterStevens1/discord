module.exports = {
  name: "roll",
  description: "rolls a dice",

  execute(message, args) {
    // let dice = Math.floor(Math.random() * 6) + 1;

    if (args > 0) {
      let dice = Math.floor(Math.random() * args) + 1;
      message.channel.send(`your number rolled out of ${args} is ${dice}`);
    }
  },
};
