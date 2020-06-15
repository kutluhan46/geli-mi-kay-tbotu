const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '718768490529423413' //KAYIT YETKİLİSİ ID
let verbuse = '718768490508582945' //VERİLECEK ROL ID
let verbusem = '718768490508582945' //VERİLECEK ROL ID
let albuse = '718768490487480564' //ALINACAK ROL ID
let albusem = '' //ALINACAK ROL ID l Kullanmicaksanız silin
let isimön = ' ⩙ ' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
let isimson = '' //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')
  if (!isim) return message.channel.send('Bir İsim Yazmalısın 💖')

  setTimeout(function(){
  member.setNickname(`${isimön}${isim}${isimson}`)
  },2000)
  setTimeout(function(){
  member.addRole(verbuse)
  member.addRole(verbusem)
  },3000)
  setTimeout(function(){
  member.removeRole(albuse)
  member.addRole(albusem)
  },4000)
  
 const emoji = client.emojis.find(emoji => emoji.name === "tik");
 let embed = new Discord.RichEmbed()
  .setColor('RED')
  .setDescription(`

 <a:yaldz:715582823930789948> ${isimön}${isim}${isimson},Kullanıcısı <@&718768490508582945> Rolü İle Sunucuya Giriş Yaptı! <a:mavitik:713157920149340213>

`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  message.channel.send(embed)
message.react(emoji)
};
  
  


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek','e','man'],
  permLevel: 0
}
exports.help = {
  name: 'erkek',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '!erkek <yeni nick>'
}