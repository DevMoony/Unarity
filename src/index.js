require("dotenv").config({ path: __dirname + "/.env" });
const { connect, connection } = require("mongoose");
const { UnarityClient } = require("./lib/index");

require("./lib/structures/Message")();
require("./lib/structures/Guild")();
require("./lib/structures/GuildMember")();

connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

connection.on("error", console.error);
connection.on("open", () => {
    console.log("Database connected!");
    new UnarityClient(process.env.TOKEN);
});