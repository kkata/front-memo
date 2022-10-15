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
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Indent 4-to-2](https://marketplace.visualstudio.com/items?itemName=Compulim.indent4to2)
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Sublime Text Keymap and Settings Importer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings)
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
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "files.trimTrailingWhitespace": false
  },
  "cSpell.ignoreRegExpList": ["[０-９Ａ-Ｚａ-ｚぁ-んァ-ヶ亜-熙纊-黑]+"],
  "debug.console.fontSize": 13,
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.accessibilitySupport": "off",
  "editor.autoIndent": "brackets",
  "editor.bracketPairColorization.enabled": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.dragAndDrop": false,
  "editor.fontFamily": "PlemolJP Console NF, VL ゴシック, Menlo, Monaco, 'Courier New', monospacesh",
  "editor.fontSize": 17,
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": true,
  "editor.inlineSuggest.enabled": true,
  "editor.minimap.enabled": false,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.renderWhitespace": "none",
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "css"
  },
  "emmet.triggerExpansionOnTab": true,
  "explorer.confirmDragAndDrop": false,
  "extensions.ignoreRecommendations": true,
  "files.associations": {
    "*.vue": "vue"
  },
  "files.autoGuessEncoding": true,
  "files.exclude": {
    "**/node_modules": true
  },
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "github.copilot.enable": {
    "*": true,
    "markdown": true,
    "plaintext": true,
    "typescript": true,
    "yaml": false
  },
  "gitlens.advanced.messages": {
    "suppressLineUncommittedWarning": true
  },
  "japanese-proofreading.textlint.全角文字と半角文字の間": false,
  "japanese-proofreading.textlint.外来語カタカナ表記": false,
  "japanese-proofreading.textlint.技術用語": false,
  "material-icon-theme.showWelcomeMessage": false,
  "security.workspace.trust.untrustedFiles": "newWindow",
  "telemetry.telemetryLevel": "off",
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.drawBoldTextInBrightColors": false,
  "terminal.integrated.fontFamily": "PlemolJP Console NF",
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.letterSpacing": 1,
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.colorCustomizations": {
    "[Andromeda Bordered]": {
      "editor.selectionBackground": "#00ff0040",
      "editor.selectionHighlightBackground": "#ffff0070"
    }
  },
  "workbench.colorTheme": "Dracula Soft",
  "workbench.fontAliasing": "auto",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile"
}
```
