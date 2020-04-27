const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Fraude de permission')
        .setDescription('Vous ne pouvez pas m\'utiliser pour mentionner tout les membres du serveur.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@everyone')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@here')) {
        return message.channel.send(embed);
    }
    
    if (!args.join(' ')) {
        return message.reply('la recherche ne peut pas être vide');
    }

    const ambed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Recherche effectuée !')
        .setDescription(`J'ai effectué ta recherche. Tu peux retrouver les résultats [ici](https://www.google.fr/#q=${args.join('+')}). \n \n__Votre recherche__ : ${args.join(' ')}`)
    
        message.channel.send(ambed);
}

module.exports.help = {
    name: 'google'
}