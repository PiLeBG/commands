const Discord = require('discord.js')

module.exports.run = function(client, message, args){
  var cible = message.mentions.members.first().user.username
  if(!cible) return message.channel.send('diff\n- Utilisateur invalide')
  let gayedNumber = Math.floor(Math.random() * (120 - 0 + 1) + 0);
  var embed = new Discord.RichEmbed()
      .setDescription(`**${cible}** et **${message.author.username}** sont compatibles à **${gayedNumber}%** :heart: `)
      .setColor('#3ADF00')
      .setImage(`${message.author.avatarURL}`)
      .setTitle('Love test :heart:')
      .setTimestamp()
      .setFooter(`Envoyé par ${message.author.username}`, `${message.author.avatarURL}`)
  message.channel.send(embed)
}



module.exports.description = 'Tester si tu peux etre en couple avec un membre'
module.exports.type = 'FUN'
module.exports.name = 'lovetest'
