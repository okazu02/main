const { stripIndents } = require('common-tags');
const config = require('./../Config.js')
const co = config.ping
module.exports = {
  name: "ping",
  aliases:co.aliases,
  cooldown: co.cooldown,
  description: co.description,
  disabled:co.disabled,
  ownerOnly:co.ownerOnly,
  
  async execute(message,args,client) {
   		const msg = await message.channel.send('Pinging...');
		const ping = Math.round(msg.createdTimestamp - message.createdTimestamp);
		return msg.edit(stripIndents`
			🏓 P${'o'.repeat(Math.ceil(Math.min(ping / 100, 1800)))}ng! \`${ping}ms\`
			Heartbeat: \`${Math.round(client.ws.ping)}ms\`
		`);
    
  }
};
