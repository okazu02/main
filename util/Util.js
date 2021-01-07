const crypto = require('crypto');
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const { stripIndents } = require('common-tags');
const inviteRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(\.gg|(app)?\.com\/invite|\.me)\/([^ ]+)\/?/gi;
const botInvRegex = /(https?:\/\/)?(www\.|canary\.|ptb\.)?discord(app)?\.com\/(api\/)?oauth2\/authorize\?([^ ]+)\/?/gi; 
const fetch = require('node-fetch');

module.exports = class Util {
	static shorten(text, maxLen = 2000) {
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	}
	static formatNumber(number, minimumFractionDigits = 0) {
		return Number.parseFloat(number).toLocaleString(undefined, {
			minimumFractionDigits,
			maximumFractionDigits: 2
		});
	}
	static trimValue(text, maxLen = 1000) {
    		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
  	}
	static trimArray(arr, maxLen = 10) {
		if (arr.length > maxLen) {
			const len = arr.length - maxLen;
			arr = arr.slice(0, maxLen);
			arr.push(`${len} more...`);
		}
		return arr;
	}
	static firstUpperCase(text) {
		return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
	}

	static escapeRegex(str) {
		return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
	}

	static base64(text, mode = 'encode') {
		if (mode === 'encode') return Buffer.from(text).toString('base64');
		if (mode === 'decode') return Buffer.from(text, 'base64').toString('utf8') || null;
		throw new TypeError(`${mode} base64 mode is not supported`);
	}

  	static fetchData(url = '') {
    		return fetch(url).then(res => res.json());
  	}
  	static txfetchData(url = ''){
    		return fetch(url).then(res=>res.text());
  	}
	static streamToArray(stream) {
    		if (!stream.readable) return Promise.resolve([]);
    		return new Promise((resolve, reject) => {
      			const array = [];
      			function onData(data) {
        			array.push(data);
      			}
      			function onEnd(error) {
        			if (error) reject(error);
        			else resolve(array);
        			cleanup();
      			}
      			function onClose() {
        		resolve(array);
        		cleanup();
      			}
      			function cleanup() {
        			stream.removeListener('data', onData);
       				stream.removeListener('end', onEnd);
        			stream.removeListener('error', onEnd);
        			stream.removeListener('close', onClose);
      			}
      			stream.on('data', onData);
      			stream.on('end', onEnd);
      			stream.on('error', onEnd);
      			stream.on('close', onClose);
    		});
  	}
 	static async reactIfAble(msg, user, emoji, fallbackEmoji) {
		const dm = !msg.guild;
		if (fallbackEmoji && (!dm && !msg.channel.permissionsFor(user).has('USE_EXTERNAL_EMOJIS'))) {
			emoji = fallbackEmoji;
		}
		if (dm || msg.channel.permissionsFor(user).has(['ADD_REACTIONS', 'READ_MESSAGE_HISTORY'])) {
			try {
				await msg.react(emoji);
			} catch {
				return null;
			}
		}
		return null;
	}
}