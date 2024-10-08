---
title: Cloudflareを使い倒す！
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

# Cloudflareを使い倒す!

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

## Cloudflareはいいぞ{class="text-center text-6xl mt-35 font-normal text-orange-300"}

:::div{class="grid grid-cols-3 list-none justify-around text-center text-[4em]"}

**早い**

**安い**

**簡単**

:::

---

## どういうサービスがある？

筆者がよく使うものだけでも…

- Cloudflare CDN
- Cloudflare Pages
- Cloudflare Workers
- Cloudflare Access

---

## 他にも

- Cloudflare Workers
  - Cloudflare D1
  - Cloudflare KV
  - Cloudflare Queues
  - Cron Triggers
- Workers AI
- Cloudflare R2
- Cloudflare Zero Trust
- etc...

---

## 特におすすめ

### Cloudflare Pages

- 静的アセットの配信からSSRまでカバー
- ブランチプレビューあり
- **無料！！！**{class="text-orange-300"}（条件あり）

### Cloudflare Access

- 特定のドメインに認証を追加
- メール、SSO、IP制限などに対応
- **無料！！！**{class="text-orange-300"}

---

## Cloudflare Access認証画面{class="text-center"}

![Cloudflare Accessの認証画面](/cloudflare-access.png){class="h-100 object-contain mx-auto"}

---
class: "h-100%"
---

## 使用例{class="w-100% h-100% grid place-items-center m-0"}

---

## フロントエンドのホスティング

- Cloudflare Pages
- Cloudflare Access
- Remix, Astro, Qwik, etc...

ブランチプレビュー + SSR + CI/CD

Accessで閲覧できる対象を限定することも可能

[環境構築記事](https://qiita.com/totto2727/items/3b46b1053136f62ec89c) / [mizchiさんのRemix + Pages](https://zenn.dev/mizchi/articles/remix-cloudflare-pages-supabase)

---

## Web API

- Cloudflare Workers
- Cloudflare D1
- Cloudflare KV
- Hono

データベースもD1とKVでいける

Cloudflare内のスタックで全て完結

---

## 作成中のRSS Reader{class="text-center"}

![RSS Readerの構成](/rss-reader-architecture.svg){class="h-100 object-contain mx-auto"}

---

## Cloudflare WorkersのRPCモード{class="text-center"}

:::div{class="flex flex-col gap-4 items-center m-0 text-center text-[1.5em]"}

別のWorkersを<br>**インスタンスのメソッド**{class="text-orange-300"}<br>として呼び出せる機能

**TypeScriptもバリバリ効く！**

:::

---
class: "m-1vw"
---

## RPCモードのサンプルコード{class="text-center mb-4"}

::div{class="grid grid-cols-[auto_auto] gap-2 mt-0"}

```ts
// worker1.ts
import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint {
  async fetch() {
    return new Response("Hello World");
  }

  async newCounter() {
    let value = 0;
    return (increment = 0) => {
      value += increment;
      return value;
    };
  }
}
```

:::div{class="grid grid-row-[auto_auto] gap-4 [&>*]:mt-0"}

```toml
# worker2 > wrangler.toml
name = "client_worker"
main = "./src/clientWorker.js"
services = [
  {
    binding = "COUNTER_SERVICE",
    service = "counter-service"
  }
]
```

```ts
// worker2.ts
export default {
  async fetch(request, env) {
    using f = await env.COUNTER_SERVICE.newCounter();
    await f(2); // returns 2
    await f(1); // returns 3
    const count = await f(-5); // returns -2

    return new Response(count);
  },
};
```

:::
::

---

## 最後に{class="text-center"}

:::div{class="flex flex-col gap-4 items-center text-center text-[1.5em]"}

Cloudflareでできることは色々あります！

**まずは個人開発（$5/月）で<br>試してみませんか？**{class="text-orange-300"}

:::
