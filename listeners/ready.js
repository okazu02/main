const { Listener } = require('discord-akairo');

module.exports = class ReadyEvent extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        this.client.logger.info(`[READY][${this.client.user.tag}]でログイン中`)
    }
};
