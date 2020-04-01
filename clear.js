module.exports = {
    name: "clear",
    aliases: ["purge", "nuke"],
    category: "moderation",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply(":x: | ++**ATTENTION**___, **vous ne pouvez pas utiliser cette commande, vous avez pas la permission** ``GÉRER MESSAGES.``").then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply(":x: | **Merci de préciser un nombre de message à supprimer.**").then(m => m.delete(5000));
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply(":x: **Désolé, je n'ai pas la permission** ``GÉRER MESSAGES.`` ").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 1000) {
            deleteAmount = 1000;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`:white_check_mark: | \`${deleted.size}\` **messages supprimés du salon !**`))
            .catch(err => message.reply(`**QUELQUE CHOSE NE VA PAS...**${err}`));
    }
}

module.exports.type = 'MODERATION'
module.exports.name = 'clear'
