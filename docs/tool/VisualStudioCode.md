# [Visual Studio Code](https://code.visualstudio.com/)

デフォルトで設定同期機能が追加された  
[Settings Sync in Visual Studio Code](https://code.visualstudio.com/docs/editor/settings-sync)

~~[SettingSync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)を使っていたが、プラグインを大量に入れてたら動作が不安定になったので、使用休止。しばらく手動で最小限の設定で運用。~~

## 拡張

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Copy filename](https://marketplace.visualstudio.com/items?itemName=jack89ita.copy-filename)
- [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Indent 4-to-2](https://marketplace.visualstudio.com/items?itemName=Compulim.indent4to2)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [SCSS Everywhere](https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion)
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Sublime Text Keymap and Settings Importer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [VS Code Idiomatic CSS Comments](https://marketplace.visualstudio.com/items?itemName=ryanbelisle.vscode-idiomatic-css-comments)
- [vscode\-styled\-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [テキスト校正くん](https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading)

## 設定

### ターミナルから VSCode でファイルを開けるようにする

VSCode 上で `command + shifgt + p` を押して `shell command` と入れる

![](/tool.vscode1.png)

`code` というコマンドで開けるようになる

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

### カーソル行／選択行をまるっと移動（複数行対応）

`Alt + ↑/↓`

![](/tool.vscode9.gif)

### styled-components で補完とシンタックスハイライト

以下の拡張をインストールする

[vscode\-styled\-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

### VSCode 上で保存時にフォーマッターを利用する

`command + ,` で設定タブを開いて、`formatonsave`をオン。  
いったんユーザーではなくワークスペース設定で。  
※Prettier とテキスト校正くんがうまく連携できていないかも。

![](/tool.vscode6.png)

### ESLint と Prettier を使う

#### 前提

- VSCode に[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) と[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)がインストール済み
- 保存時にフォーマット設定済み  
  .vscode/settings.json
  ```json
  {
    "editor.formatOnSave": true
  }
  ```
- プロジェクトに ESLint と Prettier がインストール済み
  ```bash
  npm install -D eslint prettier
  ```

#### 設定

`eslint-config-prettier` をインストール。

```bash
npm install -D eslint-config-prettier
```

.eslintrc.js の `extends` の最後に `prettier` を追記。

```javascript
module.exports = {
  env: {
    es6: true
  },
  extends: [
    // 省略,
    'prettier'
  ]
}
```

Prettier の設定を記述  
`.prettierrc.json`

```json
{
  "semi": false,
  "singleQuote": true
}
```

- [prettier/eslint\-config\-prettier: Turns off all rules that are unnecessary or might conflict with Prettier\.](https://github.com/prettier/eslint-config-prettier)
- [Configuration File · Prettier](https://prettier.io/docs/en/configuration.html)
- [VS Code で ESLint × Prettier のベストかも知れないプラクティス \- Qiita](https://qiita.com/iShinkai/items/6f65b042618b76525659)

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
  "cSpell.ignoreRegExpList": ["[０-９Ａ-Ｚａ-ｚぁ-んァ-ヶ亜-熙纊-黑]+"],
  "editor.minimap.enabled": false,
  "editor.fontFamily": "PlemolJP Console NF, VL ゴシック, Menlo, Monaco, 'Courier New', monospacesh",
  "editor.fontSize": 17,
  "editor.renderWhitespace": "none",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.drawBoldTextInBrightColors": false,
  "terminal.integrated.fontSize": 16,
  "files.autoGuessEncoding": true,
  "editor.wordWrap": "on",
  "files.insertFinalNewline": true,
  "editor.dragAndDrop": false,
  "editor.autoIndent": "brackets",
  "workbench.colorTheme": "Dracula Soft",
  "workbench.colorCustomizations": {
    "[Andromeda Bordered]": {
      "editor.selectionHighlightBackground": "#ffff0070",
      "editor.selectionBackground": "#00ff0040"
    }
  },
  "files.trimTrailingWhitespace": true,
  "[markdown]": {
    "files.trimTrailingWhitespace": false
  },
  "explorer.confirmDragAndDrop": false,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "css"
  },
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.fontAliasing": "auto",
  "diffEditor.ignoreTrimWhitespace": false,
  "telemetry.enableTelemetry": false,
  "telemetry.enableCrashReporter": false,
  "japanese-proofreading.textlint.外来語カタカナ表記": false,
  "japanese-proofreading.textlint.技術用語": false,
  "japanese-proofreading.textlint.全角文字と半角文字の間": false,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.tabSize": 2,
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.showWelcomeMessage": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "files.associations": {
    "*.vue": "vue"
  },
  "terminal.integrated.fontFamily": "PlemolJP Console NF",
  "debug.console.fontSize": 13,
  "extensions.ignoreRecommendations": true,
  "security.workspace.trust.untrustedFiles": "newWindow",
  "markuplint.enable": false,
  "editor.bracketPairColorization.enabled": true,
  "editor.formatOnSave": true,
  "terminal.integrated.letterSpacing": 1,
  "editor.guides.bracketPairs": true
}
```
