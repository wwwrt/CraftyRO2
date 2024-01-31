<template>
  <div>
    <header>
      <Navbar v-if="showNavbar" />
    </header>
    <router-view/>
    <Footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<script>
export default {
  computed: {
    showNavbar() {
      // definește rutele pe care navbar-ul nu ar trebui să fie afișat
      const hiddenRoutes = ['signup', 'login'];
      // verifică dacă $route și $route.name sunt definite
      if (this.$route && this.$route.name) {
        // aplică toLowerCase() doar dacă $route.name este definit, apoi verifică dacă se află în lista de rute ascunse
        return !hiddenRoutes.includes(this.$route.name.toLowerCase());
      }
      // dacă $route sau $route.name nu sunt definite, presupunem că navbar-ul trebuie afișat
      return true;
    }
  }
};
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
