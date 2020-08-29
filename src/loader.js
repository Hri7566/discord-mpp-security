module.exports = function () {
    this.addcmd = (name) => {
        let cmd = require(`./cmds/${name}`);
        this.cmds.push(cmd);
    }

    this.addcmd('test');
}