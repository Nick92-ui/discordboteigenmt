const discord = require("discord.js"); 
const botConfig = require("./botconfig.json"); 

const client = new discord.Client(); 
client.login(botConfig.token); 

client.on ("ready", async () => {

    console.log(`${client.user.username} is online `);
    client.user.setActivity("Custom bot", {type: "Playing"}); 

}); 

client.on("message", async message =>{

    if(message.author.bot) return; 

    if(message.channel.type == "dm") return;
 
    var prefix = botConfig.prefix; 

    var messageArray = message.content.split(" "); 

    var command = messageArray[0];

    if(command === `${prefix}ip`){
        return message.channel.send("De server is in onderhoud!, dus je kan atm niet joinen!"); 
    }    


}); 


client.login(process.env.token); 
