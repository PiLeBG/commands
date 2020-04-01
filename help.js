const Discord = require('discord.js')

module.exports.run = function(client, message, args){
    if(args[0]){
        let command = args[0]
        let cmd = client.commands.get(command)
        if (!cmd || cmd == 'help') return message.channel.send('This command is invalid')
        let embed = new Discord.RichEmbed()
            .setTitle('**' + command + '** (``' + cmd.type + '``)')
            .setDescription(cmd.description)
            .setFooter(`Envoyé par ${message.author.username}`, `${message.author.avatarURL}`)
        message.channel.send(embed)
    } else {
        var fun = '> '
        var moderation = '> '
        var utilitaire = '> '
        client.commands.forEach(cmd => {
            if(cmd.type == 'FUN'){ fun = fun + ' ``' + cmd.name + '``,' }
            if(cmd.type == 'MODERATION'){ moderation = moderation + ' ``' + cmd.name + '``,' }
            if(cmd.type == 'UTILITAIRE'){ utilitaire = utilitaire + ' ``' + cmd.name + '``,' }
        })
        let embed = new Discord.RichEmbed()
            .setTitle('__Commandes de Tropical__')
            .setDescription('Liste des commandes')
            .addField('__**➤ Fun 🍑**__', fun.substring(0, fun.length-1))
            .addField('__**➤ Modération 🛠️**__', moderation.substring(0, moderation.length-1))
            .addField('__**➤ Utilitaire 🔰**__', utilitaire.substring(0, utilitaire.length-1))
            .setColor('#3ADF00')
            .setTimestamp()
            .setThumbnail(client.user.avatarURL)
            .setFooter(`Envoyé ${message.author.username}`, `${message.author.avatarURL}`)
        message.channel.send(embed)
    }
}
