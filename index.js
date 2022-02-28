const {Client, Intents, Collection, Message} = require('discord.js')
const client = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]})
const token = '' /*our token goes here! If you want you can also use .env file to secure your token.*/ 
const fs = require('fs')
const { execute } = require('./commands/monday')
const PREFIX = '~'
 

client.commands = new Collection()
 const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
 for(const file of commandFiles){
     const command = require(`./commands/${file}`)
     client.commands.set(command.name, command)
 }
 client.on('ready', ()=>{
     console.log(`Logged in as ${client.user.tag}`)
     client.user.setActivity('School Schedule', {type:'WATCHING'})

 })

  client.on('message', message =>{
      if(!message.content.startsWith(PREFIX)|| message.author.bot)return 
      const arg = message.content.slice(PREFIX.length).split(/ +/)
      const command = arg.shift().toLowerCase()
      if(command === 'monday'){
        client.commands.get('monday').execute(message, arg)
      } else if (command === 'tuesday'){
          client.commands.get('tuesday').execute(message, arg)
      } else if(command === 'wednesday'){
          client.commands.get('wednesday').execute(message, arg)
      }else if(command === 'thursday'){
        client.commands.get('thursday').execute(message, arg)
    }else if(command === 'friday'){
        client.commands.get('friday').execute(message, arg)
    }else if(command === 'saturday'){
        client.commands.get('saturday').execute(message, arg)
    }else if(command === 'help'){
        client.commands.get('help').execute(message, arg)
    }
  })








client.login(token)
