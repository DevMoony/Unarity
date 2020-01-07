module.exports = class Command {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }
    run(message, args) {
        message.sm("Command is not ready to be used!", "error" );
    }
}