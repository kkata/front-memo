# [Docker](https://www.docker.com/get-started)

Docker で静的ページ確認用のローカルサーバをたてる。nginx で SSI を使うだけの最低限の設定。

## docker-compose.yml

```yaml
version: '3'
services:
  web:
    image: nginx:alpine
    ports:
      - 8888:80
    privileged: true
    volumes:
      - './:/usr/share/nginx/html'
      - './nginx-server.conf:/etc/nginx/conf.d/default.conf'
```

## nginx-server.conf

```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        ssi  on;
        ssi_last_modified on;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}

```

## WordPress 用の docker-compose.yml

ディレクトリ構成

```
.
├── db_data
└── htdocs
```

docker-compose.yml

```
version: "3"

services:
  db:
    image: mysql:5.7
    volumes:
      - ./db_data:/var/lib/mysql
    environment:
      MYSQL_USER: root
      MYSQL_DATABASE: wordpress
      MYSQL_PASSWORD: root
      MYSQL_ROOT_PASSWORD: root
    restart: always

  wp:
    image: wordpress:latest
    volumes:
      - ./htdocs:/var/www/html
    ports:
      - "80:80"
    depends_on:
      - db
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_PASSWORD: root
      WORDPRESS_TABLE_PREFIX: "wp_"
    working_dir: "/var/www/html"
    restart: always
volumes:
  db_data: {}
```
