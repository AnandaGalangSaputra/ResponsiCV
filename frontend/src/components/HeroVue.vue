<template>
  <section class="hero min-h-screen flex items-center justify-center">
    <div id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1
          class="text-6xl font-bold text-white mb-4 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Hi, I'm <span class="name">Ananda Galang Saputra</span>
        </h1>
        <p class="text-xl text-gray-200 mb-8 animate-slide-in-left" style="animation-delay: 400ms">
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <a
          href="#kontak"
          class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-block animate-slide-in-left"
          style="animation-delay: 600ms"
        >
          Hubungi Saya
        </a>
      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
        <img src='https://i1.sndcdn.com/artworks-000559607073-jb2kld-t500x500.jpg' alt="" class="profile-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://png.pngtree.com/background/20211217/original/pngtree-modern-simple-abstract-orange-vector-background-picture-image_1598027.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px;
}

.profile-image {
  width: 400px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.name {
  background: linear-gradient(to right, #ff6b6b, #ff8e53);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}
</style>
