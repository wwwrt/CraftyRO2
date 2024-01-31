<template>
    <Carousel2 />
    <div class="flex-container">
        <div class="grid-container">
            <Card v-for="product in visibleProducts" :key="product.id" :product="product" />
        </div>
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
.flex-container {
    display: flex;
    justify-content: center; /* Centrarea pe orizontală */
}

.grid-container {
    display: grid;
    grid-gap: 16px;
    /* Restul stilurilor pentru grid */
}

/* Ecrane mari - 5 carduri pe rând */
@media (min-width: 1200px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Ecrane medii - 4 carduri pe rând */
@media (min-width: 992px) and (max-width: 1199px) {
    .grid-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Ecrane mici - 3 carduri pe rând */
@media (min-width: 768px) and (max-width: 991px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Tel - 1 carduri pe rând */
@media (min-width: 576px) and (max-width: 767px) {
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }
}


</style>

