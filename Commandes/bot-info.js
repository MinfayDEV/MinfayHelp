const Discord = require('discord.js');
const moment = require('moment-timezone');
moment.locale('fr');
const os = require('os');
const config = require('../config');

module.exports.run = (client, message, args) =>{
    let cpuusage = process.cpuUsage();
    let memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Mes informations')
        .setThumbnail(client.user.displayAvatarURL)
        .addField('Mon nom :', client.user.username)
        .addField('Mon tag :', '#' + client.user.discriminator)
        .addField('Mon ID :', client.user.id)
        .addField('Date et heure de ma création :', moment(client.user.createdAt).tz("Europe/Paris").format('[Le] L [à] LTS'))

        .addBlankField()
    
        .addField('Mémoire utilisée :', memory + " MB", true)
        .addField('Version Node JS :', process.version, true)
        .addField('Version Discord.js :', Discord.version, true)
        .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
        .setTimestamp(new Date());

    try {
        message.channel.send(embed)
            .catch((error) => {
                const errorembed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle('Erreur')
                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
                    .addField('Erreur :', error);

                console.error(error);

                message.channel.send(errorembed);
            })
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle('Erreur')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter 𝗠𝗶𝗻𝗳𝗮𝘆.#1654.')
            .addField('Erreur :', e);

        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'bot-info'
}