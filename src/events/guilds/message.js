const { Event } = require("../../lib");
module.exports = class Message extends Event {
    constructor() {
        super("message-receive")
    }
    run(bot, message) {
        if(message.author.bot)
            message.sm("Chaos is too bored to make the command running stuff");
    }
}