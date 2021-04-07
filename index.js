require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const TOKEN = "";
const prefix = "!";

client.once("ready", () => {
  const generalChannel = client.channels.get("828966301916856334");
  generalChannel.send("Hello I am live and ready!");
  console.log("Ready!");
  // Get the channel via ID
});

client.on("message", (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    // Prevent bot from responding to its own messages
    return;
  }

  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage);
  }
});

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1); // Remove the leading exclamation mark
  let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
  let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
  let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

  console.log("Command received: " + primaryCommand);
  console.log("Arguments: " + arguments); // There may not be any arguments

  if (primaryCommand == "help") {
    helpCommand(arguments, receivedMessage);
  } else if (primaryCommand == "multiply") {
    multiplyCommand(arguments, receivedMessage);
  } else if (primaryCommand == "8ball") {
    eightBall(arguments, receivedMessage);
  } else {
    receivedMessage.channel.send(
      "I don't understand the command. Try `!help` or `!multiply`"
    );
  }
}

function helpCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {
    receivedMessage.channel.send(
      "It looks like you might need help with " + arguments
    );
  } else {
    receivedMessage.channel.send(
      "I'm not sure what you need help with. Try `!help [topic]`"
    );
  }
}

function multiplyCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send(
      "Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`"
    );
    return;
  }
  let product = 1;
  arguments.forEach((value) => {
    product = product * parseFloat(value);
  });
  receivedMessage.channel.send(
    "The product of " +
      arguments +
      " multiplied together is: " +
      product.toString()
  );
}

function eightBall(arguments, receivedMessage) {
  var rand = [
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
  ];
  if (arguments.length <= 1) {
    receivedMessage.channel.send("Please ask a question!");
    return;
  }
  receivedMessage.channel.send(
    "Magic 8Ball says: " + rand[Math.floor(Math.random() * rand.length)]
  );
}

client.login(TOKEN);
