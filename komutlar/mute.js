const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //sustur @üye 1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Bu Komutu Kullanmak İçin : sustur <Kullanıcı> <Süre> Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hata: Geçici olarak susturmaya çalıştığınız kişi yetkili veya botun yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor.");
let muterole = message.guild.roles.find(r => r.name === "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          CONNECT: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bu komutu kullanmak için <prefixiniz>sustur @<Kullanıcı> <Süre> olarak yazmalısınız.");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> kullanıcısı için konuşma izinleri kaldırıldı. Şu kadar süresi var; ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> adlı kişinin susturulma süresi dolduğu için susturulması kaldırıldı.`);
  }, ms(mutetime));

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mute' ],
  permLevel: 0
};

exports.help = {
  name: 'sustur',
  description: 'Bir kullanıcıyı belirtilen süreyle susturur.',
  usage: 'sustur @Kullanıcı -süre-'
};