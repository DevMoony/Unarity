const { Structures } = require("discord.js");
const { UnarityEmbed } = require("../index");

module.exports = () => Structures.extend("Message", Message =>
    class UnarityMessage extends Message {
        constructor() {
            super(...arguments);
        };

        sm(msg, type = "base") {
            if (!["base", "error"].includes(type)) type = "base";
            return this.channel.send(
                new UnarityEmbed(this.client)[type](msg, this.author)
            )
        }
    }
)