const { EventEmitter } = require("discord.js");

module.exports = class Handler extends EventEmitter {
    constructor(prefix) {
        super();
        this.prefix = prefix;
    }
}