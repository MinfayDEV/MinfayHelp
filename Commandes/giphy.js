const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Fraude de permission')
        .setDescription('Vous ne pouvez pas m\'utiliser pour mentionner tout les membres du serveur.')
    .setFooter("Unknow", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@everyone')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@here')) {
        return message.channel.send(embed);
    }

    message.channel.send(`https://giphy.com/explore/${args.join('-')} \n \nRecherche : ${args.join(' ')}`);

}

module.exports.help = {
    name: 'giphy'
}