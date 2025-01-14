<template>
  <div class="px-7 md:flex space-y-3 md:space-x-6 md:space-y-0">
    <div 
      v-for="(tile, index) in tiles" 
      :key="index"
      class="p-8 border border-zinc-200 dark:border-zinc-700 md:w-56 min-h-full rounded-xl"
      :class="{ 'md:pb-32': index === 0 }"
    >
      <h2 class="font-semibold text-xl mb-2 leading-tight dark:text-white" v-html="tile.title"></h2>
      <p :class="{'md:text-sm': index === 0, 'text-sm': index !== 0}" class="leading-tight dark:text-gray-300">
        {{ tile.description }}
      </p>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import type { Tile } from '~/types'
  
  const tiles: Tile[] = [
    {
      title: 'Civic <span class="md:block">Technology</span>',
      description: 'Our research explores computing interfaces that mediate new forms of community engagement between and among residents, grassroots organizations and municipal institutions. We extend practices in participatory design to the design of software and hardware—which is itself a growing part of urban infrastructure, to develop new digital platforms that enabled a large-scale community-led design process.'
    },
    {
      title: 'Collaborative <span class="md:block">Tools</span>',
      description: 'Our tools allow thousands of users to simultaneously work together in a collective deliberative planning and design process. Through online real-time, shared visualization planning and design platforms that are accessible to stakeholders, planners, and the community, we provide them with insights of the ecological impacts, solutions, and trade-offs of planning interventions in real-time.'
    },
    {
      title: 'Participatory <span class="md:block">AI Models</span>',
      description: 'Through strong community partnerships, participatory design approaches, and with the support of my collaborative computing platforms, we explore the essential role that community-engaged research has in the development of AI models to collect and produce civic data of under-represented populations in the Majority World and to contextually study resident-led issues.'
    },
    {
      title: '<span class="md:block">Geospatial Computing</span>',
      description: 'This work brings forth the potential for technology to focus on pluralism, collaboration, and transparency in the service of justice in the built environment. Our interfaces focuse on drawing as an intuitive interface between citizens, spatial data, and planning practitioners, coupled with novel computational representations, modes of interaction, and computational interfaces, to encourage public participation in data-driven analysis and design.'
    }
  ]
  </script>