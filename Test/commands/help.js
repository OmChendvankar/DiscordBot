module.exports = {
    name: 'help',
    description: "This is a Help command",
    execute(message,args){
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setTitle("These are my supported commands")
            .setThumbnail('https://i.imgur.com/YGiiYA7.jpg')
            .setColor('#F4D03F ')
            .addFields({
                name: '**-ping**',
                value: 'Shows your ping'
            }, {
                name:'**-kick**',
                value: 'Kicks a specific member'
            }, {
                name:'**-ban**',
                value: 'Bans a specific member'
            }, {
                name:'**-invite**',
                value: 'Invite link for adding me to your server'
            }, {
                name:'**-clear**',
                value: 'Deletes a specific number of messages in a channel'
            })
            .setTimestamp()
            .setFooter('Test.exe', 'https://i.imgur.com/YGiiYA7.jpg');
        message.channel.send(embed);
    }
}