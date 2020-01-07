const { Event } = require("../../lib");
module.exports = class Error extends Event {
    constructor() {
        super("bot-error");
    }
    run(error) {
        console.log(error.message)
    }
}
