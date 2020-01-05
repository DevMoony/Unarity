module.exports = class Event {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }
    run() {
        console.log("Not Finished")
    }
}