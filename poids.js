const Discord = require('discord.js')

module.exports.run = function(client, message, args){
  var cible = message.mentions.members.first().user.username
  if(!cible) return message.channel.send('diff\n- Utilisateur invalide')
  let gayedNumber = Math.floor(Math.random() * (120 - 0 + 1) + 0);
  var embed = new Discord.RichEmbed()
      .setDescription(`**${cible}** pèse **${gayedNumber}kg** ! 👌 `)
      .setColor('#3ADF00')
      .setTitle('Balance ⚖️')
      .setTimestamp()
      .setFooter(`Envoyé par ${message.author.username}`, `${message.author.avatarURL}`)
  message.channel.send(embed)
}



module.exports.description = 'Voir le poids d\'un membre'
module.exports.type = 'FUN'
module.exports.name = 'poids'
