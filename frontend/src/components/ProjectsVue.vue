<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const projects = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects')
    projects.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="proyek" class="py-24 bg-neutral-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group bg-white rounded-xl transition-all duration-300 hover:shadow-xl"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              alt="Project Image"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <h3 class="text-xl font-medium text-gray-900 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="text-xs px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full"
              >{{ t }}</span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Lihat Detail
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
