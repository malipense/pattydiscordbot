const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();
const TOKEN = "";

CLIENT.login(TOKEN);

CLIENT.on("ready", () => {
    console.log("On");
});