const { Event } = require("../../lib");
module.exports = class Message extends Event {
    constructor() {
        super("message-receive")
    }
    run(bot, message) {
        if (message.author.bot) return;

        if(!message.content.startsWith(message.guild.db.prefix)) return;        
        const [cmd, ...args] = message.content.trim().slice(1).split(" ");
        const command = bot.handler.getCommand(cmd);
        if (command) command.run(message, args);
    }
}