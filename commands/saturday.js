const { MessageEmbed } = require("discord.js")

module.exports={
    name:'saturday', execute(message, arg){
        const sat = new MessageEmbed()
        .setTitle('School schedule for Tuesady')
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
            message.channel.send({embeds:[sat]})

    }
}