<template>
  <div class="mx-7 md:w-8/12 md:max-w-[800px]">
    <h1 class="mt-12 mb-2 text-2xl md:text-3xl">Our output</h1>
    <p class="text-lg md:text-xl leading-tight">
      We believe in open source, open data, and open learning. We publish our work through multiple channels—no matter if software code, hardware manuals, computational models, or scientific publications.
    </p>
    <div class="flex space-x-2 mt-6">
      <UButton
        v-for="link in links"
        :key="link.text"
        class="my-2 py-3 px-4 md:px-6 rounded-full flex place-self-start text-md hover:bg-gray-300 hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white"
        color="black"
        :to="link.url"
        target="_blank"
      >
        {{ link.text }}
      </UButton>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import type { NavLink } from '~/types'

  const links: NavLink[] = [
    {
      text: 'Code',
      url: 'https://github.com/scalable-design-participation-lab'
    },
    {
      text: 'Models',
      url: 'https://huggingface.co/scalable-design-participation-lab'
    },
    {
      text: 'Publications',
      url: 'https://scholar.google.com/citations?user=ucUSdNMAAAAJ&hl=en'
    }
  ]
</script>