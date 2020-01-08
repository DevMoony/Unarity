const { Client, Collection } = require("discord.js");
const Handler = require("./Handler");
module.exports = class UnarityClient extends Client {
    constructor(token) {
        super(...arguments);
        super.login(token);

        this.commands = new Collection();
        this.handler = new Handler(this);
        this.handler.loadCommands(__dirname + "/../../commands");
        this.handler.loadEvents(__dirname + "/../../events");
    }
};