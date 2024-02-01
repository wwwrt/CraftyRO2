<template>
    <div>
      <Carousel1 />

      <div class="flex justify-center mt-4">
      <button class="mx-auto mt-5 mb-5 block text-3xl text-[#7f5539] hover:bg-[#d4a373] hover:text-[#faedcd] rounded p-2 font-bold" @click="sortProducts('price')">Sort by Price</button>
      <button class="mx-auto mt-5 mb-5 block text-3xl text-[#7f5539] hover:bg-[#d4a373] hover:text-[#faedcd] rounded p-2 font-bold" @click="sortProducts('name')">Sort by Name</button>
    </div>

      <div class="flex-container">
        <div class="grid-container">
            <Card v-for="product in visibleProducts" :key="product.id" :product="product" @buy-product="handleBuyProduct" />
        </div>
      </div>
      <button
        v-if="!allProductsShown"
        @click="loadMore"
        class="mx-auto mt-5 mb-5 block text-3xl text-[#7f5539] hover:bg-[#d4a373] hover:text-[#faedcd] rounded p-2 font-bold"
      >
        See More
      </button>
      <p class="mt-5 mb-5 block text-center text-3xl text-[#7f5539] p-2 font-bold" v-else>
        Acestea sunt toate produsele
      </p>
  

    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import Carousel1 from '/src/components/Carousel1.vue';
  import Card from '/src/components/Card.vue';
  
  const products = ref([]);
  
  const visibleCount = ref(10);
  
  const visibleProducts = computed(() => products.value.slice(0, visibleCount.value));
  
  const allProductsShown = computed(() => visibleCount.value >= products.value.length);
  
  function loadMore() {
    visibleCount.value += 10;
  }
  
  function sortProducts(key) {
    if (key === 'price') {
      // Sortează după preț
      products.value.sort((a, b) => a.price - b.price);
    } else if (key === 'name') {
      // Sortează alfabetic după nume
      products.value.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  
  onMounted(async () => {
    try {
      const response = await fetch('./data/products.json');
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  });
  function handleBuyProduct(product) {
    console.log('Handling buy-product event:', product);
  // Logica pentru cumpărarea produsului
  console.log('Product bought:', product);
}
  </script>
  
  <style>
  .flex-container {
    display: flex;
    justify-content: center; /* Centrarea pe orizontală */
  }
  
  .grid-container {
    display: grid;
    grid-gap: 16px;
    /* Restul stilurilor pentru grid */
  }
  
  /* Ecrane mari - 4 carduri pe rând */
  @media (min-width: 1200px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  /* Ecrane medii - 3 carduri pe rând */
  @media (min-width: 992px) and (max-width: 1199px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* Ecrane mici - 2 carduri pe rând */
  @media (min-width: 768px) and (max-width: 991px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  /* Tel - 1 card pe rând */
  @media (min-width: 576px) and (max-width: 767px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  </style>
  