const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send('Vous n\'avez pas la permisssion d\'utiliser cette commande.');
    }

    if (!args.join(' ')) {
        return message.channel.send('Veuillez spécifier une question pour le sondage.');
    }

    if (args.join(' ').length > 256) {
        return message.channel.send('La question du sondage ne doit pas dépasser les 256 caractères.');
    }

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(args.join(' '))
        .setDescription('Interagissez avec les réactions ci-dessous.')
        .setFooter(`Sondage proposé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    try {   
        message.delete();
        message.channel.send(embed)
            .then((m) => {
                m.react('✅');
                m.react('❌');
            })
            .catch((error) => {
                const errorembed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle('Erreur')
                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                    .addField('Erreur', error)
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());
                if (error) {
                    console.error(error);

                    message.channel.send(errorembed);
                }
            })
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
            .addField('Erreur :', e)
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());
        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'sondage'
}