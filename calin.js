const Discord = require('discord.js')

module.exports.run = function(client, message, args){
    var cible = message.mentions.members.first().user.username
    if(!cible) return message.channel.send('diff\n- Utilisateur invalide')
    var embed = new Discord.RichEmbed()
        .setTitle(`**${message.author.username} fait un calin à ${cible}**`)
        .setImage('https://media.discordapp.net/attachments/676722255555723295/694229087920717904/source_1.gif')
        .setColor('#ff69b4')
        .setTimestamp()
        .setFooter(`Envoyé par ${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed)
}

module.exports.description = 'Faire un calin'
module.exports.type = 'FUN'
module.exports.name = 'calin'
