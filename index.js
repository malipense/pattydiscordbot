const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();
const TOKEN = "";
const PREFIX = "!";
CLIENT.login(TOKEN);

CLIENT.on("ready", () => {
    console.log("On");
});

CLIENT.on("message", message => {
    message.content.trim().toLowerCase();

    let validPrefix = message.content.startsWith(PREFIX);
    let cmd = message.content.slice(1).split(" ");

    if(validPrefix)
        ExecuteCommand(message, cmd);   
});

function ExecuteCommand(message, args){   
    switch(args[0]){
        case "hello":
            message.reply("hello dude!");
        break;
    }
}