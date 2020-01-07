const { MessageEmbed } = require("discord.js");

module.exports = class UnarityEmbed extends MessageEmbed {
    constructor(bot) {
        super(...arguments);
        this.bot = bot;
    }
    base(msg, user) {
        return this
            .setAuthor(user.username, user.displayAvatarURL())
            .setDescription(msg)
            .setTimestamp()
            .setColor("#0073ff");

    }
    error(err, user) {
        return this
            .base(err, user)
            .setTitle("Oh no! An error >:(")
            .setColor("#ff0000")
    }
};