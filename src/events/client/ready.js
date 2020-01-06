const { Event } = require("../../lib");
module.exports = class Ready extends Event {
    constructor() {
        super("bot-start");
    }
    run(bot) {
        console.log(bot.user.username + " is ready!")
    }
}