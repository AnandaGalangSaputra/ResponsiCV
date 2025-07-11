<template>
  <header
    :class="[
      'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50 transition-all duration-300',
      isHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
      <div class="text-xl font-medium text-gray-800">AG<span class="text-blue-500">Saputra</span></div>
      <ul class="flex space-x-8">
        <li v-for="item in menuItems" :key="item">
          <a 
            :href="`#${item.toLowerCase()}`" 
            class="text-gray-600 text-sm font-medium hover:text-blue-500 transition-colors duration-200"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = ['Profil', 'Pendidikan', 'Skill', 'Proyek', 'Kontak']
const isHidden = ref(false)
let lastScroll = window.scrollY

const handleScroll = () => {
  const currentScroll = window.scrollY
  isHidden.value = currentScroll > lastScroll && currentScroll > 50
  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
