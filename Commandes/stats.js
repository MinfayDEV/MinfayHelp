const Discord = require('discord.js');
const moment = require('moment-timezone');
moment.locale('fr');

module.exports.run = (client, message, args) => {
    const membre = message.guild.member(message.mentions.members.first() || message.member);

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Statistiques de ${membre.user.username}`)
        .setThumbnail(membre.user.displayAvatarURL)
        .addField('Pseudo :', membre.user.username)
        .addField('Tag :', ` #${membre.user.discriminator}`)
        .addField('ID', membre.id)
        .addField('Activité :', membre.user.presence.game ? membre.user.presence.game.name: 'Cet utilisateur ne joue pas')
        .addField('A créé son compte le :', moment(membre.user.createdAt).tz("Europe/Paris").format('[Le] L [à] LTS'))
        .addField('A rejoint le serveur le :', moment(membre.joinedAt).tz("Europe/Paris").format('[Le] L [à] LTS'))
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

        message.channel.send(embed)
            .catch((error) => {
                const errorembed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle('Erreur')
                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Minfay#5828.')
                    .addField('Erreur :', err);
                if (error) {
                    console.error(error);

                    message.channel.send(errorembed);
                }
            })
}

module.exports.help = {
    name: 'stats'
}