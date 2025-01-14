<template>
    <div class="mx-7 md:w-8/12 md:max-w-[800px]">
      <h1 class="mt-12 mb-2 text-3xl">Let's talk</h1>
      <p class="text-xl leading-tight">{{ description }}</p>
      <div class="flex space-x-2 mt-6">
        <UButton
          class="my-2 py-3 px-6 rounded-full flex place-self-start hover:bg-gray-300 text-md hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white"
          color="black"
          :to="contactEmail"
        >
          Get in touch
        </UButton>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
  const description = 'We are open for collaboration and partnerships and would love to hear from you. We give global lectures about our work globally and are continuously looking for researchers, post-docs, PhD students and student co-ops with a focus on software design and development, computer vision and machine learning, computational urban science, and related fields.'
  const contactEmail = 'mailto:lab@scalabledesignparticipation.org'
</script>