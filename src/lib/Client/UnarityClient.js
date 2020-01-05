const { Client } = require("discord.js");
const Handler = require("./Handler");

module.exports = class UnarityClient extends Client {
    constructor(prefix, token) {
        super(...arguments);
        super.login(token);

        this.handler = new Handler(prefix, this);
        this.handler.loadCommands(__dirname + "../../commands");
        this.handler.loadCommands(__dirname + "../../events");
    }
};