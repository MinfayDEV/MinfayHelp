const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Permission manquante')
        .setDescription('Vous n\'avez pas la permission de bannir un membre')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    const aembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Permission manquante')
        .setDescription('Je n\'ai pas la permission de bannir un membre.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    const bembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Aucun utilisateur mentionné')
        .setDescription('Veuillez mentionner un utilisateur à bannir.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    const cembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Utilisateur introuvable')
        .setDescription('L\'utilisateur que vous souhaitez bannir est introuvable. Veuillez vérifier la présence de l\'utilisateur que vous souhaitez bannir.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
        return message.channel.send(aembed);
    }

    if (message.mentions.users.size === 0) {
        return message.channel.send(bembed);
    }

    let banMember = message.guild.member(message.mentions.users.first());

    if (!banMember) {
        return message.channel.send(cembed);
    }

    let reason = args.slice(1).join(" ");

    const dembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Vous avez été sanctionné(e)')
        .addField('Type de sanction :', 'Bannissement')
        .addField('Bannissement temporaire :', 'Non')
        .addField('Serveur :', message.guild.name)
        .addField('Banni par :', `${message.author.username}#${message.author.discriminator}`)
        .addField('Raison :', reason ? reason: '_Aucune raison spécifiée_')
        .setTimestamp(new Date());

    const eembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Un utilisateur a été sanctionné')
        .addField('Type de sanction :', 'Bannissement')
        .addField('Bannissement temporaire :', 'Non')
        .addField('Utilisateur banni :', banMember.user.username)
        .addField('Tag de l\'utilisateur banni :', `#${banMember.user.discriminator}`)
        .addField('ID de l\'utilisateur banni :', banMember.id)
        .addField('Banni par :', message.author.username)
        .addField('Tag du modérateur :', `#${message.author.discriminator}`)
        .addField('Raison :', reason ? reason: '_Aucune raison spécifiée_')
        .setTimestamp(new Date());
    try {
        message.mentions.users.first().send(dembed)
                .then(() => {
                    banMember.ban(reason)
                        .then((member) => {
                            message.channel.send(eembed);
                        })
                            .catch((err) => {

                                const errorembed = new Discord.RichEmbed()
                                    .setColor("RANDOM")
                                    .setTitle('Erreur')
                                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                                    .addField('Erreur :', err)
                                    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
                                    .setTimestamp(new Date());

                                if (err) {
                                    console.error(err);
                                    return message.channel.send(errorembed);
                                }
                            });
                })
                    .catch((error) => {
                        const errorembed = new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setTitle('Erreur')
                            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                            .addField('Erreur :', err)
                            .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
                            .setTimestamp(new Date());
                        if (error) {
                            console.error(error);
                            message.channel.send(errorembed);
                        }
                        banMember.ban(reason)
                                .then((member) => {
                                    message.channel.send(eembed);
                                })
                                    .catch((err) => {

                                        const errorembed = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setTitle('Erreur')
                                            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                                            .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
                                            .setTimestamp(new Date());
                                            

                                        if (err) {

                                            console.error(err);

                                            return message.channel.send(errorembed);
                                        }
                                    });
                    });
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
            .addField('Erreur :', e)
            .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
            .setTimestamp(new Date());

        message.channel.send(errorembed);
        console.error(e);
    }
};

module.exports.help = {
    name: 'ban'
};
