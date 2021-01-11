const http = require('http');
http
	.createServer(function(req, res) {
		res.write('uptimer用');
		res.end();
	})
	.listen(8080);
require('dotenv').config();
const config = require('./Config/config')
const leeks = require('leeks.js');
const Logger = require('leekslazylogger');
const Database = require("@replit/database")
const db = new Database()
const log = new Logger({
	name: config.name,
	
});

const { Client ,Collection } = require('discord.js');
const client = new Client({ partials: ['GUILD_MEMBER','MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Collection();
client.prefix = process.env.BOT_PREFIX;

require("./extensionsLoader/findExtensionsReady")(client);

client.login(process.env.BOT_TOKEN);
