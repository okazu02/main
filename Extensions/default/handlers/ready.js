const Logger = require('leekslazylogger');
const log = new Logger();
module.exports = async (client) => {
  log.info(`[READY]:[${client.user.tag}]でログイン中`);
  require("../loaders/loadCommands")(client);
};
