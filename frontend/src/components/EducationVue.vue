<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const educationHistory = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="max-w-4xl mx-auto">
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 relative"
        >
          <div class="flex flex-col md:flex-row gap-6 p-6 rounded-lg hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm border border-slate-700">
            <div class="md:w-1/4">
              <span class="text-emerald-400 font-medium">{{ edu.period }}</span>
            </div>
            <div class="md:w-3/4">
              <h3 class="text-2xl font-bold text-white mb-2 hover:text-emerald-400 transition-colors">
                {{ edu.institution }}
              </h3>
              <p class="text-slate-300">{{ edu.major }}</p>
            </div>
            <div class="absolute left-0 top-0 w-2 h-full bg-emerald-400 rounded-l-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#pendidikan {
  position: relative;
}

#pendidikan::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}
</style>
