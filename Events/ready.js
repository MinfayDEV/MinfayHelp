const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} esst en ligne`)


    let statuses = [
        `/help`,
        `@MinfayD3V`
        
        
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 750)

}


