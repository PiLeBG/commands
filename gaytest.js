const Discord = require('discord.js')

module.exports.run = function(client, message, args){
  var cible = message.mentions.members.first().user.username
  if(!cible) return message.channel.send('diff\n- Utilisateur invalide')
  let gayedNumber = Math.floor(Math.random() * (120 - 0 + 1) + 0);
  var embed = new Discord.RichEmbed()
      .setDescription(`**${cible}** est gay à **${gayedNumber}%** :gay_pride_flag: `)
      .setColor('#3ADF00')
      .setTitle('Gay test :gay_pride_flag:')
      .setTimestamp()
      .setFooter(`Envoyé par ${message.author.username}`, `${message.author.avatarURL}`)
  message.channel.send(embed)
}



module.exports.description = 'Tester si un membre est gay'
module.exports.type = 'FUN'
module.exports.name = 'gaytest'
