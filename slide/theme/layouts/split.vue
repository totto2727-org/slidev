<template>
  <div class="split">
    <slot />
  </div>
</template>

<style>
.split {
  --at-apply: grid grid-cols-2 gap-8;

  height: 100%;
}
</style>
