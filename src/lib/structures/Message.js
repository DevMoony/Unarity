const {Structures} = require("discord.js");
const {UnarityEmbed} = require("../index");

module.exports = () => Structures.extend("Message", Message =>
    class UnarityMessage extends Message {
        constructor() {
            super(...arguments);
        };

        sm(msg, {reply, type} = {type: "base", reply: false}) {
            if (!["base", "error"].includes(type)) options.type = "base";
            return reply ? this.reply(
                new UnarityEmbed(this.client)[type](msg, this.author)
                ) :
                this.channel.send(
                    new UnarityEmbed(this.client)[type](msg, this.author)
                )
        }

        embed(type = "base") {
            return new UnarityEmbed(this.client)[type]("cheese", this.author);
        }

        findMember(query) {
            this.guild.findMember(this, query);
        }
    }
);
