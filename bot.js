const discord = require("discord.js");
const bot = new discord.Client();

bot.on("message", msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(cmd === `${prefix}avatar`) {
        const Auser = msg.guild.members.get(msg.content.split(" ")[1]) || msg.mentions.members.first();
        msg.delete(0)
        const Embed = new discord.RichEmbed()
        .setImage(msg.author.displayAvatarURL)
        .setColor('RANDOM');

    if(!Auser) return msg.channel.send(Embed).then(msg => msg.delete(10000));

    const Aembed = new discord.RichEmbed()
    .setImage(Auser.user.displayAvatarURL)
    .setColor('RANDOM');
    if(Auser) return msg.channel.send(Aembed).then(msg => msg.delete(10000));

        
        

    }

});

bot.login(process.env.BOT_TOKEN);
