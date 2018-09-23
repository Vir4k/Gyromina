const { ownerID, token } = require('../config.json');

module.exports = {

  name: "reboot",
  description: "Reboots Gyromina.",
  execute(message, args) {
    // Gets the 'gyrominaNope' emoji
    const nope = message.client.emojis.find("name", "gyrominaNope");

    // Checks to see if the bot owner (L375#6740) sent the message.
    if(message.author.id !== ownerID) {
      message.channel.send(`${nope} You don\'t have sufficient permissions to use that command!`)
      console.log('A user attempted to reboot me, but was unsuccessful!')
      return;
    }

    // Shuts down the current instance of the Discord Client.
    message.client.user.setStatus("invisible");
    console.log(`Rebooting ${message.client.user.tag}...`);
    message.client.destroy();
    // Reboots Gyromina by logging back into Discord with Gyromina's token
    message.client.login(token);
  },
};
