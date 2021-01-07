const { Command } = require('discord-akairo');
const { stripIndents } = require('common-tags');

module.exports = class PingCommand extends Command {
	constructor() {
		super('ping', {
      name:"ping",
			aliases: ['ping', 'pong', 'ping-pong'],
			category: 'default',
			description: 'botのping値を表示\npongの"o"の数が多いほど処理に時間がかかっている'
		});
	}

	async exec(msg) {
		const message = await msg.util.send('Pinging...');
		const ping = Math.round(message.createdTimestamp - msg.createdTimestamp);
		return message.edit(stripIndents`
			🏓 P${'o'.repeat(Math.ceil(Math.min(ping / 100, 1800)))}ng! \`${ping}ms\`
			Heartbeat: \`${Math.round(this.client.ping)}ms\`
		`);
	}
};
