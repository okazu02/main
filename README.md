[![Run on Repl.it](https://repl.it/badge/github/MakeYourOwnDiscordBot/main)](https://repl.it/github/MakeYourOwnDiscordBot/main)
# なんのためのもの？※制作中です。
自分のdiscordサーバー用のdiscord botが欲しい！という人向けのものです。<br>
まだ制作途中ですが、いる機能いらない機能を選択できるセルフホスティング用botを目指しています。<br>
無料で常時起動させ続けることもできるのでやってみてくださいね！<br>
プログラミングが一切わからないという人も、多少パソコンが触れれば30分程でセットアップできます。<br>
# セットアップ方法
## 1.必要な環境の構築
[repl.it](https://repl.it)でアカウント登録をする。(アカウント登録後に質問などが出てきますが、答える必要はありません。そのままタブを閉じて大丈夫です。)<br>
[uptimerbot](https://uptimerobot.com)でアカウント登録をする。<br>
## 2.コードを用意した環境に移す
[![Run on Repl.it](https://repl.it/badge/github/MakeYourOwnDiscordBot/main)](https://repl.it/github/MakeYourOwnDiscordBot/main)←ここをクリック。repl.itの画面に切り替わり、設定が始まる。**画面が再読み込みされるまで待機**
## 3.botの起動準備をする
repl.itでコードの読み込みが完了したら、設定に移る。<br>
`.env`と書かれてファイルを開き、以下のものを書き込む
・bot token
・bot prefix(コマンドの前につけるもの)
・owner id(botの全権限を持つ人のID)(2人以上の場合は`,`で区切る)
↓例
```
BOT_TOKEN = NSanjainwaoBotTOkenExamplean4122njasjn
BOT_PREFIX = !
OWNERS_ID = 10356137471,75364526747247
```
