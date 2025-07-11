import '../src/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import animateOnScroll from './directives/animateOnScroll' // <-- Impor
const app = createApp(App)
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800, // durasi animasi (ms)
  once: true, // animasi hanya sekali saat masuk viewport
})
app.directive('animate-on-scroll', animateOnScroll) // <-- Daftarkan
app.use(router)

app.mount('#app')
