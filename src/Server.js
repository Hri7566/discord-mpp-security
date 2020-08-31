// Rank server module
const WebSocket = require('ws');

module.exports = class Server {
    constructor(port) {
        this.ranks = require('./database/ranks.json');
        this.wss = new WebSocket.Server({
            port: port
        });
    }

    start() {
        this.wss.on('connection', (ws) => {
            ws.on('message', msg => {
                console.log(`Message Recived: ${msg}`);
                ws.send(`Echo: ${msg}`);
            });

            ws.on('close', msg => {
                console.log(`Websocket Disconnected: ${msg}`);
            });
        });
        console.log("WS server started");
    }
}