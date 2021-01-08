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
<details><summary>チェックボックスの意味(クリックで展開)</summary>
  
- [ ] これは任意
- [x] これは書き込まなくてはいけない項目
</details>
repl.itでコードの読み込みが完了したら、設定に移る。<br>
`.env`ファイルを開き、以下のものを書き込む<br>
- [x] `bot token`(取得方法は[このサイト](https://dot-blog.jp/news/discord-bot-token/)を参照)<br>
- [x] `bot prefix`(コマンドの前につけるもの)<br>
- [x] `owner id`(botの全権限を持つ人のID)(2人以上の場合は`,`で区切る)<br>
↓例
```
BOT_TOKEN = NSanjainwaoBotTOkenExamplean4122njasjn
BOT_PREFIX = !
OWNERS_ID = 10356137471,75364526747247
```
次にオプションを設定する<br>`structures`フォルダの中にある`clientConfig.js`ファイルを開く
- [ ] `cooldown` コマンドを一度使ってからもう一度使える用になるまでの時間を設定する。単位はミリ秒。デフォルトは3000ミリ秒(3秒)
- [ ] `allowMention`　`true`の場合、先ほど設定した`BOT_PREFIX`の代わりに、botをメンションしてもコマンドを使えるようにする。(つまり`@bot help`でも`!help`でも動く)  メンションコマンドを使えないようにする場合は`false`に設定
- [ ] `handleEdits`　`true`の場合、一度間違えて打ったコマンドを編集して正しいコマンドにした場合にbotが反応する。反応しないようにする場合は`false`に設定。
