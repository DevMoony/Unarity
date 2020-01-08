const {Command} = require("../../lib");
module.exports = class Ping extends Command {
    constructor() {
        super("ping", {
            aliases: ["p"],
        });
    }
    async run(message) {
        const msg = await message.sm(`🏓 Pinging....`);
        msg.delete(100);
        message.sm(`🏓 Pong!
    Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
    API Latency is ${Math.round(this.bot.ws.ping)}ms`);
    }
};