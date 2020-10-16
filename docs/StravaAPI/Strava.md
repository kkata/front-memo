# Strava

Strava API(OAuth 2.0)に繋いで、データを取得するメモ

参考

- [Strava Developers](https://developers.strava.com/docs/getting-started/)
- [Strava/Withings Web API 開発 \- 準備編 ② ｜「世界のサノアツ」駆ける｜ note](https://note.com/sanoatsu/n/n4d05a6f1cb2d)

## My API アプリケーション設定

[Strava \| API](https://www.strava.com/settings/api)
ウェブサイトは `http://127.0.0.1:3000/`。  
認証コールバックドメインは `127.0.0.1:3000`。

## アクセストークン取得

`https://www.strava.com/oauth/authorize` に以下のパラメータを付与する。

- client_id
- response_type
- redirect_uri
- approval_prompt
- scope

client_id、redirect_uri は「My API アプリケーション（[https://www.strava.com/settings/api](https://www.strava.com/settings/api)）」に表示されているもの。response_type は `code`。

approval_prompt は `force` か `auto` 。

> force：毎回認証が行われます。
> auto：一度認証が通ればしばらく(?)は自動的に認証が行われます。
> [Strava の API にアクセスしてアカウント情報を取得する \- Qiita](https://qiita.com/satodayo/items/d0077936aa16b6dfd4b7#1%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%81%AE%E5%8F%96%E5%BE%97)

scope は [Strava Developers](https://developers.strava.com/docs/oauth-updates/)。今回は `activity:read_all` とした。

URL は以下のようになる。

```
https://www.strava.com/oauth/authorize?client_id=[XXXXXXX]&response_type=code&redirect_uri=http://127.0.0.1&approval_prompt=auto&scope=activity:read_all
```

これをブラウザでアクセスすると以下の画面になる。
![](/stravaAPI.strava1.png)

「許可する」をクリックすると、

![](/stravaAPI.strava2.png)

になるので、code の値を控える。

![](/stravaAPI.strava3.png)

`https://www.strava.com/api/v3/oauth/token` に以下のパラメータを付与してトークンを取得する。

- client_id
- client_secret
- code
- grant_type

client_id と client_secret はこれまでと同様。code は先ほど取得したもの。grant_type は `authorization_code` 。

POST するとアクセストークンが得られる。
![](/stravaAPI.strava4.png)

## アスリート情報取得

```
https://www.strava.com/api/v3/athletes/<自分のアスリートID>?access_token=xxxxxxxxxxxx...
```

の URL を叩く。自分のアスリート ID はトークン取得時の POST リクエストから返ってくるもの。

## アクティビティ情報取得

[Strava Developers](http://developers.strava.com/docs/reference/#api-Activities-getActivityById)

以下の URL にアクセス

```
https://www.strava.com/api/v3/activities/{id}
```

アクティビティ ID は Strava の各アクティビティの URL から取得。  
リクエストヘッダで `Authorization` キーにアクセストークン（`Bearer xxxxxxxxxxxx...`）を付与する。

![](/stravaAPI.strava5.png)

## リフレッシュトークンの利用

wip
