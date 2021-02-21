module.exports = {
    name: 'invite',
    category:'general',
    description: "generates a bot invite link",
    usage:"-invite",
    execute(message,args){
        // at the top of your file
const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Link to Add me')
	.setURL('https://discord.com/oauth2/authorize?client_id=767366206130749440&scope=bot&permissions=8')
	.setDescription('Click the link to add me')
	.setThumbnail('https://i.imgur.com/YGiiYA7.jpg')
	.setTimestamp()
	.setFooter('Test.exe', 'https://i.imgur.com/YGiiYA7.jpg');

message.channel.send(exampleEmbed);
    }
}