# [Docker](https://www.docker.com/get-started)

Dockerで静的ページの検証環境をつくる。とりあえずローカルで確認するのに最低限の設定。

nginxとPHPが必要なので、以下を利用  
[trafex/alpine\-nginx\-php7 \- Docker Hub](https://hub.docker.com/r/trafex/alpine-nginx-php7/)

## docker-compose.yml
```yaml
version: "3.7"
services:
  web:
    image: trafex/alpine-nginx-php7
    ports:
      - 80:8080
      - 443:8443
    privileged: true
    volumes:
      - ./cert-key:/etc/nginx/ssl
      - "./nginx-server.conf:/etc/nginx/conf.d/server.conf"
      - ./:/var/www/html
```

## nginx-server.conf
```
ssi  on;
server {
    listen  8080;
}
server {
    listen  8443 ssl;

    ssl_certificate /etc/nginx/ssl/localhost+1.pem;
    ssl_certificate_key /etc/nginx/ssl/localhost+1-key.pem;
    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;

    location / {
        root /var/www/html;
    }
}
```

## SSL

[mkcert](https://github.com/FiloSottile/mkcert) を使用。

Homebrewでインストール。
```bash
$ brew install mkcert
$ mkcert -install
$ mkcert localhost 127.0.0.1
```
