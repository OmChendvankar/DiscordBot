module.exports = {
    name: 'serverinfo',
    description: "Gives server's info",
    execute(message,args){
        const { guild } = message

        const{ name, region, memberCount, owner, afkTimeout, createdAt} = guild
        const icon = guild.iconURL()

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setTitle(`Server Info for "${name}"`)
            .setThumbnail(icon)
            .setColor('#3498DB')
            .addFields({
                name: 'Owner',
                value: owner.user.tag
            }, {
                name: 'Region',
                value: region
            }, {
                name: 'Members',
                value: memberCount
            }, {
                name: 'AFK Timeout',
                value: `${afkTimeout / 60}min`
            }, {
                name: 'Created at',
                value: createdAt
            })
        message.channel.send(embed)
    }
}
