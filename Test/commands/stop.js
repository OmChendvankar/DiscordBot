module.exports = {
    name: 'stop',
    category:'general',
    description: "stops the playing song",
    usage:"-stop",
    async execute(message,args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in the voice channel to stop the song!');
        await voiceChannel.leave();
        await message.channel.send('Leaving channel :wave:')

    }
}