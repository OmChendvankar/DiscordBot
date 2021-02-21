const Discord = require ('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command); 
}

client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity('to OM', { type: 'LISTENING' })
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command ==='ping'){
       client.commands.get('ping').execute(message,args);    
    }  else if (command == 'invite'){
        client.commands.get('invite').execute(message,args);
    } else if (command == 'serverinfo'){
        client.commands.get('serverinfo').execute(message,args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message,args);
    } else if (command == 'play'){
        client.commands.get('play').execute(message,args);
    } else if (command == 'stop'){
        client.commands.get('stop').execute(message,args);
    }
});

client.login('TOKEN');
