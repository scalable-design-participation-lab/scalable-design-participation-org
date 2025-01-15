<template>
  <div class="border rounded-xl space-y-2 p-4 leading-tight dark:border-zinc-700 hover:scale-[0.98]">
    <img class="rounded-md" :src="image" :alt="title">
    <div class="flex space-x-1">
      <span 
        v-for="tag in tags" 
        :key="tag"
        class="mt-6 text-sm border rounded-full py-1.5 px-3 dark:border-zinc-600 dark:text-gray-300"
      >
        {{ tag }}
      </span>
    </div>
    <h2 class="pt-2 md:text-xl dark:text-white">{{ title }}</h2>
    <p class="pb-4 text-sm md:text-md dark:text-zinc-250">{{ description }}</p>
  </div>
</template>
  
<script setup lang="ts">
  import type { Project } from '~/types'
  
  defineProps<Project>()
</script>