const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs') //fs = Files Sync
const colors = require('colors')

const {prefix, token} = require('./config.json')
client.prefix = prefix
client.commands = new Discord.Collection()


fs.readdir('./commands', async(err, files) => {
    if(err) return console.log(`${err}`.bold.red)
    files.forEach(file => {
        if(!file.endsWith('.js')) return
        let path = require(`./commands/${file}`)
        let name = file.split('.')[0]
        client.commands.set(name, path)
        console.log(`Commands ${name} loaded !`.blue)
    })
})

client.on('ready', () => { console.log(`Im connected on ${client.user.username}`.green) })

client.on('message', message => {
    if(message.author.bot) return
    if(!message.content.startsWith(client.prefix)) return
    let args = message.content.slice(client.prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase()
    let cmd = client.commands.get(command)
    if (!cmd) return
    cmd.run(client, message, args)
})

client.login(token)
