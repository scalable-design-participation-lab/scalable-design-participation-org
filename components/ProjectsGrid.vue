<template>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 mx-7 md:w-8/12 md:max-w-[1200px] gap-8">
    <ProjectCard 
      v-for="project in projects" 
      :key="project.title"
      v-bind="project"
    />
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

const projects: Project[] = [
  {
    image: '/images/projects/drawing-participation.jpg',
    title: 'Drawing Participation',
    description: 'Real-time collaboration for interactive mapping participation with version control',
    tags: ['Software', '2020–today']
  },
  {
    image: '/images/projects/hurtoma.jpg',
    title: 'Drawing Participation: Гуртомá',
    description: 'Interactive mapping for residents to restore neighborhoods and rivers in Ukraine',
    tags: ['Software', '2024–today']
  },
  {
    image: '/images/projects/reblocking.jpg',
    title: 'Reblocking a Million Neighborhoods',
    description: 'Creating parcel data from satellite imagery for data-scarce environments through generative ensemble learning.',
    tags: ['Software', '2021–today']
  },
  {
    image: '/images/projects/open-sensing.jpg',
    title: 'Open Sensing',
    description: 'Open hardware and software for environmental sensing within local communities.',
    tags: ['Hardware', '2023–today']
  },
  {
    image: '/images/projects/site-allocation.jpg',
    title: 'Site Allocation',
    description: 'Identifying potential sites for community organizations through interactive optimization.',
    tags: ['Software', '2023–today']
  },
  {
    image: '/images/projects/food-for-thought.jpg',
    title: 'Food for Thought',
    description: "Interactive community outreach and engagement for NYC's Green City Force.",
    tags: ['Software', '2023–24']
  },
  {
    image: '/images/projects/local-software.jpg',
    title: 'Local Software',
    description: 'CAD and GIS plugins to seamlessly connect design tools with spatial analysis.',
    tags: ['Software', '2015–20']
  },
  {
    image: '/images/projects/painting-with-data.jpg',
    title: 'Painting with Data',
    description: 'Visually-based approach to spatial analysis and mapping, dramatically reducing the learning curve for GIS software.',
    tags: ['Software', '2015–19']
  },
  {
    image: '/images/projects/computer-map.jpg',
    title: 'Drawing out the Computer Map',
    description: 'Computing and community participation in the design of the built environment, a historic and contemporary overview.',
    tags: ['Book', '2018–today']
  }
]
</script>