require("dotenv").config({ path: __dirname + "/../.env" });
const { UnarityClient } = require("./lib/index");
require("./lib/structures/Message")()

new UnarityClient("u!", process.env.TOKEN);