module.exports = class Command {
    constructor (cmd, usage, minargs, func, minrank, hidden) {
        this.cmd = cmd;
        this.usage = usage;
        this.minargs = minargs;
        this.func = func;
        this.minrank = minrank;
        this.hidden = hidden;
    }
}