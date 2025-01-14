<template>
  <div class="mx-7 md:w-8/12 md:max-w-[800px]">
    <h1 class="mt-12 mb-2 text-3xl">About us</h1>
    <p class="text-xl leading-tight mb-3">
      We are 
      <span v-for="(member, index) in members" :key="member.name">
        <a 
          v-if="member.url" 
          :href="member.url" 
          target="_blank" 
          class="hover:underline"
        >{{ member.name }}↗</a>
        <span v-else>{{ member.name }}</span>{{ index < members.length - 1 ? ', ' : '.' }}
      </span>
    </p>
    <p class="text-xl leading-tight">{{ description }}</p>
  </div>
</template>
  
<script setup lang="ts">
  import type { TeamMember } from '~/types'

  const members: TeamMember[] = [
    {
      name: 'Carlos Sandoval Olascoaga',
      url: 'https://camd.northeastern.edu/people/carlos-sandoval-olascoaga/'
    },
    {
      name: 'Leonard Schrage',
      url: 'https://leonardschrage.com/'
    },
    {
      name: 'Reid Kovacs'
    },
    {
      name: 'Felipe Cordera Urrutia'
    },
    {
      name: 'Katelyn McVay',
      url: 'https://katelynrmcvay.wixsite.com/site'
    },
    {
      name: 'Demircan Tas',
      url: 'https://www.demircantas.com/'
    },
    {
      name: 'Chucho Ocampo'
    },
    {
      name: 'Dezeng Kong'
    },
    {
      name: 'Bill Ngo'
    }
  ]

  const description = 'We are located at Northeastern University in Boston, where we are affiliated with the College of Arts, Media and Design (CAMD) and the College of Computer Sciences (Khoury). Our team has a core expertise in computer science, urban planning, and architecture.'
</script>