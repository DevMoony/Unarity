const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = class Handler {
    constructor(prefix, bot) {
        this.prefix = prefix;
        this.bot = bot;
    }
    loadCommands(dir) {
        if (!dir) throw Error("No Command Dir Detected.");
        try {

            readdirSync(dir).forEach((category) => {
                readdirSync(`${dir}/${category}`).filter((cmd) => cmd.endsWith(".js")).forEach((command) => {
                    try {
                        let cmd = require(`${dir}/${category}/${command}`);
                        cmd = this.options.classes ? new cmd(this.bot) : cmd;
                        cmd.bot = this.bot;
                        cmd.category = category;
                        this.bot.commands.set(cmd.name, cmd);
                        this.bot.emit("cLoad", cmd);
                    } catch (e) {
                        this.bot.emit("cLoadErr", e);
                    }
                });
            });

        } catch (e) {
            this.bot.emit("cLoadErr", e);
        };
    }
    loadEvents(dir) {
        if (!dir) throw Error("No Event Dir Detected");
        try {


            readdirSync(dir).forEach((category) => {
                readdirSync(`${dir}/${category}`).filter((evt) => evt.endsWith(".js")).forEach((event) => {
                    try {
                        let evt = require(`${dir}/${category}/${command}`);
                        event = event.split(".js")[0];
                        evt = new evt();
                        evt.bot = this.bot;

                        this.bot.on(event, evt.bind(null, this.bot));
                        this.bot.emit("eLoad", event);
                    } catch (e) {
                        this.bot.emit("eLoadErr", e);
                    }
                });
            });
        } catch (e) {
            this.bot.emit("eLoadErr", e);
        };
    }
}

const { Client } = require("discord.js");
const Handler = require("./Handler.js");
const bot = new Client();

bot.handler = new Handler("!", bot, { events: `${__dirname}/events`, commands: `${__dirname}/commands` }, { loadEvents: true, loadCommands: true, logging: true, classes: false });
