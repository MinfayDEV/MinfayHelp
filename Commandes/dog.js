const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    const dog = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json.message);

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Wouaf 🐶')
        .setImage(dog)
        .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
        .setTimestamp(new Date());

    message.channel.send(embed);
}

module.exports.help = {
    name: 'dog'
}