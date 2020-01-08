const Members = require("../../models/member");

module.exports = class Member {
    constructor(id, guildId) {
        this.id = id;
        this.guildId = guildId;
        this._member;
    }
    async _init() {
        this._member = await Members.findOne({ id: this.id, guildId: this.guildId })
        if (!this._member) this._member = new Members({
            id: this.id,
            guildId: this.guildId,
            xp: 0,
            level: 1,
            muteTime: 0
        });
        return this;
    }
    save() {
        return this._member.save();
    }
}