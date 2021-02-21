const ytdl = require('ytdl-core');
const ytSearch = require('yt-search'); 

module.exports = {
    name: 'play',
    category:'general',
    description: "plays the song.",
    usage:"-play",
    async execute(message,args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in the voice channel to play the song!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send("You don't have the permission to play the song!");
        if(!permissions.has('SPEAK')) return message.channel.send("You don't have the permission to play the song!");
        if(!args.length) return message.channel.send('You need to mention the song name!');

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply(`:thumbsup: Now Playing ***Your Link!***`)
 
            return
        }

        const connection = await  voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await  ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;   
        }

        const video = await videoFinder(args.join(''));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.reply(`,Now Playing ***${video.title}***`)
        } else{
            message.channel.send('No video results found');
        }
    }
}



























/*const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Link to Add me')
	.setURL('https://discord.com/oauth2/authorize?client_id=767366206130749440&scope=bot&permissions=8')
	.setDescription('Click the link to add me')
	.setThumbnail('https://i.imgur.com/YGiiYA7.jpg')
	.setTimestamp()
	.setFooter('Test.exe', 'https://i.imgur.com/YGiiYA7.jpg');

message.channel.send(exampleEmbed);*/