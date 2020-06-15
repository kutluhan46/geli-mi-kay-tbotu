const Discord = require("discord.js");
const { oneLine, stripIndents } = require('../ayarlar.json');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("561496921873580052") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "685800026223673365";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
     '0': `<a:sfr:714231251040600204>`,
    '1': `<a:bir:714231283961692160>`,
    '2': `<a:iki:714231300625662023>`,
    '3': `<a:uc:714231328446349322>`,
    '4': `<a:dort:714231337699246220>`,                       
    '5': `<a:bes:714231352265801840>`,
    '6': `<a:alt:714231356665757707>`,
    '7': `<a:yedi:714231362370011238>`,
    '8': `<a:sekiz:714231362277736449>`,
    '9': `<a:dokuz:714231359383535627>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
       '0': `<a:sfr:714231251040600204>`,
    '1': `<a:bir:714231283961692160>`,
    '2': `<a:iki:714231300625662023>`,
    '3': `<a:uc:714231328446349322>`,
    '4': `<a:dort:714231337699246220>`,                       
    '5': `<a:bes:714231352265801840>`,
    '6': `<a:alt:714231356665757707>`,
    '7': `<a:yedi:714231362370011238>`,
    '8': `<a:sekiz:714231362277736449>`,
    '9': `<a:dokuz:714231359383535627>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "⩙";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "⩙").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
    '0': `<a:sfr:714231251040600204>`,
    '1': `<a:bir:714231283961692160>`,
    '2': `<a:iki:714231300625662023>`,
    '3': `<a:uc:714231328446349322>`,
    '4': `<a:dort:714231337699246220>`,                       
    '5': `<a:bes:714231352265801840>`,
    '6': `<a:alt:714231356665757707>`,
    '7': `<a:yedi:714231362370011238>`,
    '8': `<a:sekiz:714231362277736449>`,
    '9': `<a:dokuz:714231359383535627>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
       '0': `<a:sfr:714231251040600204>`,
    '1': `<a:bir:714231283961692160>`,
    '2': `<a:iki:714231300625662023>`,
    '3': `<a:uc:714231328446349322>`,
    '4': `<a:dort:714231337699246220>`,                       
    '5': `<a:bes:714231352265801840>`,
    '6': `<a:alt:714231356665757707>`,
    '7': `<a:yedi:714231362370011238>`,
    '8': `<a:sekiz:714231362277736449>`,
    '9': `<a:dokuz:714231359383535627>`}[d];
      })
    }
  ///Raze reis farkıyla bebeğim
const emoji99 = client.emojis.find("name", "kral_4");
const emoji1 = client.emojis.get("711678120817590302")
const emoji22 = client.emojis.get("637634695747731457")
const emoji44 = client.emojis.get("598490704834068491")
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('The Pethos')
 .setThumbnail(client.user.avatarURL)
 .setDescription(` **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n  **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n  **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.**\n\n  **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
message.delete(8000);
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.sendEmbed(embed1).then(m => m.delete(8000)); 
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}
