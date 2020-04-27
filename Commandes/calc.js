const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = (cient, message, args) => {
    if (!args.join(' ')) {
        return message.channel.send('Vous devez entrer des facteurs à calculer.');
    }

    let calcul;

    try {
        calcul = math.evaluate(args.join(' '))
    } catch (e) {
        const errorembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
            .addField('Erreur :', e)
            .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
            .setTimestamp(new Date());
    }

    try {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Calcul effectué !')
        .addField('Calcul :', args.join(' '))
        .addField('Résultat :', calcul)
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

    message.channel.send(embed);
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
    name: 'calc'
}