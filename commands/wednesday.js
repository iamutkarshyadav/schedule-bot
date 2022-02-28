const { MessageEmbed } = require("discord.js")

module.exports={
    name:'wednesday', execute(message, arg){
        const wed = new MessageEmbed()
        .setTitle('School schedule for Wednesday')
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
            message.channel.send({embeds:[wed]})

    }
}