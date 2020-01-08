module.exports = class Command {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }
    run(message) {
      message.sm("Command not ready!");
    }
};
