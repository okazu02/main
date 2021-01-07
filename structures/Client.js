const http = require('http');
http
  .createServer(function(req, res) {
    res.write('upTimer用');
    res.end();
  })
  .listen(8080);
const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');
const { stripIndents } = require('common-tags');
const winston = require('winston');
const path = require('path');
module.exports.config = 'clientConfig.js';
const config = require(join(__dirname, '../structures/', module.exports.config));


class Client extends AkairoClient {
  constructor() {
    super({
        disableMentions: 'everyone'
      });
    this.commandHandler = new CommandHandler(this, {
      directory: './commands/',
      prefix: process.env.BOT_PREFIX,
      allowMention: config.allowMention,
      handleEdits: config.handleEdits,
      commandUtil: true,
      commandUtilLifetime: 60000,
      fetchMembers: true,
      defaultCooldown: config.cooldown
    });
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.timestamp({ format: 'MM/DD/YYYY HH:mm:ss' }),
        winston.format.printf(log => `[${log.timestamp}] [${log.level.toUpperCase()}]: ${log.message}`)
      )
    });

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: './inhibitors/'
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: './listeners/'
    });
  }
  setup() {
    this.commandHandler.loadAll();
    this.listenerHandler.setEmitters({
      process: process,
      client: client
    });
  }

}
module.exports = Client;
