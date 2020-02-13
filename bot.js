const discord = require("discord.js");
const bot = new discord.Client();

bot.on("message", msg => {
    const prefix = "-";
    const cmd = msg.content.split(" ")[0];

    if(msg.content === "-help") {
        msg.channel.send('**تم الارسال خاص**');
    const Hembed = new discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`
==================== Bot commands =====================
-avatar       
`)
        message.author.sendEmbed(Hembed);
    }    
})
