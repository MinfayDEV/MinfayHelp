const Discord = require('discord.js')
const config = require('../config');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(":pushpin: Aide  𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏  BOT")
    .setDescription("**Mon prefix est** `uk.`.")
    .addField(":hammer: Commandes de Modération", "`ban` - `clear` - `infractions` - `kick` - `reload` - `sondage` - `tempban` - `templock` - `tempmute` - `warn`")
    .addField(":package: Commandes Utiles", "`bot-info` - `help` - `ping` - `report` - `server-info` - `stats` - `version`")
    .addField(":clown: Commandes Fun", "`8ball` - `avatar` - `calc` - `dog` - `giphy` - `google`, `traduire`")
    .setThumbnail("https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")

    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());
    message.channel.send(embed)
}

module.exports.help = {
    name: 'help'
}