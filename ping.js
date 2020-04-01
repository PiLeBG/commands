module.exports.run = function(client, message, args){
    let ping = client.pings
    message.channel.send('**Pong !** 🏓 \n Je suis actuellement à **' + ping + 'ms**')
}

module.exports.description = 'Ping du bot'
module.exports.type = 'FUN'
module.exports.name = 'ping'
