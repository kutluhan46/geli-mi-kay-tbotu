const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('❌ Uyarı ❌', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.channel.send(`Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`).catch(console.error);

  if (!message.guild.member(user).bannable) return message.channel.send(`❌ Belirttiğiniz kişiyi sunucudan yasaklayamam çünkü sunucuda benden daha üstün bir rolü var.`);
  message.guild.member(user).ban();

  message.channel.send(" Başarıyla " + user + " adlı kullanıcı **" + reason + "** sebebiyle sunucudan yasaklandı.")
   user.send(`Merhaba, **${guild.name}** adlı sunucudan **${reason}** sebebi ile ** ${message.author.username}** adlı yetkili tarafından yasaklandınız!`)
  .setimages(`https://discordapp.com/assets/6b3cc6ff5c09de83cc37561a43304dee.mp4`)
  message.channel.send('> **Kod Yapımcısı: The Penthos**').then(m => m.delete(1000))//burayı silebilirsiniz
     
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 3,
    kategori: "moderasyon",
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
 
};