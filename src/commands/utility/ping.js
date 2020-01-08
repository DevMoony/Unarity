const { Command } = require("../../lib");
module.exports = class Ping extends Command {
    constructor() {
        super("ping", {
            aliases: ["p"],    
        });
     run: async (message) => {
    const msg = await message.sm(`🏓 Pinging....`);
    msg.delete(100);
    message.sm(`🏓 Pong!
    Latency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms
    API Latency is ${Math.round(this.bot.ping)}ms`);
        }
    }
}