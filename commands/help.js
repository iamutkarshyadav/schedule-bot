const { MessageEmbed } = require("discord.js")
const PREFIX = '~'
module.exports={
    name:'help', 
    execute(message, arg){
        const hel = new MessageEmbed()
        .setTitle('HELP ')
        .setColor('RANDOM')
        .setDescription('Below are my commands!, you can edit your subjets and hours accordingly!')
        .addFields(
            {name:"Monday", value:`${PREFIX}monday`},
            {name:"Tuesday", value:`${PREFIX}tuesday`},
            {name:"Wednesday", value:`${PREFIX}wednesday`},
            {name:"Thursday", value:`${PREFIX}thursday`},
            {name:"Friday", value:`${PREFIX}friday`},
            {name:"Saturday", value:`${PREFIX}saturday`},
        )
        .setTimestamp()
        .setThumbnail('https://scontent.flko3-1.fna.fbcdn.net/v/t1.6435-9/71247264_1852546118224206_7983245975831445504_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QAm4-x7oHpAAX_w0Q3z&_nc_ht=scontent.flko3-1.fna&oh=00_AT8h3QQ9UFwdYZMIPBbihtqKQsE-UO9xsM2NKdCkvsmcYg&oe=62435718')
        .setFooter({text:'This bot is made by Utkarsh Yadav aka Shadow', iconURL:'https://github.com/iamutkarshyadav'})

        message.channel.send({embeds:[hel]})
    }
}