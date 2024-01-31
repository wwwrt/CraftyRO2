<template>
    <ul>
      <li v-for="user in users" :key="user.number" class="flex items-center py-4 px-6">
        <span class="text-[#faedcd] text-lg font-medium mr-4">{{ user.number }}.</span>
        <img class="w-12 h-12 rounded-full object-cover mr-4" :src="user.profileImage" :alt="user.name">
        <div class="flex-1">
          <h3 class="text-lg font-medium text-[#826a48]">{{ user.name }}</h3>
          <p class="text-[#faedcd] text-base">{{ user.points }} points</p>
        </div>
      </li>
    </ul>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const users = ref([]);
  
      onMounted(async () => {
        try {
          const response = await fetch('./data/leaderboard.json');
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          users.value = await response.json();
        } catch (error) {
          console.error('Error loading users:', error);
        }
      });
  
      return { users };
    }
  };
  </script>
  