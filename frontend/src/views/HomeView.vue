<script setup>
import Navbar from '@/components/NavbarVue.vue'
import Hero from '@/components/HeroVue.vue'
import Education from '@/components/EducationVue.vue'
import Skills from '@/components/SkillVue.vue'
import Projects from '@/components/ProjectsVue.vue'
import Contact from '@/components/ContactVue.vue'
</script>
<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <div v-animate-on-scroll><Education /></div>
      <div v-animate-on-scroll><Skills /></div>
      <div v-animate-on-scroll><Projects /></div>
      <div v-animate-on-scroll><Contact /></div>
    </main>
  </div>
</template>
