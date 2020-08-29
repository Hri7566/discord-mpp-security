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
        // someone help me - Hri7566
        this.wss.on('request', (req) => {
            const conn = req.accept(null, req.origin);

            conn.on('connect')

            conn.on('message', (msg) => {
                console.log(`Message: ${msg.utf8Data}`);
                conn.sendUTF(`hi :P`);
            });
            
            conn.on('close', (code, desc) => {
                console.log("Client left");
            });
        });
        console.log("WS server started");
    }
}