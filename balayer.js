const Discord = require('discord.js')

module.exports.run = function(client, message, args){
    var cible = message.mentions.members.first().user.username
    if(!cible) return message.channel.send('diff\n- Utilisateur invalide')
    var embed = new Discord.RichEmbed()
        .setTitle(`**${message.author.username} a balayé ${cible}**`)
        .setImage('https://cdn.discordapp.com/attachments/694263608527552532/694497732961763388/baleytte.gif')
        .setColor('#3ADF00')
        .setTimestamp()
        .setFooter(`Envoyé par ${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed)
}

module.exports.description = 'Balayer quelqu\'un'
module.exports.type = 'FUN'
module.exports.name = 'balayer'
