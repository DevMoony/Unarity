const Guilds = require("../../models/guild");

module.exports = class DBGuild {
    constructor(id) {
        this.id = id;
        this._guild = false;
    }

    async _init() {
        this._guild = await Guilds.findOne({id: this.id});
        if (!this._guild) {
            this._guild = new Guilds({
                id: this.id,
                prefix: "!",
                logs: {
                    channel: "",
                    enabled: []
                },
                features: {
                    enabled: [],
                    disabled: [],
                    all: true
                }
            })
        }

        return this;
    }

    get prefix() {
        return this._guild.prefix;
    }

    save() {
        return this._guild.save();
    }
}