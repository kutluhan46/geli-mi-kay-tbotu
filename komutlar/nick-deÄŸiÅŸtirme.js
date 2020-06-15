const Discord = require('discord.js');

exports.run = async (client, message, args) => {
      if (!message.member.roles.has("718768490529423413")) return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkin yok.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ") // boş bırak
  let yas = args.slice(2).join("") // boş bırak
  if (!member) return message.channel.send('p!nick @uye yeniisim şeklinde kullanınız')
  if (!isim) return message.channel.send('İsmini değistireceğin üyenin etiketini girmedin.')
  member.setNickname(` ⩙  ${isim}`)
  message.react("emoji id") 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isim','nick'],
  permLevel: 0
}
exports.help = {
  name: 'nick',
  description: "Birinin nickini değiştirir.",
  usage: 'isim <yeni nick>'
}