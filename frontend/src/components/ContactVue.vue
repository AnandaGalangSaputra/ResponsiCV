<script setup>
import SectionTitle from './SectionTitle.vue'
</script>
<template>
  <footer id="kontak" class="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Let's Connect" />
      <p class="text-xl text-gray-300 mb-8">Feel free to reach out for collaborations or just a friendly chat.</p>
      <a
        href="mailto:anandagalang@gmail.com"
        class="bg-indigo-600 text-white font-medium py-3 px-8 rounded-full hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 inline-block mb-12 shadow-lg"
      >
        Send Message
      </a>
      <div class="flex justify-center space-x-8 mb-10">
        <a
          href="https://github.com/anandagalangsaputra"
          target="_blank"
          class="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="https://id.linkedin.com/"
          target="_blank"
          class="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm font-medium"
        >
          LinkedIn
        </a>
      </div>
      <p class="text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Ananda Galang Saputra. Universitas Amikom Yogyakarta.
      </p>
    </div>
  </footer>
</template>
