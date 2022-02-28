const { MessageEmbed } = require("discord.js")

module.exports={
    name:'friday', execute(message, arg){
        const fri = new MessageEmbed()
        .setTitle('School schedule for Friday')
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
            message.channel.send({embeds:[fri]})

    }
}