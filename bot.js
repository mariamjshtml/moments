const discord = require("discord.js");
const bot = new discord.Client();

bot.on("message", msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(msg.content === "-help") {
        
    const Hembed = new discord.RichEmbed()
    .setTitle("Bot Commands")
    .setThumbnail(msg.author.displayAvatarURL)
    .setColor("RANDOM")
    .addField("Members Commands:", "`-avatar`")
    .setTimestamp()
    .setFooter(msg.author.tag, msg.author.displayAvatarURL);
    
    msg.author.send(Hembed);
    }    
})

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

bot.on("message", message => {
    const prefix = "-";
    const cmd = message.content.split(" ")[0];
    
    if(message.content.startsWith(prefix +"server")){ // الامر
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
    if(!message.channel.guild) return message.reply(' ');
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = bot.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed);

}
    
    
});  


bot.login(process.env.BOT_TOKEN);
