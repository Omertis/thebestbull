const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")


const prefix = "."

const moment = require("moment");

//--------------------------------------------------------------------------

client.on('message', message => {
    if(message.content === prefix + 'help') {
        const embed = new Discord.RichEmbed()
        .setColor('#34495E')
        .setTitle('___Bull Commands___')
        .setDescription('**Adminstartion Commands**')
        .addField(prefix + 'Kick','**To kick someone out of your server with reason**')
        .addField(prefix + 'ban','**To ban someone out of your server with reason **')
        .addField(prefix + 'mute','**To mute someone (Requier Muted Role)**')
        .addField(prefix + 'unmute','**To remove the mute from someone (Requier Muted Role)**')
        .addField(prefix + 'vc','**To kick someone from voice channel**')
        .addField(prefix + 'clear','**To clear the chat**')
       .addField('<:checkmark:439800491644289024><a:blob:439807830586032138> have a good time')
	message.author.send({embed})
    }
});


client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active')) {
        let modlog = client.channels.find('name', 'waiting-for-activation');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
        
        
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     

       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                        
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "active"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
     
                                   })
                                   })
                                   }
                                   });
client.on('message', message => {
   
      if(message.content === prefix + "hidechannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**Channel Hided Successfully ! :white_check_mark:  **')            
 }
});


client.on('message', message => {
   
      if(message.content === prefix + "showchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**:x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Done  **')            
 }
});






 
 
 
 
client.on('message', message => {                      
if(!message.channel.guild) return;
   if(message.content.startsWith(prefix + 'colors')) {
   if(!message.channel.guild) return message.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
   message.channel.sendFile(`https://cdn.discordapp.com/attachments/438797856690798604/438834993259610123/unknown.png`).then(msg => {
   msg.react('❤')
   .then(() => msg.react('💚'))
   .then(() => msg.react('💜'))
   .then(() => msg.react('💛'))
   .then(() => msg.react('🖤'))
   .then(() => msg.react('💙'))
   .then(() => msg.react('❌'))
 
 
   let redFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
   let greenFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
   let purpleFilter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
   let yellowFilter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
   let blackFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
   let blueFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
   let nooneFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
   let red = msg.createReactionCollector(redFilter, { time: 15000 });
   let green = msg.createReactionCollector(greenFilter, { time: 15000 });
   let purple = msg.createReactionCollector(purpleFilter, { time: 15000 });
   let yellow = msg.createReactionCollector(yellowFilter, { time: 15000 });
   let black = msg.createReactionCollector(blackFilter, { time: 15000 });
   let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
   let noone = msg.createReactionCollector(nooneFilter, { time: 15000 });
 
   red.on("collect", r => {
       message.member.addRole(message.guild.roles.find("name", "red"));
       message.member.removeRole(message.guild.roles.find("name", "black"));
       message.member.removeRole(message.guild.roles.find("name", "yellow"));
       message.member.removeRole(message.guild.roles.find("name", "purple"));
       message.member.removeRole(message.guild.roles.find("name", "green"));
       message.member.removeRole(message.guild.roles.find("name", "blue"));
       msg.delete();
       message.channel.send(`**you have been gived the red color__.**`).then(m => m.delete(5000));
 
       })
     
       green.on("collect", r => {
           message.member.addRole(message.guild.roles.find("name", "green"));
           message.member.removeRole(message.guild.roles.find("name", "black"));
           message.member.removeRole(message.guild.roles.find("name", "yellow"));
           message.member.removeRole(message.guild.roles.find("name", "purple"));
           message.member.removeRole(message.guild.roles.find("name", "red"));
           message.member.removeRole(message.guild.roles.find("name", "blue"));
           msg.delete();
           message.channel.send(`**you have been gived the green color__.**`).then(m => m.delete(5000));
 
           })
         
           purple.on("collect", r => {
               message.member.addRole(message.guild.roles.find("name", "purple"));
               message.member.removeRole(message.guild.roles.find("name", "black"));
               message.member.removeRole(message.guild.roles.find("name", "yellow"));
               message.member.removeRole(message.guild.roles.find("name", "green"));
               message.member.removeRole(message.guild.roles.find("name", "red"));
               message.member.removeRole(message.guild.roles.find("name", "blue"));
               msg.delete();
               message.channel.send(`**you have been gived the purple color.**`).then(m => m.delete(1000));
 
               })
             
               yellow.on("collect", r => {
                   message.member.addRole(message.guild.roles.find("name", "yellow"));
                   message.member.removeRole(message.guild.roles.find("name", "black"));
                   message.member.removeRole(message.guild.roles.find("name", "purple"));
                   message.member.removeRole(message.guild.roles.find("name", "green"));
                   message.member.removeRole(message.guild.roles.find("name", "red"));
                   message.member.removeRole(message.guild.roles.find("name", "blue"));
                   msg.delete();
                   message.channel.send(`**you have been gived the yellow color__.**`).then(m => m.delete(1000));
 
                   })
                 
                   black.on("collect", r => {
                       message.member.addRole(message.guild.roles.find("name", "black"));
                       message.member.removeRole(message.guild.roles.find("name", "yellow"));
                       message.member.removeRole(message.guild.roles.find("name", "purple"));
                       message.member.removeRole(message.guild.roles.find("name", "green"));
                       message.member.removeRole(message.guild.roles.find("name", "red"));
                       message.member.removeRole(message.guild.roles.find("name", "blue"));
                       msg.delete();
                       message.channel.send(`**you have been gived the black color__.**`).then(m => m.delete(1000));
 
                       })
                       noone.on("collect", r => {
                           message.member.removeRole(message.guild.roles.find("name", "yellow"));
                           message.member.removeRole(message.guild.roles.find("name", "purple"));
                           message.member.removeRole(message.guild.roles.find("name", "green"));
                           message.member.removeRole(message.guild.roles.find("name", "red"));
                           message.member.removeRole(message.guild.roles.find("name", "blue"));
                           message.member.removeRole(message.guild.roles.find("name", "black"));
                           msg.delete();
                           message.channel.send(`**Cleared colors removed from you.**`).then(m => m.delete(1000));
 
                           })                                                          
                           blue.on("collect", r => {
                               message.member.addRole(message.guild.roles.find("name", "blue"));
                               message.member.removeRole(message.guild.roles.find("name", "yellow"));
                               message.member.removeRole(message.guild.roles.find("name", "purple"));
                               message.member.removeRole(message.guild.roles.find("name", "green"));
                               message.member.removeRole(message.guild.roles.find("name", "red"));
                               message.member.removeRole(message.guild.roles.find("name", "black"));
                               msg.delete();
                               message.channel.send(`**you have been gived the blue color__.**`).then(m => m.delete(1000));
 
 
                               })
                               })
                               }
                               });


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
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
//--------------------------------------------------------------------------

client.on('message', message => {
    var prefix = ".";
    if (message.content.startsWith(prefix + "bot")) {
        const embed = new Discord.RichEmbed()
            .setColor("#34495E")
            .setDescription(`**my servers**🌐 **__${client.guilds.size}__**
**Users Count**👥 **__${client.users.size}__**
**channels Count**📚 **__${client.channels.size}__** `)
     .setTimestamp();
     message.channel.sendEmbed(embed);

    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
  var prefix = ".";
    if (message.content.startsWith(prefix +"server")) {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();

        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**🆔 Server ID**", "**" + message.guild.id + "**", true)
            .addField("**👑 OWNER SHIP**", "**" + message.guild.owner + "**", true)
            .addField("**🌍 Server Country**", "**" + message.guild.region + "**", true)
            .addField('**💬 Text Channels Count**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**📣 Voice Channels Count**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**🤔 server created time**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**Roles Count**", `**[${message.guild.roles.size}]** Role `, true)
            .addField("Members Count", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('#34495E')
     .setTimestamp();
     message.channel.sendEmbed(embed)

    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
    if (message.author.Jelly) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "kick") {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        let b5bzlog = client.channels.find("name", "log");

        if (!b5bzlog) return message.reply("I've detected that this server doesn't have a log text channel.");
        if (message.mentions.users.size < 1) return message.reply("**Mention Someone**");
              message.delete();

        if (!reason) return message.reply("**Write the reason to kick**");
            message.delete();

    if (!message.guild.member(user)
            .kickable) return message.reply("**You Can't kick someone Bigger than me**");
        message.guild.member(user).kick();

        const kickembed = new Discord.RichEmbed()
            .setAuthor(`KICKED!`, user.displayAvatarURL)
            .setColor("#34495E")
            .setTimestamp()
            .addField("**User:**", '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     .setTimestamp();
        message.channel.send({
            embed: kickembed
        })
    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "ban") {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        let b5bzlog = client.channels.find("name", "log");

        if (!b5bzlog) return message.reply("I've detected that this server doesn't have a log text channel.");
        if (message.mentions.users.size < 1) return message.reply("**Mention Someone**");
              message.delete();
   if (!reason) return message.reply("**Write the reason to ban**");
        message.delete();

        if (!message.guild.member(user)
            .bannable) return message.reply("**You Can't ban someone Bigger than me**");

        message.guild.member(user).ban(7, user);

        const banembed = new Discord.RichEmbed()
            .setAuthor(`BANNED!`, user.displayAvatarURL)
            .setColor("#34495E")
            .setTimestamp()
            .addField("**User:**", '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     .setTimestamp();
        message.channel.send({
            embed: banembed
        })
    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
   if(message.content.startsWith(prefix +"avatar")) {
        var mentionned = message.mentions.users.first();
        var client;
        if (mentionned) {
            var client = mentionned;
        } else {
            var client = message.author;

        }
        const embed = new Discord.RichEmbed()
            .setColor("#34495E")
            .setImage(`${client.avatarURL}`)
     .setTimestamp();
        message.channel.sendEmbed(embed);
    }
});
//--------------------------------------------------------------------------
client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});
//--------------------------------------------------------------------------
client.on("message", message => {
    const command = message.content.split(" ")[0];

    if(command == prefix+"vc"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});
//--------------------------------------------------------------------------
client.on("message", message => {

    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.content === prefix + "aserver") {
        const embed = new Discord.RichEmbed()

            .setTitle(`server avatar ** ${message.guild.name} **`)
            .setAuthor(message.author.username, message.guild.iconrURL)
            .setColor("#34495E")
            .setImage(message.guild.iconURL)
            .setURL(message.guild.iconrURL)
            .setTimestamp()
     .setTimestamp();
        message.channel.send({ embed });
    }
});

//-------------------------------------صوره السيرفر

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

//-------------------------------------بنق

 client.on('message', message => {
                                if(!message.channel.guild) return;
                     if(message.content.startsWith(prefix +'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#34495E')
                        .addField('`Time Taken`:',msg + " ms  ")
                        .addField('`Discord Api`:',api + " ms  ")
     .setTimestamp();
         message.channel.send({embed:embed});

                        }
                    });
//--------------------------------------------------------------------------
 client.on('message'
           , message => {
    if(message.content.startsWith(prefix +"info")) {
        message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor('#34495E')
                .setTitle('``INFO BULL`` ')
                .addField('``Uptime``', [timeCon(process.uptime())], true)
                .addField('``My Ping``', [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                .addField('``My Name``', `[ ${client.user.tag} ]`, true)
                .addField('``My ID``', `[ ${client.user.id} ]`, true)
                .addField('``My Prefix``', `[ . ]`, true)
                .addField('``My Language``', `[ Java Script ]`, true)
     })
    }
});                        

//-------------------------------------------------------------------------- LOG
   
//--------------------------------------------------------------------------
client.on('message', async message =>{

const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`' ).then(msg => msg.delete(6000))
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

})  ;
//--------------------------------------------------------------------------
client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");

        message.delete();

}
})  ;                      
//--------------------------------------------------------------------------
var roles = {}; 
var token = "";


 
client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Sorry,You do not have permission** `ADMINISTRATOR`<:xx123:439800927457640448>' );
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Sorry,You do not have permission** `ADMINISTRATOR`' );
		if( !args[0] ) return message.reply( '**<:xx123:439800927457640448> Please place the role to be withdrawn from the person**' );
		if( !args[1] ) return message.reply( '**<:xx123:439800927457640448> Please place the role to be withdrawn from the person**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**<:xx123:439800927457640448> Please place the role to be withdrawn from the person**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] role [ '+args[0]+' ] removed from **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] the role removed from all Members**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] the role removed from all bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] the role removed from all humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**<:xx123:439800927457640448> Please mention the person to be given the role**' );
		if( !args[1] ) return message.reply( '**<:xx123:439800927457640448> Please mention the person to be given the role**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**<:xx123:439800927457640448> Please specify the role to be given to the person**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] role [ '+args[0]+' ] Was given **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] All role was given**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ]  The role bots were given**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('** <:checkmark:439800491644289024> [ '+role1.name+' ] The role humans were given**');
		} 
	} 
})  ;                    











//--------------------------------------------------------------------------
client.on('message', message => {
    if (message.content.startsWith(prefix + 'roles')) {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#34495E')
        .addField('Roles:',`**[${roles}]**`)
 
       message.channel.sendEmbed(embed);
    }
});                                                                                                  
//------------------------------------------------------------------------
client.on('message', message => {

           if (message.content.startsWith(prefix + "id")) {

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#34495E")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField("Name",                              `** ${message.author.username}**`, true)
.addField("#",                                 `${message.author.discriminator} `, true)
.addField(': عدد الدعوات',                         inviteCount,false)
    message.channel.sendEmbed(id);
})
}
    

         
     });
//------------------------------------------------------------------------




//------------------------------------------------------------------------                           
client.on('message', message => {
  if (message.content.startsWith(prefix + 'clsfdAQDWd8721tt238rbear')) {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
message.delete()
if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

const messagecount = parseInt(args.join(' '));
message.channel.fetchMessages({

limit: messagecount

}).then(messages => message.channel.bulkDelete(messages));

message.channel.sendMessage("", {embed: {
  title: "<:checkmark:439800491644289024>",

  color: 0x34495E,
  footer:{
     
  
      
  }
  }}).then(msg => {msg.delete(3000)});
};

}) ;                         
//------------------------------------------------------------------------                           
const child_process = require("child_process");
const adminprefix = ".";
const devs = ['426471752877604874'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **Done ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/s.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });
                           

  
  
  
  


  
  
  
  
  
  
  
  
  const arraySort = require('array-sort'),
      table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "top")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("Invites")
    .addField(' Top !' , `\`\`\`${table.table(possibleInvites)}\`\`\``)

    message.channel.send(embed)
    }
});                      

client.on('message', message =>{
    if(message.author.bot) return;
    if(!message.content == (prefix+'clear'))
if(!true) return;
    if(message.content.split(' ')[0] == (prefix+'clear')){
    var lmt = message.content.split(' ')[1]
    ,  hang = 0
    ,  max  = 0;
    
    if(!lmt) lmt = 200;
    if(typeof lmt !== 'number') return;
    if(lmt > 100){
        for(;lmt > 100;){
        lmt--;
        hang++;
        }
        }
     message.channel.fetchMessages({limite:lmt}).then(msgs=>{
     msgs.channel.bulkDelete(msgs);
     });
     if(hang > 100){
         hang = 100;
     }
        message.channel.fetchMessages({limite:hang}).then(msgs=>{
        message.channel.bulkDelete(msgs);
     });
     
    max= hang+lmt;
    message.reply(` **Done, i have delete ${max} messages!**.`).catch(()=>{
        message.reply(` **Sorry, i can only bulk delete messages that are under 14 days old**.`)
    });
    }
});

   
var googl = require('goo.gl');

googl.setKey('AIzaSyC9MdpZYw0ELyRQuAhz4ycYJnBUgE0BEDc');
 
googl.getKey();
 
client.on('ready', () => {
    console.log('ready');
}).on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    googl.shorten(args[0])
    .then(function (shortenUrl) {
        message.channel.send(`this is the Short Link: ${shortenUrl}`);
    })
    .catch(function (err) {
        console.log(err.message);
    });
}
});
      
      
  
 





client.on('message', message => {
  
  if(message.content.startsWith(prefix + 'mute')) {
    var men = message.mentions.users.first();
    if(!men) return message.channel.send('**Mention someone please**')
    message.channel.send(`**Are you sure that you want to mute [ ${men} ] ?**`)
    .then(() => { message.react("✅")})
    .then(() => { message.react("❌")})
      let trueFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      let falseFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
      let yes = message.createReactionCollector(trueFilter, { time: 15000 });
   let no = message.createReactionCollector(falseFilter, { time: 15000 });
  
   yes.on("collect", r => {
    let muteroleee = message.guild.roles.find("name", "Muted")
     if(!muteroleee) return message.channel.send('Muteroleee ?')
     men.addRole(muteroleee);
    message.delete();
    message.channel.send(`**[ ${men} ] Muted**`).then(m => m.delete(5000));
  
  })
  
  no.on("collect", r => {
    message.delete();
  
  })

}
});

client.on('message', message => {
  
  if(message.content.startsWith(prefix + 'unmute')) {
    var men = message.mentions.users.first();
    if(!men) return message.channel.send('**Mention someone please**')
    message.channel.send(`**Are you sure that you want to mute [ ${men} ] ?**`)
    .then(() => { message.react("✅")})
    .then(() => { message.react("❌")})
      let trueFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      let falseFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
      let yes = message.createReactionCollector(trueFilter, { time: 15000 });
   let no = message.createReactionCollector(falseFilter, { time: 15000 });
  
   yes.on("collect", r => {
    let muteroleee = message.guild.roles.find("name", "Muted")
     if(!muteroleee) return message.channel.send('**Your server need `Muted` Role**').then(message.guild.createRole("name", "Muted")).then(message.channel.send("**Try again now**"))
     men.removeRole(muteroleee);
    message.delete();
    message.channel.send(`**[ ${men} ] Muted**`).then(m => m.delete(5000));
  
  })
  
  no.on("collect", r => {
    message.delete();
  
  })

}
});

  
  client.on('message', message => {
          if(message.content.startsWith(prefix + 'say'))
          message.channel.send("Nope you say")
      });

      


client.on('ready', () => {
    console.log('-------------------------')
    console.log(`✨ Name: ${client.user.username}`)
    console.log('-------------------------')
    console.log(`✨ Id: ${client.user.id}`)
    console.log('-------------------------')
    console.log(`✨ Servers: ${client.guilds.size}`)
    console.log('-------------------------')
    console.log(`✨ Members: ${client.users.size}`)
    console.log('-------------------------')
    console.log(`✨ Channels: ${client.channels.size}`)
    console.log('-------------------------')
  
})








client.login("NDM4OTM1MzA0NTY5ODgwNTgx.Ddx9yw.vpCZzu1zRGphmlv6Gz36zJGMzdQ");// توكن بوتك

client.login(process.env.BOT_TOKEN);
