require("dotenv").config({ path: __dirname + "/../.env" });
const { UnarityClient } = require("./lib/index");

const bot = new UnarityClient("u!", process.env.TOKEN);
