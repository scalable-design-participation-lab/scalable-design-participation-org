<template>
  <div class="mx-7 pt-12">
    <img
      class="h-12 mb-10 hover:animate-bounce"
      src="/images/lab-logo.png"
      logo-alt="Scalable Design Participation Lab Logo"
    />
    <div class="px-1 md:w-6/12 md:max-w-[820px] space-y-2 text-3xl">
      <p class="dark:text-gray-200">Scalable Design Participation is a Research Lab at Northeastern University in Boston. We develop digital tools that enable large groups of people to shape their own environments.</p>
    </div>
  </div>

  <div class="mt-16 md:w-8/12 md:max-w-[1100px] px-7">
    <img :src="headerImage" alt="" class="w-full rounded-md">
  </div>
</template>

<script setup lang="ts">
const images: string[] = [
  'mexico-city.jpg',
  'new-york.jpg',
  'berlin.jpg',
  'monterrey.jpg',
  'addis-ababa.jpg',
  'freetown.jpg'
]

const headerImage = computed((): string => {
  const randomIndex = Math.floor(Math.random() * images.length)
  return `/images/cities/${images[randomIndex]}`
})
</script>