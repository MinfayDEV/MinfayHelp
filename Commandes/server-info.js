const Discord = require('discord.js');
const moment = require('moment-timezone');
moment.locale('fr');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Information sur le serveur _${message.guild.name}_`)
        .setThumbnail(message.guild.iconURL)
        .addField('Nom du serveur :', message.guild.name)
        .addField('ID du serveur :', message.guild.id)
        .addField('Date de création du serveur :', moment(message.guild.createdAt).tz("Europe/Paris").format('[Le] L [à] LTS'))
        .addField('Nombre de membres :', message.guild.members.size + ' ' + 'membres')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());
        


    message.channel.send(embed)
        .catch((error) => {

            const errorembed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle('Erreur')
                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Minfay#5828.')
                .addField('Erreur :', error)
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

            console.error(error);

            message.channel.send(errorembed);
        })
}

module.exports.help = {
    name: 'server-info'
}