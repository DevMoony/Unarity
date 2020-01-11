const {Command} = require("../../lib");
module.exports = class Help extends Command {
    constructor() {
        super("help", {
            aliases: ["h"],
            description: "Displays informations of commands",
            usage: "!help [command]"
        });
    }

    run(message, [query]) {
        let helpEmbed;
        if (query && this.bot.handler.getCommand(query)) {
            const command = this.bot.handler.getCommand(query);
            helpEmbed = message.embed()
                .setTitle(`${command.name[0].toUpperCase() + command.name.slice(1)}'s information`)
                .setDescription([`**Category:** ${command.category}`,
                    `**Description:** ${command.options.description || "Not Provided"}`,
                    `**Usage:** ${command.options.usage || "Not Provided"}`,
                    `**Cooldown:** ${command.options.cooldown || 0}ms`]
                    .join("\n"))
                .addField("User Permissions Needed", command.userPermissions.join(", ") || "None")
                .addField("Bot Permissions Needed", command.botPermissions.join(", ") || "Send Message, Embed Links")
                .setFooter("[] = optional, {} = needed");
        }

        message.channel.send(helpEmbed);
    }
};