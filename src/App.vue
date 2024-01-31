<template>
  <div>
    <header>
      <Navbar />
      <RouterView />
    </header>
    <Footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  /* footer-ul rămâne în partea de jos a paginii */
}
</style>
