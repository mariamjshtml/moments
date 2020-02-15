const discord = require("discord.js");
const moment= require("moment");
const ytdl = require('ytdl-core');
const fs = require('fs');
const gif = require("gif-search");
const bot = new discord.Client();

//Clear
bot.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "clear") {
          const emoji = bot.emojis.find("name", "wastebasket")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
      msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });




//Server
bot.on('message', msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(cmd === `${prefix}server`) {
        const SEmbed = new discord.RichEmbed()
        .setAuthor("Done", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setColor('RANDOM')
        .setThumbnail(msg.guild.iconURL)
        .setTitle(msg.guild.name)
        .addField('🆔 **Server ID:**', `**${msg.guild.id}**` , true)
        .addField('📆 **Created On**', msg.guild.createdAt.toLocaleString() , true)
        .addField('👑 **Owned By**', `${msg.guild.owner}` , true)
        .addField('👥 **Members**', `${msg.guild.memberCount} **Members**` , true)
        .addField('🌍 **Region**', ` **Region:** ${msg.guild.region}` , true)
        .addField('🔐 **Roles**', `${msg.guild.roles.size} **Role**` , true)
        .addField('💬 **Channels**', `${msg.guild.channels.size} **Channel**` , true)
        .addField('🛡️ **Security**', ` **Level:** ${msg.guild.verificationLevel}` , true)
        
        .setFooter("Requested By " + msg.author.tag, msg.author.displayAvatarURL)

        msg.channel.send(SEmbed);
        





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
    .addField("Members Commands:", "`-user`,`-bot`,`-server`")
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
