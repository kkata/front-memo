# [Local by Flywheel](https://localbyflywheel.com/)

最新版は [Local](https://localwp.com/) 。Local by Flywheel より高速。

WordPress のローカル環境を簡単に構築できる。

## Git 管理する場合

`.gitignore` の設定

```
.DS_Store
*.sql
npm-debug.log

# local by flywheelプロビジョンデータでいらないものignoreする
conf
logs
app/sql

# https://github.com/github/gitignore/blob/master/WordPress.gitignore の内容をlocal by flywheel用にパス変える
app/public/.htaccess
app/public/license.txt
app/public/readme.html
app/public/sitemap.xml
app/public/sitemap.xml.gz

app/public/*.log
# app/public/wp-config.php
app/public/wp-content/advanced-cache.php
app/public/wp-content/backup-db/
app/public/wp-content/backups/
app/public/wp-content/blogs.dir/
app/public/wp-content/cache/
app/public/wp-content/upgrade/
app/public/wp-content/uploads/
app/public/wp-content/wp-cache-config.php
app/public/wp-content/plugins/hello.php

backups/
# ここまで

app/public/wp-content/plugins/
app/public/wp-content/languages/

# themesの一部のみをgit管理するようにする
app/public/wp-content/themes/*
!app/public/wp-content/themes/index.php
# テーマ名は適宜変更する例(twentyseventeenのみ管理対象にしている)
# !app/public/wp-content/themes/管理したいテーマフォルダ名
!app/public/wp-content/themes/twentyseventeen

# wp-attach-devの部分はgitcloneしてきたときのフォルダ名なので適宜変える必要があるかも
# wp-attach-dev/.git
# wp-attach-dev/.gitignore
# wp-attach-dev/node_modules
```

## 注意点

### マルチサイトの構築・設定は後からはできない

最初のサイト作成時にマルチサイトを有効化する
![](/tool.flywheel1.png)

### インクルードに使う `virtual` が使用できない

代わりに `readfile` を使う

```php
<?php /* virtual("/includes/footer.inc"); */ ?>
<?php readfile("/app/public/includes/footer.inc"); ?>
```
