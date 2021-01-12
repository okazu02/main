[![Run on Repl.it](https://repl.it/badge/github/MakeYourOwnDiscordBot/main)](https://repl.it/github/MakeYourOwnDiscordBot/main)
[![version](https://img.shields.io/badge/version-1.0-brightgreen)](https://github.com/MakeYourOwnDiscordBot/main)
# なんのためのもの？
自分のdiscordサーバー用のdiscord botが欲しい！という人向けのものです。<br>
まだ制作途中ですが、機能を選択できるセルフホスティング用botを目指しています。<br>
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
  
- [ ] 任意
- [x] 必須
</details>

repl.itでコードの読み込みが完了したら、設定に移る。<br>
`.env`ファイルを開き、以下のものを書き込む。**後ろの説明書きは削除する**。<br>
- [x] `bot token`(取得方法は[このサイト](https://dot-blog.jp/news/discord-bot-token/)を参照)<br>
**!!!注意!!!**<br>
botの設定をする際に、Intentの項目にチェックをつけること！これがないと一部の機能が使えなくなります。
<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/intent-settings.png" width=640px>

- [x] `bot prefix`(コマンドの前につけるもの)<br>
↓例
```
BOT_TOKEN = NSanjainwaoBotTOkenExamplean4122njasjn
BOT_PREFIX = !
```
次にオーナーを設定する<br>`Config`フォルダの中にある`config.js`ファイルを開く
- [ ] `name` botの名前(実行時のログに表示されるだけで、discord側で表示されることはないのでそのままでも問題ない。)
- [x] `owners`　botのオーナーのdiscord ID(ここにIDがのっている人はすべての操作を行うことができるので注意!!!!)<br><br>
↓例
```javascript
module.exports= {
name:"bot",
owners:["475304856018616340","489690595372171275"]
}
```
画面上部中央にある緑のスタートボタンを押下。<br>必要なパッケージのインストールが自動で始まるので待機。<br>右下(画面サイズや設定によって場所は変わる。)にある黒い画面に`[READY][botの名前]でログイン中`と表示されたら、botが使用できる。<br><br>
<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/console-screen.png" width="320px">

<br><br>`!ping`と送信してみよう(`!`の部分は先ほど設定した`BOT_PREFIX`に置き換え)<br><br>
<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/ping-command.png" width="320px">

## 5.常時起動させる。
このままでは、サイトを閉じたときにbotが止まってしまうので常時起動させる。
[このサイト](https://disbot.info/bot-make/repl-djs-1/#toc8)に常時起動させる方法が載っている。(リンク先の場所から読めば大丈夫)

## 6.拡張機能(制作中)
- [x] [サーバーの情報、ロール情報、ユーザー情報を表示させる拡張機能](https://github.com/MakeYourOwnDiscordBot/Info-Commands)
- [x] [evalコマンド(ユーザーにはできないdiscord設定などが行えます。)](https://github.com/MakeYourOwnDiscordBot/Eval-Command)
- [ ] 編集不要のヘルプコマンド
- [ ] 音楽再生機能
- [ ] ログ機能
