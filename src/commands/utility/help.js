const {Command} = require("../../lib");
module.exports = class Help extends Command {
    constructor() {
        super("help", {
            aliases: ["h"],
        });
    }

    run(message, [query]) {

    }
}