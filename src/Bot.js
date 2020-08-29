// Discord bot module

module.exports = class Bot {
    constructor (prefix, token) {
        this.discord = require('discord.js');
        this.client = new this.discord.Client();
        this.token = token;
        this.prefix = prefix;
        this.Command = require('./Command.js');
        this.cmds = [];
        this.loader = require('./loader.js');
    }

    start() {
        try {
            this.client.login(this.token);
            this.token = null;
        } catch (err) {
            if (err) {
                console.error(err);
                console.log("Bot could not start");
            }
        }

        this.client.once('ready', () => {
            console.log("Bot online");
        });
    }
}