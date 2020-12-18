# Git

## 鍵作成

```sh
$ mkdir ~/.ssh
$ cd ~/.ssh
$ ssh-keygen -t rsa
$ pbcopy < ~/.ssh/id_rsa.pub
```

鍵の名前を変えたい場合

```sh
$ ssh-keygen -t rsa -f hogehoge
```

## マージ済みのローカルブランチを削除

develop, master, preview ブランチは除外。

```sh
$ git branch --merged|egrep -v '\*|develop|master|preview'|xargs git branch -d
```

## ローカルで GitHub の Files Changed

[ローカルで GitHub の Files Changed 的な表示をする - Qiita](https://qiita.com/small-teton/items/c795f8eed822a27d02a4)

```sh
# 派生元ブランチ名から分岐点となったコミットのハッシュ値を調べる
$ git show-branch --merge-base (派生元ブランチ名) HEAD
# 変更ファイルを列挙
$ git diff --name-status (分岐元ハッシュ値) HEAD
```

### 差分を保存する

（調査中）

```sh
$ git archive HEAD `git diff --name-only (分岐元ハッシュ値) HEAD --diff-filter=d` -o ~/Downloads/archive.zip
```

#### `git archive` で zip ファイルを作成すると各ファイルに実行属性が付与される

属性を維持する場合は `tar` で作成する

```sh
$ git archive HEAD `git diff --name-only (分岐元ハッシュ値) HEAD --diff-filter=d` -o ~/Downloads/archive.tar
```

[Git リポジトリの内容を zip ファイルにする - Qiita](https://qiita.com/usamik26/items/9a2d14aea30cb01a60c6)

#### ファイル一覧を取得する

Github の Files changed ページで、ブラウザのコンソールで以下。

```
[...document.querySelectorAll('.file-info>a')].map(x => x.title)
```

[GitHub の Pull Request の差分から変更されたファイル名一覧を抜き出す](https://mseeeen.msen.jp/extract-diff-file-names-from-github-pull-request/)

#### テキストファイルに記載したファイル一覧をコピーする

`rsync` をつかう

```sh
$ cat /tmp/kopi_suru_yatsura.txt
hoge.txt
fuga.html
piyo.js

$ rsync -av --files-from=/tmp/kopi_suru_yatsura.txt /path/to/src /path/to/dest/
```

[テキストファイルに記載したファイルをコピーする | ハックノート](https://hacknote.jp/archives/28858/)

#### ファイル数をカウントする

`.` から始まるファイル名は除外してカウント

```sh
$ find . -type f ! -name ".*" | wc -l
```

## submodule のコンフリクト解消

こうなった場合

```git
Unmerged paths:
  (use "git add <file>..." to mark resolution)

  both modified:   submodule_dir
```

`git diff` はこのよう

```git
- Subproject commit 70d142c96846eba03404873823ca251c3c6be242
- Subproject commit 49e9717de5f7293cb0aec4a42a31a3c595a39b19
++Subproject commit 0000000000000000000000000000000000000000
```

解消方法

```git
git reset branch_name -- submodule_dir
git commit
```

## 参考

- [GitHub で ssh 接続する手順~公開鍵・秘密鍵の生成から~ - Qiita](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)
- [Git submodule の基礎 - Qiita](https://qiita.com/sotarok/items/0d525e568a6088f6f6bb)
