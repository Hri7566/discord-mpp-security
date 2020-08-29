// Rank server module
const WebSocket = require('ws');

module.exports = class Server {
    constructor (port) {
        this.ranks = require('./database/ranks.json');
        this.wss = new WebSocket.Server({
            port: port
        });
    }

    start() {
        
    }
}