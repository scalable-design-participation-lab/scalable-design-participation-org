<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <UColorModeButton
    class="absolute top-8 right-6 z-20 h-12 hover:animate-spin"
  />
</template>