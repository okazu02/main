require('dotenv').config();
const { BOT_TOKEN, BOT_PREFIX, OWNERS_ID } = process.env;
const Client = require('./structures/Client');
const client = new Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	prefix: BOT_PREFIX,
	disableEveryone: true,
});
const { Readable } = require('stream');
const jsondiffpatch = require('jsondiffpatch');
const cron = require('node-cron')
const { humanizer } = require('humanize-duration');
const nodesuperfetch = require('node-superfetch');
const Util = require('./util/Util');
const canvaUtil = require('./util/Canvas')
const Database = require("@replit/database")
const db = new Database()
const discord = require('discord.js')
client.commands = new discord.Collection();
const { stripIndents } = require('common-tags');
const Canvas = require('canvas');
const fetch = require('node-fetch');

client.setup();

client.on('disconnect', event => {
	client.logger.error(`[DISCONNECT] Event code:${event.code}.`);
	process.exit(0);
});

client.on('error', err => client.logger.error(err));

client.on('warn', warn => client.logger.warn(warn));

client.commandHandler.on('error', (err, msg, command) => {
	client.logger.error(`[COMMAND${command ? `:${command.id}` : ''}]\n${err.stack}`);
	msg.reply(stripIndents`
		コマンドを実行中にエラーが発生しました: \`${err.message}\`\n${command ? "コマンド名:\`"+command.id+"\`" : ''}`).catch(() => null);
});

client.login(BOT_TOKEN);
