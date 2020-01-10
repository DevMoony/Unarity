require("dotenv").config({path: __dirname + "/../.env"});
const mongoose = require("mongoose");
const {UnarityClient} = require("./lib/index");

require("./lib/structures/Message")();
require("./lib/structures/Guild")();
require("./lib/structures/GuildMember")();

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
    console.log("Database connected!");
    new UnarityClient(process.env.TOKEN);
});