module.exports = {
  name: "multiply",
  description: "Multiplys two numbers togerther",

  execute(message, args) {
    if (args.length < 2) {
      message.channel.send(
        "Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`"
      );
      return;
    }
    let product = 1;
    args.forEach((value) => {
      product = product * parseFloat(value);
    });
    message.channel.send(
      "The product of " +
        args +
        " multiplied together is: " +
        product.toString()
    );
  },
};
