<template>
    <Carousel2 />
    <div class="grid grid-cols-3 gap-4">
        <Card v-for="product in visibleProducts" :key="product.id" :product="product" />
    </div>
    <button v-if="!allProductsShown" @click="loadMore">See More</button>
    <p v-else>Acestea sunt toate produsele</p>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Carousel2 from '/src/components/Carousel2.vue'
import Card from '/src/components/Card.vue'

const products = ref([]);

const visibleCount = ref(10);

const visibleProducts = computed(() => products.value.slice(0, visibleCount.value));

const allProductsShown = computed(() => visibleCount.value >= products.value.length);

function loadMore() {
    visibleCount.value += 10;
}

onMounted(async () => {
    try {
        const response = await fetch('./data/products.json');
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error("Failed to load products:", error);
    }
});
</script>

<style>

</style>
