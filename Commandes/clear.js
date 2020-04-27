const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Permission manquante')
        .setDescription('Vous n\'avez pas la permission de supprimer des messages.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    const aembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Permission manquante')
        .setDescription('Je n\'ai pas la permission de supprimer des messages.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    const bembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Aucun nombre spécifié')
        .setDescription('Vous devez spécifier un nombre de messages à supprimer.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    const cembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Aucun nombre spécifié')
        .setDescription('Vous devez spécifier un nombre de messages à supprimer. Spécifier des caracètes spéciaux ou des lettres est inutile.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(embed);
    }
    if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(aembed);
    } 
    if (!args[0]) {
        return message.channel.send(bembed);
    }
    else if (isNaN(args[0])) {
        return message.channel.send(cembed);
    }

    try {                                                                 
        await message.delete()
            .then((m) => {  
                message.channel.bulkDelete(args[0])
                    .then((messages) => {
                        message.channel.send(`**${messages.size}** messages ont été supprimés !`)
                            .then((m) => {
                                m.delete(5000)
                            })
                    })
                    .catch((error) => {
                        const errorembed = new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setTitle('Erreur')
                            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                            .addField('Erreur :', error)
                            .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
                            .setTimestamp(new Date());

                        message.channel.send(errorembed);
                        console.error(error);
                        })
            })
            .catch((error) => {
                const errorembed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle('Erreur')
                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                    .addField('Erreur :', error)
                    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
                    .setTimestamp(new Date());

                message.channel.send(errorembed);
                console.error(error);;
            })
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle('Erreur')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
            .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
            .setTimestamp(new Date());


        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'clear'
}