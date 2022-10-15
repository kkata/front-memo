# Mac 環境構築

## dotfiles

[https://github.com/kkata/dotfiles](https://github.com/kkata/dotfiles)

## Finder

- 隠しファイルや隠しフォルダを表示  
  `defaults write com.apple.finder AppleShowAllFiles -bool true`
- .DS_Store ファイルを作らない（機能しないかも）  
  `defaults write com.apple.desktopservices DSDontWriteNetworkStores True`
- Finder にフルパスを表示する  
  `defaults write com.apple.finder _FXShowPosixPathInTitle -boolean true`
- Finder 再起動  
  `killall Finder`

## Shell

- shell の再起動  
  `exec $SHELL -l`
- ターミナルのテーマ  
  [https://github.com/KeitaNakamura/neodark.vim](https://github.com/KeitaNakamura/neodark.vim)

## Keyboard

- US 配列キーボードの日本語入力環境設定  
  ![](/tool.keyboad1.png)

- caps look キーを control キーに変更  
  システム環境設定 > キーボード > “キーボード”タブ > “修飾キー...”ボタン
  ![](/tool.keyboad3.png)

- トラックパッドをタップでドラッグできるようにする  
  システム環境設定 > アクセシビリティ > マウスとトラックパッド ＞ トラックパッドオプション
  ![](/tool.trackpad.png)

## アプリ

- [Annotate](https://apps.apple.com/jp/app/annotate-capture-and-share/id918207447) - シンプルなスクショアプリ
- [Alfred](https://www.alfredapp.com/) - ランチャー。
- [BetterSnapTool](https://apps.apple.com/jp/app/bettersnaptool/id417375580?mt=12) - Windows10 のようなウインドウ配置を可能にする
- [Charles](https://www.charlesproxy.com/) - リクエストをローカルのファイルに向けるなど
- [Clipy](https://clipy-app.com/) - クリップボードの履歴を保存
- [duet](https://ja.duetdisplay.com/) - iPad を外部ディスプレイ化する
- [Gapplin](http://gapplin.wolfrosch.com/) - SVG ビューワー
- [iStat Menus](https://bjango.com/mac/istatmenus/) - メニューバーに色々表示させる
- [Stats](https://github.com/exelban/stats) - iStat Menus のようなアプリ（無料）
- [Keyboard Cleaner](https://jan.prima.de/~jan/plok/archives/48-Keyboard-Cleaner.html) - キーボード掃除用
- [LICEcap](https://www.cockos.com/licecap/) - gif アニメーションのスクショをとる
- [Trailer](http://ptsochantaris.github.io/trailer/) - GitHub の情報をメニューバーに表示
- [PixelSnap](https://getpixelsnap.com/) - 画面上のピクセル幅 x 高さを計測
- [Quick Look plugins](https://github.com/sindresorhus/quick-look-plugins) - デフォルトでは見られないファイルもクイックルックで中身を確認できる
