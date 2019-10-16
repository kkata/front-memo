# [Visual Studio Code](https://code.visualstudio.com/)

[SettingSync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)を使っていたが、プラグインを大量に入れてたら動作が不安定になったので、使用休止。しばらく手動で最小限の設定で運用。

## 拡張
- [andromeda](https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)
- [Indenticator](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator)

## 設定

### ターミナルからVSCodeでファイルを開く

VSCode上で `command + shifgt + p` を押して `shell command` と入れる

![](/tool.vscode1.png)

### Emmetで展開がショートカットキーでできない場合

`Emmet Trigger Expansion On Tab` のチェックを入れる

![](/tool.vscode2.png)

### 括弧やタグ内を選択する
ショートカットキーを変更  

`control + w` の場合  
![](/tool.vscode4.png)    
![](/tool.vscode5.gif)  

### settings.jsonの開き方

`command + ,` で設定のタブを開いて右側のアイコンから開ける

![](/tool.vscode3.png)

### 現状のsettings.json

```json
{
    "workbench.startupEditor": "newUntitledFile",
    "files.exclude": {
        "**/node_modules": true
    },
    "editor.minimap.enabled": false,
    "terminal.external.osxExec": "iTerm.app",
    "editor.fontFamily": "Ricty Diminished, Menlo, Monaco, 'Courier New', monospacesh",
    "editor.fontSize": 15,
    "editor.renderWhitespace": "all",
    "terminal.integrated.copyOnSelection": true,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.drawBoldTextInBrightColors": false,
    "terminal.integrated.fontSize": 14,
    "files.autoGuessEncoding": true,
    "workbench.iconTheme": "seti",
    "editor.wordWrap": "on",
    "files.insertFinalNewline": true,
    "editor.dragAndDrop": false,
    "editor.autoIndent": false,
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
    "emmet.triggerExpansionOnTab": true
}

```
