<!-- App.vue -->
<template>
  <div>
    <header>
      <Navbar :selectedTab="selectedTab" @selectedTab="updateSelectedTab" />
    </header>
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/navbar.vue';
import Footer from './components/Footer.vue';

const selectedTab = ref('home');

function updateSelectedTab(tab) {
  selectedTab.value = tab;
}

const hiddenRoutes = ['signup', 'login'];

function showNavbar(routeName) {
  // Verificăm dacă routeName este definit și nu este null/undefined înainte de a apela toLowerCase()
  return routeName && !hiddenRoutes.includes(routeName.toLowerCase());
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
