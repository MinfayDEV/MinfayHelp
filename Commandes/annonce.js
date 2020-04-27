const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")

    let sayembed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setTitle("ANNONCE  𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ")
    .setDescription(args.join(" "))
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());
    message.channel.send(sayembed)
 

} 

module.exports.help = {
    name: 'annonce'
}
