module.exports = new require("../Command.js")('test', `Usage: PREFIXtest`, 0, (msg, bot) => {
    bot.sendchat("Test!");
}, 0, false);