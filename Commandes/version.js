const Discord = require('discord.js');
const config = require('../config');

module.exports.run = (client, message, args) => {
    message.channel.send('` La version du bot BrokenBuilders BOT est : ` `' + config.version + '`');
}

module.exports.help = {
    name: 'version'
}