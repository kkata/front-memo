# [Visual Studio Code](https://code.visualstudio.com/)

[SettingSync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)を使っていたが、プラグインを大量に入れてたら動作が不安定になったので、使用休止。しばらく手動で最小限の設定で運用。

## 拡張

- [andromeda](https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Copy filename](https://marketplace.visualstudio.com/items?itemName=jack89ita.copy-filename)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Indent 4-to-2](https://marketplace.visualstudio.com/items?itemName=Compulim.indent4to2)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Indenticator](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [seti-icons](https://marketplace.visualstudio.com/items?itemName=qinjia.seti-icons)
- [Sublime Text Keymap and Settings Importer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings)
- [VS Code Idiomatic CSS Comments](https://marketplace.visualstudio.com/items?itemName=ryanbelisle.vscode-idiomatic-css-comments)
- [テキスト校正くん](https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading)

## 設定

### ターミナルから VSCode でファイルを開く

VSCode 上で `command + shifgt + p` を押して `shell command` と入れる

![](/tool.vscode1.png)

### Emmet で展開がショートカットキーでできない場合

`Emmet Trigger Expansion On Tab` のチェックを入れる

![](/tool.vscode2.png)

### Emmet を JSX でも使用する方法

上記設定に加えて `settings.json` に~~以下を追記~~

```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

styled-components で css の Emmet 展開ができなかったので以下に変更。

```json
{
  "emmet.includeLanguages": {
    "javascript": "css"
  }
}
```

reference  
[https://github.com/styled-components/vscode-styled-components/issues/72#issuecomment-439662986](https://github.com/styled-components/vscode-styled-components/issues/72#issuecomment-439662986)

### VSCode 上の TypeScript のバージョンをプロジェクトで使用しているバージョンと合わせる

右下のバージョン数値をクリック  
![](/tool.vscode7.png)  
![](/tool.vscode8.png)

### 括弧やタグ内を選択する

ショートカットキーを変更

`control + w` の場合  
![](/tool.vscode4.png)  
![](/tool.vscode5.gif)

### VSCode 上で保存時にフォーマッターを利用する

`command + ,` で設定タブを開いて、`formatonsave`をオン。  
いったんユーザーではなくワークスペース設定で。  
※Prettier とテキスト校正くんがうまく連携できていないかも。

![](/tool.vscode6.png)

### settings.json の開き方

`command + ,` で設定のタブを開いて右側のアイコンから開ける

![](/tool.vscode3.png)

### 現状の settings.json

```json
{
  "workbench.startupEditor": "newUntitledFile",
  "files.exclude": {
    "**/node_modules": true
  },
  "editor.minimap.enabled": false,
  "editor.fontFamily": "Ricty Diminished, Menlo, Monaco, 'Courier New', monospacesh",
  "editor.fontSize": 15,
  "editor.renderWhitespace": "none",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.drawBoldTextInBrightColors": false,
  "terminal.integrated.fontSize": 14,
  "files.autoGuessEncoding": true,
  "workbench.iconTheme": "seti",
  "editor.wordWrap": "on",
  "files.insertFinalNewline": true,
  "editor.dragAndDrop": false,
  "editor.autoIndent": "brackets",
  "workbench.colorTheme": "Andromeda Bordered",
  "workbench.colorCustomizations": {
    "[Andromeda Bordered]": {
      "editor.selectionHighlightBackground": "#ffff0070",
      "editor.selectionBackground": "#00ff0040"
    }
  },
  "breadcrumbs.enabled": false,
  "files.trimTrailingWhitespace": true,
  "[markdown]": {
    "files.trimTrailingWhitespace": false
  },
  "explorer.confirmDragAndDrop": false,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.fontAliasing": "auto",
  "diffEditor.ignoreTrimWhitespace": false,
  "telemetry.enableTelemetry": false,
  "telemetry.enableCrashReporter": false,
  "gitlens.advanced.telemetry.enabled": false,
  "japanese-proofreading.textlint.外来語カタカナ表記": false,
  "japanese-proofreading.textlint.技術用語": false,
  "japanese-proofreading.textlint.全角文字と半角文字の間": false,
  "editor.columnSelection": false,
  "editor.multiCursorModifier": "ctrlCmd"
}
```
