const {searchQuery} = require("../util");
const {Structures} = require("discord.js");
const DBGuild = require("../database/Guild");

module.exports = () => Structures.extend("Guild", Guild =>
    class UnarityGuild extends Guild {
        constructor() {
            super(...arguments);
            this.database = false;
        };

        async findMember(message, query) {
            let target = message.mentions.members.first();
            if (!target && message.mentions.users.first() && !message.mentions.members.first())
                target = await this.fetchMember(message.mentions.users.first());

            if (!target)
                target = this.members.find((mem) => searchQuery(query, mem.name)) || this.members.get(query);
            return target;
        }


        get db() {
            if (this.database) return this.database;
            new DBGuild(this.id)._init().then((g) => {
                this.database = g;
                this.database.save();
            });
            return this.database;
        }
    }
)