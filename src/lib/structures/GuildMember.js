const { Structures } = require("discord.js");
const DBMember = require("../database/Member");

module.exports = () => Structures.extend("GuildMember", GuildMember =>
    class UnarityMember extends GuildMember {
        constructor() {
            super(...arguments);
            this.database = false;
        };
        get db() {
            if (!this.database) new DBMember(this.id, this.guild.id)._init().then((g) => {
                this.database = g;
                this.database.save();
            });
            return this.database;
        }
    }
)