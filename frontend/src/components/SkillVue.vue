<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const skills = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="skill" class="py-20 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20 text-center transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <h3 class="text-lg font-medium text-white mb-2">{{ skill.name }}</h3>
          <p class="text-gray-200 text-sm">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#skill {
  background: white;
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/background/bg3.jpg'); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.skill-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
</style>
<style scoped>
#skill {
  background: #f8f9fa;
}

.skill-card {
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #2d3748;
}

p {
  color: #718096;
}
</style>
