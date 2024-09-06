---
title: Cloudflare PagesとCloudflare Accessで安全にWebサイトを共有する！
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
theme: geist
colorSchema: 'dark'
fonts:
  sans: "M PLUS 2"
  mono: "M PLUS 1 Code"
lineNumbers: true
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Cloudflare Pagesと<br>Cloudflare Accessで<br>安全にWebサイトを共有する

**とっと / ![株式会社ゆめみ](/YUMEMI_yoko_WH_08.svg){.inline-img}**{.opacity-100}

---

## 自己紹介

:::div{class="grid grid-cols-[auto_1fr] items-between"}

- ニックネーム：**とっと**
- 所属： ![/YUMEMI_yoko_WH_08.svg](/YUMEMI_yoko_WH_08.svg){.inline-img}
- 職種：フロントエンドエンジニア
- 推しFW：**Remix**, **Astro**
- 推し：<tamu>棗いつき</tamu> <nakutya>藍月なくる</nakutya>
  - [布教用Playlist](https://music.youtube.com/playlist?list=PLou8tAEUf2ouel_LDAvj5fMi6Kzb2EYfM&si=yBpASHEsVbyDM-UM)

![とっとのアイコン](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8jkLUdX62rBSF0DpJbWNxeUnEqmwHsy-L0FYI_DfF7Hbv8i74385AGc5wY57nVD8LKVjh_RC1FapEinm4tcGdr5SAtjxTNAb2oPMT8fF-TjDtreQIF5zLX8PyqSsR8SSmN7qdGMvartw/s800/character_program_shutdown.png)

:::

---

## Webサイトを特定の人に向けて共有したい！

- 自分だけが使えればいい
- 社内の一部にだけ公開したい

などなど、特定範囲にだけWebサイトを共有するニーズは、常に一定存在していると思います

---

## そんなあなたに！

Cloudflare Pages + Cloudflare Accessという技術スタックがおすすめです

---

## Cloudflare Pages

- Webアプリケーション（サイト）を専門とするPaaS
- VercelやNetlify、Amplify Hosting相当のサービス
- GitHub連携、CLI経由、Zipのアップロードなどデプロイ方法は色々
- ブランチ単位でデプロイする機能もあるよ！
- SSRしない限りは完全無料
  - SSRする場合も1000万アクセスぐらいまでは無料（2024/9/5）

https://pages.cloudflare.com/

https://qiita.com/aki-y/items/900fdf0209357cb7b08e

---

## Cloudflare Access

- Cloudflare ZeroTrustの1機能
- Cloudflareでプロキシしているアプリケーションなどに様々なアクセス制限を追加できる
  - IP制限、メール認証、SAML、OpenIDConnect etc...
- 50名までは無料！
  - 小規模なチームなら十分

https://www.cloudflare.com/ja-jp/zero-trust/products/access/

https://dev.classmethod.jp/articles/cloudflareaccess-ztna/

---

## 手順

1. Cloudflare Pagesにデプロイ
1. Pagesプロジェクトの設定からアクセス制限を有効にする

おわりです！

---

## 認証掛けられるとどうなる？{.text-center}

::div{.flex.flex-col.items-center.text-center}

こんな感じ<br>
SAMLのみ有効化しています

![cloudflare-access.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/591669/82091cd5-9470-121a-9e99-22a4add2f6d5.png){.h-[18rem].mx-auto}

::

---

## 注意点

便利ですが難点か注意点があります

- Pagesの設定でアクセス制限を有効にしても、本番環境の.pages.devドメインには認証がかかりません
  - 手動で認証対象に本番環境を含める必要があります
  - 初期状態では一番上のワイルドカードサブドメインのみ対象になっているはずです
  - 2番目のサブドメイン指定なしの設定が必要です

![スクリーンショット 2024-03-28 14.46.52.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/591669/654abb09-365e-c387-7f12-5baa1647103b.png){.h-[8rem].mx-auto}

- GitHub連携するといきなりデプロイが始まるので、アクセス制限を掛ける前に公開されてしまう
  - ビルドをわざと失敗させる（ビルドコマンドを適当に設定するなど）など、工夫が必要
- Zipで公開する場合も空Zipを渡すと言った工夫をしたほうがいいでしょう

---

## 認証方法

- メール認証
- SAML、OpenIDConnect
- その他
  - IP制限
  - etc...

---

## 認証方法のおすすめ

- 最初はメール認証で検証し、良さそうならSAML、OpenIDConnectの設定を行うのがおすすめです

- AWSのIdentify CenterやCognito、GMOトラスト・ログイン、Auth0など、個人 or 少人数であれば非常に安価でSAML、OpenIDConnetを提供するサービスもあるので、連携しておくと幸せになれます

---

## 最後に

- Cloudflareはいいぞ
- 設定が容易でかつ、（SAMLやOpenIDConnect提供側が対応していれば）MFAも絡めて認証できるため、非常にセキュアに共有する事ができます
- 本記事のスコープから外れているため省略しましたが、Cloudflare Pagesも非常に魅力的なサービスです
  - サーバサイドも行けるし、ホスティングの費用がほぼかからない！
