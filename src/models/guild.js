const { model, Schema } = require("mongoose");

const guildSchema = new Schema({
    id: String,
    settings: {
        prefix: String,
        logs: Array
    },
    features: {
        enabled: Array,
        disabled: Array,
        all: Boolean
    }
});

module.exports = model("Guild", guildSchema);