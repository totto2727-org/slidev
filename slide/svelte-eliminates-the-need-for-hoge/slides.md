---
title: Svelteなら〇〇が要らない
author: "@totto2727"
favicon: "https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png"
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

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# React使いが語る<br>Svelteなら〇〇が要らない

**とっと / ![株式会社ゆめみ](/YUMEMI_yoko_WH_08.svg){.inline-img}**{.opacity-100}

[Markdown](https://github.com/totto2727-org/slidev/tree/main/slide){.absolute.bottom-[5%].right-[5%].text-md}

---

## 自己紹介

:::div{class="grid grid-cols-[auto_1fr] items-between"}

- ニックネーム：**とっと**
- 所属： ![/YUMEMI_yoko_WH_08.svg](/YUMEMI_yoko_WH_08.svg){.inline-img}
- 職種：フロントエンドエンジニア
- 推しFW：**Remix**, **Astro**, (Svelte kit?)
- 推し：<tamu>棗いつき</tamu> <nakutya>藍月なくる</nakutya>
  - [布教用Playlist](https://music.youtube.com/playlist?list=PLou8tAEUf2ouel_LDAvj5fMi6Kzb2EYfM&si=yBpASHEsVbyDM-UM)

![とっとのアイコン](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8jkLUdX62rBSF0DpJbWNxeUnEqmwHsy-L0FYI_DfF7Hbv8i74385AGc5wY57nVD8LKVjh_RC1FapEinm4tcGdr5SAtjxTNAb2oPMT8fF-TjDtreQIF5zLX8PyqSsR8SSmN7qdGMvartw/s800/character_program_shutdown.png){.w-[20rem].mx-auto}

:::

---

## まとめ

- clsxが要らない
- hoge.module.cssが要らない
- Framer Motionが要らない
- setHogeが要らない
- 状態管理ライブラリが要らない
- 依存配列が要らない
- aspidaが要らない
- Tanstack Query（SWR）が要らない

---

## clsxが要らない

```svelte
<!-- These are equivalent -->
<div class={isCool ? "cool" : ""}>...</div>
<div class:cool={isCool}>...</div>

<!-- These are equivalent -->
<div style:color="red">...</div>
<div style="color: red">...</div>
```

---

## hoge.module.cssが要らない

```svelte
<style>
.bouncy {
  animation: bounce 10s;
}

/* these keyframes are only accessible inside this component */
@keyframes bounce {
  /* ... */
}
</style>
```

しかも未使用のCSSを静的解析で検出できる！

---

### CSS変数の扱いに長けている

```svelte
<Slider
  bind:value
  min={0}
  max={100}
  --track-color="black"
  --thumb-color="rgb({r} {g} {b})"
/>
```

```svelte
<svelte-css-wrapper
  style="display: contents; --track-color: black; --thumb-color: rgb({ r } { g } { b })"
>
  <Slider
    bind:value
    min={0}
    max={100}
  />
</svelte-css-wrapper>
```

SliderコンポーネントのPropsに渡すわけではないので注意

---

### もし構造を維持したいなら（標準タグが使える場合）

```svelte
<input
  bind:value
  type="range"
  min={0}
  max={100}
  style:--track-color="black"
  style:--thumb-color="rgb({r} {g} {b})"
/>
```

---

## Framer Motionが要らない

### 表示非表示

```svelte
<script>
import { fade } from "svelte/transition";

let visible = $state(false);
</script>

<button onclick={() => visible = !visible}>toggle</button>

{#if visible}
  <div transition:fade>fades in and out</div>
{/if}
```

---

### リストのアニメーション

```svelte
<!-- When `list` is reordered the animation will run -->
{#each list as item, index (item)}
  <li animate:flip>{item}</li>
{/each}
```

---

## setHogeが要らない

```svelte
<script>
let count = $state(0);
</script>

<button onclick={() => count++}>
  clicks: {count}
</button>
```

いわゆるSignal的な実装

---

## 状態管理ライブラリが要らない

```js
export const myGlobalState = $state({
  user: {
    /* ... */
  },
  /* ... */
});
```

```svelte
<script>
import { myGlobalState } from "./state.svelte";
// ...
</script>;
```

Signalはどこでも定義可能

自然とJotaiっぽくなる

---

## 依存配列が要らない

### useMemo

```svelte
<script>
let numbers = $state([1, 2, 3]);
let total = $derived.by(() => {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
});
</script>

<button onclick={() => numbers.push(numbers.length + 1)}>
  {numbers.join(" + ")} = {total}
</button>
```

---

### useEffect

```svelte
<script>
let size = $state(50);
let color = $state("#ff3e00");

let canvas;

$effect(() => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  // this will re-run whenever `color` or `size` change
  context.fillStyle = color;
  context.fillRect(0, 0, size, size);
});
</script>

<canvas bind:this={canvas} width="100" height="100" />
```

依存に含めたくない場合は`untrack`関数を使います

---

## pathpidaが要らない

要検証（まだ自分も把握しきれてない）

```svelte
<script lang="ts">
import type { PageData } from "./$types";

let { data }: { data: PageData } = $props();
</script>
```

https://svelte.dev/docs/kit/types

---

## Tanstack Query（SWR）が要らない

```svelte
{#await promise}
  <!-- promise is pending -->
  <p>waiting for the promise to resolve...</p>
{:then value}
  <!-- promise was fulfilled or not a Promise -->
  <p>The value is {value}</p>
{:catch error}
  <!-- promise was rejected -->
  <p>Something went wrong: {error.message}</p>
{/await}
```

revalidateなどが不要であればこれで十分

更新もシンプルなものならPromiseに再代入するだけでOK

---

## 仮想DOMが要らない

真なるリアクティブ

<https://speakerdeck.com/ssssota/the-next-chapter-of-declarative-ui>

---

## 最後に

- SvelteはWeb開発に必要なものを標準で揃えているイメージ
  - Reactでちょっと欲しくユーティリティが標準機能としてあるような印象
  - 小さいアプリならReactより少ない依存で解決できる気がする
- Svelte v5のRuneでReactに近い書き心地になっている
  - 今までHookのような定義は少し癖があった
- 学習コストはそんな高くない（ライフサイクルも素直）
- Svelte kitはまだあまり触れていないが、仕組み自体はかなりシンプル
