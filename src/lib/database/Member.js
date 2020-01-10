const Members = require("../../models/member");

module.exports = class DBGuild {
    constructor(id, guildId) {
        this.id = id;
        this.guildId = guildId
        this._member = false;
    }

    async _init() {
        this._member = await Members.findOne({id: this.id, guildId: this.guildId});
        if (!this._member) {
            this._member = new Members({
                id: this.id,
                guildId: this.guildId,
                xp: 0,
                level: 0,
                mute: false,
                muteTime: 0
            })
        }

        return this;
    }

    get xü() {
        return this._member.xp;
    }

    save() {
        return this._member.save();
    }
}