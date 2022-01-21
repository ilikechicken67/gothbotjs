const BOT_TOKEN = "OTMxMTQxOTUzNzM3ODUwOTUw.YeAHhQ.hjUNxjhYZjJikYjSpcXXNsCnaqo"
const CLIENT_ID = "931141953737850950"//"931141953737850950"
//const GUILD_ID = "871314313476968469"
const { Client, Intents } = require('discord.js');
const privateMessage = require('./PrivateMessage.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })//const client = new Discord.Client();
const prefix = require('discord-prefix');
const cron = require('cron');
const guild = client.guilds.cache.get('917905703014899773');
// When you want to start it, use:
//client.users.cache.get(user => user.id === '764308637736763392')
let bingbong = client.users.cache.find(user => user.username == 'littlebingbong#1916')
let gothcow = client.users.cache.find(user => user.username == 'GothCow#6050')

cokeCommand = () => {
  var randMessages = ['Lines!','chop chop fuckers.','YA YA YA YADADAMEEAN','Pump It Up.','Let it snow pimps']
  var randomIndex = Math.floor(Math.random() * randMessages.length); 
  var randomElement = randMessages[randomIndex];
  return randomElement
}
bongCommand = () => {
  var randMessages = ['Fuck Ya Life','Praise King Bing Bong!']
  var randomIndex = Math.floor(Math.random() * randMessages.length); 
  var randomElement = randMessages[randomIndex];
  return randomElement
}
//if the server doesn't have a set prefix yet
let defaultPrefix = 'bing.';

client.on('message', (message) => {
    //stop code execution if message is received in DMs
    if (!message.guild) return;

    //get the prefix for the discord server
    let guildPrefix = prefix.getPrefix(message.guild.id);
 
    //set prefix to the default prefix if there isn't one
    if (!guildPrefix) guildPrefix = defaultPrefix;
    
    //rest of the message event
    let args = message.content.slice(guildPrefix.length).split(' ');
    if (!message.content.startsWith(guildPrefix)) return;
    if (args[0].toLowerCase() === 'bong') {
        return message.channel.send(bongCommand());
    };
    if (args[0].toLowerCase() === 'lines') {
        return message.channel.send(cokeCommand());
    };
    if (args[0].toLowerCase() === 'remind') {
        return message.author.send("reminder");
    };
    // if (args[0].toLowerCase() === 'remind') {
    //     return message.channel.send(cokeCommand());
    // };
    //message.author.send(replyText)
    //privateMessage(client, "remind",'Reminder')
});
let scheduledMessage = new cron.CronJob('00 30 05 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  let channel = client.channels.cache.get('933915323831316592')
  channel.send('Take your meds testing 123');
  // message.bingbong.send('Take your meds testing 123')
  // message.gothcow.send('Take your meds testing 123')
  // bingbong.send('Take your meds testing 123')
});
scheduledMessage.start()


client.login(BOT_TOKEN);