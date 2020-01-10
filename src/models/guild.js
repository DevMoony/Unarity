const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
    id: String,
    prefix: String,
    logs: {
        enabled: Array,
        channel: String
    },
    features: {
        enabled: Array,
        disabled: Array,
        all: Boolean
    }
});

module.exports = mongoose.model("Guild", guildSchema);