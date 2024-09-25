<template>
  <div class="cover">
    <div class="self-center">
      <slot />
    </div>
  </div>
</template>

<style>
.cover {
  --at-apply: h-full flex flex-col justify-center items-center text-center;
}

.cover h1 {
  --at-apply: text-6xl leading-[1.1];
}

.cover h1 + p {
  --at-apply: text-2xl mt-2 opacity-80;
}
</style>
