const { Command } = require("../../lib");
const Discord = require("discord.js");
module.exports = class unmute extends Command {
    constructor() {
        super("unmute", {
            
        });
        run(bot, message, args){
            if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry you don't have enough permission");
            let reason = args.slice(1).join(" ")
            if(!reason) reason = "No reason given"
            let umutee = message.mention.members.first() || message.guild.members.get(args[0])
            if(!umutee) return message.channel.send("Please specify a user that you want me to unmute")
            let mrole = message.guild.roles.find(r=> r.name === "Muted")
            if (!mrole) return message.channel.send("That role doesn't exist")
            if (!umutee.roles.has(mrole.id)) return message.channel.send("THis user isn't muted");

            umutee.removeRole(mrole.id).then(() => {
                message.channel.send(`${unmutee} has been un muted`)
                message.delete()
            });
            let embed = new Discord.RichEmbed()
            let embed = new Discord.RichEmbed()
                .setColor("#ff0000")
                .setAuthor(`${message.guild.name} incident-logs`, message.guild.iconURL)
                .addField("Moderation:", "unmute")
                .addField("UnMutee:", unmutee.user.username)
                .addField("Moderator:", message.author.username)
                .addField("Reason:", reason)
                .addField("Date:", message.createdAt.toLocaleString())

            let sChannel = message.guild.channels.find(c => c.name === "logs")
            if(!sChannel) return message.channel.send("Please create a channel called **logs**")
            sChannel.send(embed);
        }
    }
}