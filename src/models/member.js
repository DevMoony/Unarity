const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    id: String,
    guildId: String,
    xp: Number,
    level: Number,
    muted: Boolean,
    muteTime: Number
});

module.exports = mongoose.model("Member", memberSchema);