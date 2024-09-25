---
title: Denoはいいぞ
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

# Denoはいいぞ

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

## 何がいいのか？

- TypeScriptネイティブ
- 権限管理が必要
- 実行ファイルが1ファイルで完結
- リンターとフォーマッターが標準装備
- JSDocのサポート
- JSRネイティブ

---

## TypeScriptネイティブ

- コンパイルが不要！！！
- 型チェックもしてくれる！！！

::div{.flex.justify-center.p-12.text-3xl}

ややこしいツールチェーンを投げ捨てましょう

::

---

## 権限管理が必要

- ファイルやネットワークへのアクセスは厳し目に制限
- デフォルトでは実行できない

::div{.flex.flex-col.items-center.p-12.text-3xl}

気づいたら利用されているOSSがサプライチェーン攻撃されていて…

というのも防げるかも？

::

---

## 実行ファイルが1ファイルで完結

- package.jsonやlockファイルも不要
- Web上のスクリプトを直接実行することも可能
  - インストール不要！！！

例）ファイルサーバー

```bash
deno run --allow-net --allow-read jsr:@std/http/file-server
```

---

## リンターとフォーマッターが標準装備

```bash
deno fmt # フォーマッター
deno lint # リンター
deno check # 型チェッカー
```

---

## JSDocのサポート

- デフォルトでJSDocからドキュメントを生成できる
- 先述のファイルサーバーと合わせて公開したり
- JSDocのフォーマットやリント、型チェックもできる

::div{.py-8}

```bash
deno doc --html **/*.ts
cd docs
deno run --allow-net --allow-read jsr:@std/http/file-server
```

::

---

## JSRネイティブ

- NPM互換のレジストリ
- TSを直接アップロード
- JSDocからドキュメント生成
  - Docs.rsみたいな感じ
- 使うときはこんな感じ

::div{.py-8}

```bash
deno add jsr:@std/http
pnpx jsr add @std/http
```

::

---

## デプロイ比較動画

::div{.flex.justify-center}

<iframe width="560" height="315" src="https://www.youtube.com/embed/dzycAeRdOSM?si=oagcmSS2TA5fM3O5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
::

---

## おわり

Denoはいいぞ

他にも

- Deno Deploy
- Deno KV

などなど便利なものが色々あるので、ぜひ使ってみてください！
