//constants
const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();
const TOKEN = "";
const PREFIX = "!";
//client login
CLIENT.login(TOKEN);

//first commit

CLIENT.on("ready", () => {
    console.log("On");
});

//second commit
CLIENT.on("message", message => {
    message.content.trim().toLowerCase();

    let validPrefix = message.content.startsWith(PREFIX);
    let cmd = message.content.slice(1).split(" ");

    if(validPrefix)
        ExecuteCommand(message, cmd);   
});

//third commit
function ExecuteCommand(message, args){   
    switch(args[0]){
        case "hello":
            message.reply("hello dude!");
        break;
    }
}