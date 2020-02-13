const discord = require("discord.js");
const bot = new discord.Client();


bot.on('message', msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(cmd === `${prefix}server`) {
      let Sembed = new Discord.RichEmbed()
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setTitle(`\`${msg.guild.name}\``)
      .setThumbnail(msg.guild.iconURL)
      .addField('• iD:', `${msg.guild.id}`)
      .addField('• Owner:', `${msg.guild.owner}`)
      .addField('• Owner Id:', `${msg.guild.ownerID}`);  
      msg.channel.send(Sembed);
    }
  }); 


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
    
if(msg.content.includes('discord.gg')) {
if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Don't post links! 😠").then(msg => msg.delete(0));
msg.author.addRole("676455294078812160");

}
    

});

bot.login(process.env.BOT_TOKEN);
