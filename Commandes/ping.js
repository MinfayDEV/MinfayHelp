const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const start = Date.now();
    message.channel.send("Ping 🏓")
        .then(sendedMessage => {
            const stop = Date.now();
            const diff = (stop - start);

            const embed = new Discord.RichEmbed()
                .setTitle('🏓 Pong 🏓')

                .addField('Temps du retour du message :', `**${diff}**ms`)
    .setFooter(" 𝐌𝐈𝐍𝐅𝐀𝐘 𝐇𝐄𝐋𝐏 ", "https://cdn.discordapp.com/attachments/700405884286664825/704420862522163280/7dd6a75e5d4d35483592d43f775dc83b.png")
    .setTimestamp(new Date());

                if (diff >= 300) {

                    embed.setColor("RANDOM");
                    embed.setDescription('✅ Le ping est correcte ✅');
                
                } else if (diff >= 150) {
                
                    embed.setColor("RANDOM");
                    embed.setDescription('✅ Le ping est correcte ✅');
                
                } else if (diff < 150) {
                
                    embed.setColor("RANDOM");
                    embed.setDescription('✅ Le ping est correcte ✅');
                }

            sendedMessage.edit(embed);
    });

    // let debut = Date.now();
    
    // message.channel.send('Ping 🏓...')
    //     .then((m) => {
            
    //         const embed = new Discord.RichEmbed()
    //             .setTitle('🏓 Pong 🏓')
    //             .addField('Temps du retour du message :', `**${Date.now() - debut}**ms`)
    //             .setFooter("Silenced | ©2020")
    //             .setTimestamp(new Date());
                
    //         if (Date.now() - debut >= 300) {

    //             embed.setColor('RED');
    //             embed.setDescription('❌ Le ping est mauvais ❌');

    //         } else if (Date.now() - debut >= 150) {

    //             embed.setColor('ORANGE');
    //             embed.setDescription('⚠ Le ping est médiocre ⚠');

    //         } else if (Date.now() - debut < 150) {

    //             embed.setColor('GREEN');
    //             embed.setDescription('✅ Le ping est correcte ✅');
    //         }
    
    //         m.edit(embed)
            
    //     });
}

module.exports.help = {
    name: 'ping'
}