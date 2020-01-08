const { readdirSync } = require("fs");

module.exports = class Handler {
    constructor(bot) {
        this.bot = bot;
    }
    loadCommands(dir) {
        if (!dir) throw Error("No Command Dir Detected.");
        try {
            console.log("Loading Commands");
            readdirSync(dir).forEach((category) => {
                readdirSync(`${dir}/${category}`).filter((cmd) => cmd.endsWith(".js")).forEach((command) => {
                    try {
                        let cmd = require(`${dir}/${category}/${command}`);
                        cmd = new cmd();
                        cmd.bot = this.bot;
                        cmd.category = category;
                        this.bot.commands.set(cmd.name, cmd);
                        console.log(`Loaded: ${command}`);
                    } catch (e) {
                        console.log(`Error: ${command} => ${e}`);
                    }
                });
            });

        } catch (e) {
            console.log(`Error: => ${e}`);
        };
    }
    loadEvents(dir) {
        if (!dir) throw Error("No Event Dir Detected");
        try {

            console.log("Loading Events");
            readdirSync(dir).forEach((category) => {
                readdirSync(`${dir}/${category}`).filter((evt) => evt.endsWith(".js")).forEach((event) => {
                    try {
                        let evt = require(`${dir}/${category}/${event}`);
                        event = event.split(".js")[0];
                        evt = new evt();
                        evt.bot = this.bot;
                        this.bot.on(event, evt.run.bind(null, this.bot));
                        console.log(`Loaded: ${evt.name}`);
                    } catch (e) {
                        console.log(`Error: ${event} => ${e}`);
                    }
                });
            });
        } catch (e) {
            console.log(`Error: => ${e}`);
        };
    }
    getCommand(command) {
        return this.bot.commands.get(command) || this.bot.commands.find((cmd) => cmd.alias === command) || false;
    }
}