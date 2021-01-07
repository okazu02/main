require('dotenv').config();
const { BOT_TOKEN, BOT_PREFIX, OWNERS } = process.env;
const Client = require('./structures/Client');
const client = new Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	prefix: BOT_PREFIX,
	ownerID: OWNERS.split(','),
	disableEveryone: true,
});
const { Readable } = require('stream');
const jsondiffpatch = require('jsondiffpatch');
const cron = require('node-cron')
const { humanizer } = require('humanize-duration');
const nodesuperfetch = require('node-superfetch');
const Util = require('./util/Util');
const canvaUtil = reqiure('./util/Canvas')
const Database = require("@replit/database")
const db = new Database()
const discord = require('discord.js')
const { stripIndents } = require('common-tags');
const Canvas = require('canvas');
const fetch = require('node-fetch');


client.setup();

client.on('ready', async () => {
	client.logger.info(`[READY][${client.user.tag}]でログイン中`)
});


client.on('disconnect', event => {
	client.logger.error(`[DISCONNECT] Event code:${event.code}.`);
	process.exit(0);
});

client.on('error', err => client.logger.error(err));

client.on('warn', warn => client.logger.warn(warn));

client.commandHandler.on('error', (err, msg, command) => {
	client.logger.error(`[COMMAND${command ? `:${command.name}` : ''}]\n${err.stack}`);
	msg.reply(stripIndents`
		コマンドを実行中にエラーが発生しました: \`${err.message}\`\n${command ? "コマンド名:\`"+command.name+"\`" : ''}`).catch(() => null);
});

client.login(BOT_TOKEN);
