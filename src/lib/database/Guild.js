const Guilds = require("../../models/member");

module.exports = class Guild {
    constructor(id) {
        this.id = id;
        this._guild = false;
    }
    async _init() {
        this._guild = await Guilds.findOne({ id: this.id });
        if (!this._guild) this._guild = new Guilds({
            id: this.id,
            settings: {
                prefix: "!",
                logs: []
            },
            features: {
                enabled: [],
                disabled: [],
                all: true
            }
        });
        return this;
    }
    get prefix() {
        return this._guild.prefix;
    }
    save() {
        return this._guild.save();
    }
}