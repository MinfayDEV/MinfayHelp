const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.guild.member(message.mentions.members.first() || message.member);

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Avatar de _${membre.user.username}_`)
        .setDescription(`[Ouvrir dans le navigateur](${membre.user.displayAvatarURL})`)
        .setImage(membre.user.displayAvatarURL)
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    message.channel.send(embed);
}

module.exports.help = {
    name: 'avatar'
}