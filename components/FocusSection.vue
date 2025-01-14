<template>
  <div class="mx-7 md:w-8/12 md:max-w-[800px]">
    <div class="space-y-2">
      <h1 class="mt-12 mb-2 text-3xl">{{ sections.bigPicture.title }}</h1>
      <template v-for="(paragraph, index) in sections.bigPicture.paragraphs" :key="index">
        <p class="text-xl leading-tight">{{ paragraph }}</p>
      </template>
    </div>
    <div class="space-y-2">
      <h1 class="mt-12 mb-2 text-3xl">{{ sections.approach.title }}</h1>
      <template v-for="(paragraph, index) in sections.approach.paragraphs" :key="index">
        <p class="text-xl leading-tight">{{ paragraph }}</p>
      </template>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  interface Section {
    title: string
    paragraphs: string[]
  }
  
  interface FocusSections {
    bigPicture: Section
    approach: Section
  }
  
  const sections: FocusSections = {
    bigPicture: {
      title: 'The big picture',
      paragraphs: [
        'Within the next 40 years, we will see more urban fabric built than we have in the whole of human history. Such rapid urbanization is already occurring in most of the world—informally and without the guidance of planners, architects, or scientists, whilst further perpetuating existing structural inequities within our cities and social systems.',
        'Because of policy exclusion, social stigma, and economic forces, vulnerable populations will continue to be displaced to environmentally exposed places, as large-scale technocratic infrastructural and design interventions continue to shape our response to the climate crisis.'
      ]
    },
    approach: {
      title: 'Our approach',
      paragraphs: [
        'We aim to advance the edge of how computing, public service, planning technologies, and design can be employed in planning and urban design practice as a medium to allow the broadest set of community members to shape their own environments sustainably, equitably, and holistically with the support of computational intelligence.',
        'Our work connects traditions of participation and community design in planning with research in collaborative computing and participatory AI to offer both, a framework for incorporating user participation in the development of planning technologies, and computational tools to facilitate large scale community participation in planning with the support of large-scale modeling and civic data production.',
        'Through a growing number of partnerships with local and federal governments, non-profits and local organizations, we have—powered by open-source software—implemented this research on-the-ground in service of justice-centered computational planning and design practices.'
      ]
    }
  }
</script>