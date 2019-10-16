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

## submoduleのコンフリクト解消

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

## ツール
- [trailer](http://ptsochantaris.github.io/trailer/)

## 参考
- [GitHubでssh接続する手順~公開鍵・秘密鍵の生成から~ - Qiita](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)
- [Git submodule の基礎 - Qiita](
https://qiita.com/sotarok/items/0d525e568a6088f6f6bb)
