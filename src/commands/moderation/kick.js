const {Command} = require("../../lib");
const Discord = require("discord.js");
module.exports = class clear extends Command {
    constructor() {
        super("kick", {
            userPermissions: ["KICK_MEMBERS", "BAN_MEMBERS"],
            botPermissions: ["KICK_MEMBERS"]
        });
    }

    async run(message, args) {
        if (!args[0]) return message.sm("Please mention a user to kick!", {type: "error"});
        const kickMember = await message.findMember(args[0]);
        if (!kickMember) return message.sm("Couldn't find that member!", {type: "error"});
        if (!args[1]) return message.sm("Please provide the reason", {type: "error"});
        const reason = args.join(" ");
        
    }
};