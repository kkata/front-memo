# Mac環境構築

## dotfiles
[https://github.com/kkata/dotfiles](https://github.com/kkata/dotfiles)

## shell & keyboad

- 隠しファイルや隠しフォルダを表示  
  `defaults write com.apple.finder AppleShowAllFiles -bool true`
- .DS_Storeファイルを作らない（機能しないかも）  
  `defaults write com.apple.desktopservices DSDontWriteNetworkStores True`
- Finder再起動  
  `killall Finder`
- shellの再起動  
  `exec $SHELL -l`
- ターミナルのテーマ  
  [https://github.com/KeitaNakamura/neodark.vim](https://github.com/KeitaNakamura/neodark.vim)

---

- US配列キーボードの日本語入力環境設定  
  ![](/tool.keyboad1.png)
  
- caps lookキーをcontrolキーに変更  
  システム環境設定 > キーボード > “キーボード”タブ > “修飾キー...”ボタン
    ![](/tool.keyboad3.png)

## アプリ
- [Quick Look plugins](https://github.com/sindresorhus/quick-look-plugins) - デフォルトでは見れないファイルもクイックルックで中身を確認できる
- [BetterSnapTool](https://apps.apple.com/jp/app/bettersnaptool/id417375580?mt=12) - Windows10のようなウインドウ配置を可能にする
- [PixelSnap](https://getpixelsnap.com/) - 画面上のピクセル幅x高さを計測
- [wappalyzer](https://www.wappalyzer.com/) - Webサイトに使用されている技術を表示
- [istatmenus](https://bjango.com/mac/istatmenus/) - メニューバーに色々表示させる
- [Clipy](https://clipy-app.com/) - クリップボードの履歴を保存
- [Keyboard Cleaner](http://jan.prima.de/~jan/plok/archives/48-Keyboard-Cleaner.html) - キーボード掃除用
- [Charles](https://www.charlesproxy.com/) - リクエストをローカルのファイルに向けるなど
- [Annotate](https://apps.apple.com/jp/app/annotate-capture-and-share/id918207447) - シンプルなスクショアプリ
- [Gapplin](http://gapplin.wolfrosch.com/) - SVGビューワー
- [duet](https://ja.duetdisplay.com/) - iPadを外部ディスプレイ化する
