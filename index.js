// Environment vars
require('dotenv').config();

// Modules
const Server = require('./src/Server.js');
const Bot = require('./src/Bot.js');

// Declaration
var server = new Server(process.env.PORT);
var bot = new Bot("ss!", process.env.TOKEN);

// Program
server.start();
bot.start();