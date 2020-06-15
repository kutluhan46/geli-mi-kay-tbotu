const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("** Furkanıııın Babasıığğ Geceğğ Abulayy **")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "Furkanın-Babası",
  description: "Furkanın-Babası",
  usage: "Furkanın-Babası"
};