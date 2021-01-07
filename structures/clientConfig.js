
module.exports = {
	cooldown: 3000,//一度コマンドを使ってから同じコマンドが使えるまでの時間(ミリ秒)
	allowMention: true,//接頭辞(!とか?)の代わりにbotをメンションしてもコマンドを起動するか(true|false)
	handleEdits: true,//間違って送信したコマンドを編集して正しくした時にコマンドを起動するか(true|false)
};
