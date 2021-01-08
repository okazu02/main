const { Listener } = require('discord-akairo');
const fs = require('fs');
const path = require('path');
const dir = './commands/';
module.exports = class ReadyEvent extends Listener {
	constructor() {
		super('ready', {
			emitter: 'client',
			event: 'ready'
		});
	}

	exec() {
		this.client.logger.info(`[READY][${this.client.user.tag}]でログイン中`);
		const dirCommands = './commands'
		const dirListeners = './listeners'
		var text = [];
		var text1 = [];

		function getFileSize(dir) {
			var files = fs.readdirSync(dir);
			files.forEach(function(file) {
				var fullPath = path.join(dir, file);
				var stats = fs.statSync(fullPath); 
				if (stats.isDirectory()) {
					getFileSize(fullPath); 
				} else {
					if (file.endsWith('.js')) {
						text.push(file);
					}
				}
			});
		}
		getFileSize(dirCommands);
		this.client.logger.info(`[COMMANDS READY] ${text.length} commands`);
		text = [];
		getFileSize(dirListeners)
		this.client.logger.info(`[LISTENERS READY] ${text.length} listeners`)
	}
};
