const { Structures } = require("discord.js");
const DBGuild = require("../database/Guild");

module.exports = () => Structures.extend("Guild", Guild =>
    class UnarityGuild extends Guild {
        constructor() {
            super(...arguments);
            this.database = false;
        };
        get db() {
            if (!this.database) new DBGuild(this.id)._init().then((g) => {
                this.database = g;
                this.database.save();
                console.log(this.database);
            });
            return this.database;
        }
    }
)