<template>
  <div class="px-7 pb-16">
    <div class="flex place-items-center justify-between">
      <div class="flex gap-2 place-items-center">
        <h1 class="text-xl md:text-2xl leading-tight text-zinc-900 dark:text-white uppercase">
          {{ title }}
        </h1>
        <img 
          src="/images/lab-logo.png" 
          alt="Scalable Design Participation Lab Logo" 
          class="hidden md:inline-block h-7 hover:animate-spin"
        >
      </div>
      <div class="flex space-x-6 md:pr-2 !place-items-center">
        <a href="https://www.northeastern.edu" target="_blank">
          <img 
            src="/images/neu-logo-text.svg" 
            alt="Northeastern University Logo" 
            class="h-11 hover:scale-105 dark:invert pr-7 md:pr-3"
          >
        </a>
      </div>
    </div>

    <div class="flex justify-between place-items-end">
      <div class="mt-12 md:mt-24 flex flex-col leading-tight">
        <a 
          v-for="link in navigationLinks" 
          :key="link" 
          :href="getLinkHref(link)" 
          class="hover:pl-2 dark:text-gray-300"
        >
          {{ link }}
        </a>
      </div>
      <address 
        class="mt-12 md:mt-24 leading-tight md:pr-2 not-italic dark:text-gray-300"
        v-html="address"
      />
    </div>
  </div>
</template>
  
<script setup lang="ts">
type NavigationLink = 'Focus' | 'Projects' | 'About' | 'Publications' | 'Contact'

const title = 'Scalable Design Participation'
const universityUrl = 'https://www.northeastern.edu'
const navigationLinks: NavigationLink[] = ['Focus', 'Projects', 'Publications', 'About', 'Contact']
const address = '271 Huntington Ave<br>Boston, MA 02115<br>United States'

const linkMap: Record<NavigationLink, string> = {
  'Focus': '#focus',
  'Projects': '#projects',
  'Publications': '#publications',
  'About': '#about',
  'Contact': '#contact'
}

const getLinkHref = (link: NavigationLink): string => {
  return linkMap[link]
}
</script>