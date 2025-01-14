<script setup lang="ts">
import DividerLine from '~/components/DividerLine.vue';

</script>

<template>
  <div>
    <BaseHeader />
    
    <DividerLine />
    <FocusSection id="focus" />
    
    <DividerLine />
    <TilesSection />
    
    <DividerLine />
    <ProjectsGrid id="projects" />
    
    <DividerLine />
    <OutputSection id="publications" />
    
    <DividerLine />
    <AboutSection id="about" />
    
    <ContactSection id="contact" />
    
    <DividerLine />
    <BaseFooter />
  </div>
</template>