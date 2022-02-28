const { MessageEmbed } = require("discord.js")

module.exports={
    name:'thursday', execute(message, arg){
        const thu = new MessageEmbed()
        .setTitle('School schedule for Thursaday')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields(
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},

        )
            message.channel.send({embeds:[thu]})

    }
}