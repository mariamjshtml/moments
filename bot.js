const discord = require("discord.js");
const moment= require("moment");
const ytdl = require('ytdl-core');
const fs = require('fs');
const gif = require("gif-search");
const bot = new discord.Client();

//Server
bot.on('message', msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(cmd === `${prefix}server`) {
        const SEmbed = new discord.RichEmbed()
        .setAuthor('**Done**', "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setColor('RANDOM')
        .setThumbnail(msg.guild.iconURL)
        .setTitle(msg.guild.name)
        .addField('🆔 Server ID:', `${msg.guild.id}` , true)
        .addField('📆 Created On', msg.guild.createdAt.toLocaleString() , true)
        .addField('👑 Owned By', `${msg.guild.owner}` , true)
        .addField('👥 Members', `${msg.guild.memberCount}` , false)
        .addField('🌍 Region', `${msg.guild.region}` , true)
        .addField('🔐 Roles', `${msg.guild.roles.size}` , true)
        
        .setFooter("Requested By " + msg.author.tag, msg.author.displayAvatarURL)

        msg.channel.send(SEmbed);
        





    }
})

//Bot
bot.on('message', msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(cmd === `${prefix}bot`) {
        const BEmbed = new discord.RichEmbed()
            .setAuthor(bot.user.displayAvatarURL)
            .setAuthor(`${bot.user.username}`, "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
            .setColor('RANDOM')
            .setTitle("**Bot Info**")
            .addField("**Bot Id:**", `${bot.user.id}` , false)
            .addField("**Bot Name:**", `${bot.user.tag}` , false)
            .addField("**By:**", "@abdealwaheb#2383" , false)
            .setFooter("Requested By " + msg.author.tag, msg.author.displayAvatarURL)

        msg.channel.send(BEmbed);


    }
})

    


//User
bot.on("message", msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(cmd === `${prefix}user`) {        
    const Dembed = new discord.RichEmbed()
    .setThumbnail(msg.author.displayAvatarURL)
    .setAuthor("Done", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
    .setColor("RANDOM")
    .addField("Joined Discord:", moment(msg.author.createdAt).format("L"), true)
    .addField("Joined Server:", moment(msg.guild.joinedAt).format("L"), true)
    .setTimestamp()
    .setFooter(msg.author.tag, msg.author.displayAvatarURL);
    
    msg.channel.send(Dembed);
    }    
})
     

//help//
bot.on("message", msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(msg.content === "-help") {
        
    const Hembed = new discord.RichEmbed()
    .setTitle("Bot Commands")
    .setThumbnail(msg.author.displayAvatarURL)
    .setColor("RANDOM")
    .addField("Members Commands:", "`-avatar`,`-user`,`-bot`,`-server`")
    .setTimestamp()
    .setFooter(msg.author.tag, msg.author.displayAvatarURL);
    
    msg.author.send(Hembed);
    }    
})
//avatar//
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
