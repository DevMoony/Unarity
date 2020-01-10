const {Event} = require("../../lib");
module.exports = class Message extends Event {
    constructor() {
        super("message-receive")
    }

    run(bot, message) {
        if (message.author.bot) return;

        if (!message.content.startsWith(message.guild.db.prefix)) return;
        const [cmd, ...args] = message.content.trim().slice(1).split(" ");
        const command = bot.handler.getCommand(cmd);
        if (command) {
            if (!bot.handler.checkPerms(message.member, command.userPermissions))
                return message.sm(`You don't have the required Permissions! Needed: ${command.userPermissions.join(" or ")}`);
            if (!bot.handler.checkPerms(message.guild.me, command.botPermissions))
                return message.sm(`I don't have the required Permissions! Needed: ${command.userPermissions.join(" and ")}`);
            command.run(message, args)
        }
    }
};