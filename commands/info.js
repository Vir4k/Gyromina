// Require discord.js, the cdn file, and the package file
const Discord = require('discord.js');
const cdn = require('../systemFiles/cdn.json');
const botinfo = require('../package.json');

exports.run = {
  execute(message, args, client) {
    const embed = new Discord.MessageEmbed()
      .setAuthor("The Gyroscopic Dictionary", client.user.avatarURL())
      .setColor(0x7effaf)
      .setTitle("Gy·ro·mi·na\n/jīräminə/")
      .setDescription(`*noun:*\n[1] A multipurpose Discord bot created by <@${botinfo.authorID}> (${botinfo.author}), with contributions & support from <@${botinfo.contributorIDs[0]}> (${botinfo.contributors[0]}), <@${botinfo.contributorIDs[1]}> (${botinfo.contributors[1]}), and others, currently running v${botinfo.version} on ${client.guilds.cache.size} servers\n[2] \"${botinfo.tagline}\"`)
      .setFooter(`Requested by ${message.author.tag} • Source: package.json`, message.author.avatarURL())
      .setTimestamp()
      .addField("*Origin:*", "​***\`    L-V3R7     --->    Gyromina   \`***\n*\` Jul 07, 2018        Sep 15, 2018 \`\nMore information: [https://l375.weebly.com/gyromina](https://l375.weebly.com/gyromina)*")
      .addField("*Usage:*", "*\"You can invite Gyromina to your Discord server using this link: [https://discord.now.sh/490590334758420481?p537259072](https://discord.now.sh/490590334758420481?p537259072)\"*")
      .addField("*See also:*", "​*\`GitHub repository\`: [https://github.com/Lowie375/Gyromina](https://github.com/Lowie375/Gyromina)\n​[Project Manager](https://github.com/Lowie375/Gyromina/projects/1)"
        + " / [Report a Bug](https://github.com/Lowie375/Gyromina/issues) / [Bug Tracker](https://github.com/Lowie375/Gyromina/projects/2)*")
      .setThumbnail(cdn.avatar);

    message.channel.send({embed: embed});
  },
};

exports.help = {
  "name": "info",
  "aliases": "information",
  "description": "Displays Gyromina's info.",
  "usage": `${process.env.prefix}info`,
  "weight": 1,
  "hide": 0,
  "wip": 0,
  "dead": 0,
};
