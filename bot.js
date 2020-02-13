const discord = require("discord.js");
const bot = new discord.Client();
//antiCmdChat//
const bannedwords = [
  "-avatar"


]


bot.on("message", msg => {
    var Muted = msg.guild.roles.find("name", "muted");
    var warn = msg.guild.roles.find("name", "warn");
    if (bannedwords.some(word => msg.content.includes(word))) {
        if(msg.channel.id !== '675659881449259041') return;
        if(msg.author.bot) return;
        if(msg.member.roles.has(warn)) return;
        if(!msg.member.roles.has(warn.id)) {
            msg.member.addRole(warn)
            msg.reply("You Get Warn")
        }
        if(msg.member.roles.has(warn.id)) {
            msg.member.addRole(Muted)
            msg.member.removeRole(warn)
            msg.reply("**You Get Mute**")
        }
    }
    

})
    
    
    
});
//AVATAR//

bot.on("message", msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(cmd === `${prefix}avatar`) {
        const Auser = msg.guild.members.get(msg.content.split(" ")[1]) || msg.mentions.members.first();
        msg.delete(0)
        const Embed = new discord.RichEmbed()
        .setAuthor(msg.author.username, "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setImage(msg.author.displayAvatarURL)
        .setColor('RANDOM')
        .setFooter("Requested By " + msg.author.tag, msg.author.displayAvatarURL);

    if(!Auser) return msg.channel.send(Embed).then(msg => msg.delete(10000));

    const Aembed = new discord.RichEmbed()
    .setAuthor(Auser.user.username, "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
    .setImage(Auser.user.displayAvatarURL)
    .setColor('RANDOM')
    .setFooter("Requested By " + msg.author.tag, msg.author.displayAvatarURL);
    if(Auser) return msg.channel.send(Aembed).then(msg => msg.delete(10000));

        
        

    }

});

bot.login(process.env.BOT_TOKEN);
