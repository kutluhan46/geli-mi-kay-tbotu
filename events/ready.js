const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 800000);
client.user.setPresence({
        game: {
            name: `Yüce Martish`,
                           
            type: 'WATCHING'
        },
        status: 'idle'
    })
    console.log(`[BOT]: Giriş Yaptı! Komutlar Yüklendi galiba!`);
}
