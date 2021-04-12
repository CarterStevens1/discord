module.exports = {
  name: "ping",
  description: "Sends a Pong!",
  execute(message) {
    message.channel.send("Pong.");
  },
};
