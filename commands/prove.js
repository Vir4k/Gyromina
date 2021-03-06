// Require some global functions (RNG + Clean)
const {getRandomInt, Clean} = require('../systemFiles/globalFunctions.js');

// List of 'proofs'
const proof = ["because that's just how it is.",
  "because smart people think so.",
  "because Gyromina said so.", 
  "for some odd reason.", 
  "because Gyromina is too slow to argue.",
  "because Gyromina heard that was true.",
  ".",
  "because Gyromina was never told otherwise.",
  "because it's the truth.",
  "because the RNG said so, and the RNG is always right.",
  "because the internet thinks so.",
  "because… why not.",
  "because Gyromina is never gonna tell a lie… and hurt you. _\\\*insert rickroll here\\\*_",
  "because… yes.",
  "because it helps Gyromina sleep at night."];

exports.run = {
  execute(message, args, client) {
    if (args.length == 0)
      return message.channel.send(`You didn't give me anything to prove, <@${message.author.id}>!`);
    
    const [...statement] = Clean(args);

    var num = getRandomInt(0, proof.length-1);
    const selected = proof[num];

    message.channel.send(`${statement.join(" ")} ${selected}\n**Deal with it.**`);
  }
};

exports.help = {
  "name": "prove",
  "description": "\'Proves\' that the input is true.",
  "usage": `${process.env.prefix}prove <statement>`,
  "params": "<statement>",
  "weight": 1,
  "hide": 0,
  "wip": 0,
  "dead": 0,
};
