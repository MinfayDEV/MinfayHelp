const Discord = require('discord.js');
const translate = require('@vitalets/google-translate-api');

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
    
    let langage = args[0];
    let Text = args.slice(1).join(' ');

    const ambed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Aucun langage spécifié')
        .setDescription('Vous devez spécifier un langage dans lequel traduire votre texte.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    const bembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Aucun texte entré')
        .setDescription('Vous devez entrer du texte à traduire.')
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    if (!langage) {
        return message.channel.send(ambed);
    }

    if (!Text) {
        return message.channel.send(bembed);
    }

    try {
        translate(Text, {to: langage}).then(res => {
            message.channel.send(res.text);
            // message.channel.send(res.from.language.iso);
        }).catch(err => {
            const errorembed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle('Une erreur s\'est produite')
                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                .addField('Erreur :', err);

            message.channel.send(errorembed);
            console.error(err)
        });
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
            .addField('Erreur :', e);

        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'traduire'
}