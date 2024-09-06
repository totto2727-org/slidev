<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
}>();
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    class="max-w-none max-h-1lh w-auto h-1lh object-contain inline-block vertical-bottom"
  />
</template>
