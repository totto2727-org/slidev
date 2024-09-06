---
title: Cloudflare PagesとCloudflare Accessで安全にWebサイトを共有する！
author: '@totto2727'
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
htmlAttrs:
  lang: ja
# Theme
theme: geist
fonts:
  sans: "M PLUS 2"
  mono: "M PLUS 1 Code"
transition: slide-left
lineNumbers: true
# Feature
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

![とっとのアイコン](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8jkLUdX62rBSF0DpJbWNxeUnEqmwHsy-L0FYI_DfF7Hbv8i74385AGc5wY57nVD8LKVjh_RC1FapEinm4tcGdr5SAtjxTNAb2oPMT8fF-TjDtreQIF5zLX8PyqSsR8SSmN7qdGMvartw/s800/character_program_shutdown.png){.w-[20rem].mx-auto}

:::

---

## Webサイトを<br>特定の人にだけ共有したい！

- 自分だけが使えればいい
- 社内外の一部にだけ公開したい

でもBasic認証をアプリに実装したり、VPN前提のIP制限はちょっと...

---

## そんなあなたに！{.text-center}

::div{class="flex flex-col items-center text-center text-[3em] [&>*]-m-0"}

**Cloudflare Pages**{.text-orange-300}

\+

**Cloudflare Access**{.text-orange-300}

::

---

## Cloudflare Pages

- Webアプリケーション（サイト）のホスティングサービス
  - GitHub連携、CLI経由、Zipで簡単デプロイ
  - ブランチプレビューもあり
- 静的アセットの配信は完全無料！！！
  - SSRする場合も1000万アクセスぐらいまでは無料（2024/9/5）

<https://pages.cloudflare.com/>

<https://qiita.com/aki-y/items/900fdf0209357cb7b08e>

---

## Cloudflare Access

- Cloudflareで管理しいるドメインに認証認可を追加する機能
  - IP制限、メール認証、SAML、OpenIDConnect etc...
- 50名までは無料！
  - 個人開発や小規模なチームなら十分

https://www.cloudflare.com/ja-jp/zero-trust/products/access/

https://dev.classmethod.jp/articles/cloudflareaccess-ztna/

---

## 認証認可の設定手順

1. Cloudflare Pagesにデプロイ
1. Pagesプロジェクトの設定からアクセス制限を有効にする

おわりです！

---

## 認証画面{.text-center}

::div{.flex.flex-col.items-center.text-center}

SAMLのみ有効化しています

![cloudflare-access.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/591669/82091cd5-9470-121a-9e99-22a4add2f6d5.png){.h-[18rem].mx-auto}

::

---
class: text-center flex flex-col items-center justify-center h-full m-0
---

## 注意点

---

## 本番環境の.pages.devは対象外

- デフォルトでは本番環境の.pages.devドメインは認証の対象外
  - 手動で認証対象に本番環境を含める必要があり
  - 初期状態では一番上のワイルドカードサブドメインのみ対象
  - 2番目のサブドメイン指定なしを追加しましょう

![スクリーンショット 2024-03-28 14.46.52.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/591669/654abb09-365e-c387-7f12-5baa1647103b.png){.h-[8rem].mx-auto}

---

## いきなりデプロイされちゃった

- GitHub連携するといきなりデプロイが始まる
  - アクセス制限を掛ける前に公開されてしまう恐れ
- ビルドをわざと失敗させるなど、工夫が必要
  - Zipで公開する場合も空Zipを渡すと言った工夫が必要

---

## 認証方法

- メール認証
- SAML、OpenIDConnect
- その他
  - IP制限
  - etc...

---

## 認証方法のオススメ

- 最初はメール認証がオススメ
- 本格的に運用するならSAML、OpenIDConnect

- 個人開発で使うなら…
  - AWSのIdentify Center
  - Cognito
  - GMOトラスト・ログイン
  - Auth0
  - etc...

---

## 最後に

- Cloudflareはいいぞ
- 設定が容易でセキュアに共有可能

Cloudflare Pagesも魅力的なサービスです

サーバサイドも行けるし、ホスティングの費用がほぼかからない！
