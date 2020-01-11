module.exports = class Command {
    constructor(name, options) {
        this.name = name;

        this.userPermissions = [];
        this.botPermissions = [];
        this.options = options || {
            aliases: [],
            cooldown: 0,
            description: "Not Provided",
            usage: "Not Provided"
        };
    }

    run(message) {
        message.sm("Command not ready!");
    }
};
