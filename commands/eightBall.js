module.exports = {
  name: "8ball",
  description: "Enter a question of more than 2 words to get a random answer",
  rand: [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ],

  /**
   * What is run when someone enters this in chat
   */
  execute(message) {
    let messageArray = message.content.split(" ");
    if (messageArray.length <= 1) {
      message.channel.send("Please ask a question!");
      return;
    }
    message.channel.send(
      "Magic 8Ball says: " +
        this.rand[Math.floor(Math.random() * this.rand.length)]
    );
  },
};
