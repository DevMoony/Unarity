const { model, Schema } = require("mongoose");

const memberSchema = new Schema({
    id: String,
    guildId: String,
    xp: Number,
    level: Number,
    muted: Boolean,
    muteTime: Number
});

module.exports = model("Guild", memberSchema);