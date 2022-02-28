const { MessageEmbed } = require("discord.js")

module.exports={
    name:'monday', 
    execute(message, arg){
        const mon = new MessageEmbed()
        .setTitle('School Schedule for Monday')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields(
            {name:'1st Hour',value:'SUBJECT 1'}, 
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},
            {name:'1st Hour', value:'Subject 1'},


        )
        message.channel.send({embeds:[mon]})
    }
    
}