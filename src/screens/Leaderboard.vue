<script setup>
import Users from '/src/components/Users.vue'
</script>

<style>

</style>

<template>
        <div class="tracking-in-contract flex mt-8 mb-8 text-[2rem] md:text-[3rem] lg:text-[4rem] justify-center text-center text-[#d4a373] hover: font-bold ">Collect Points and GET IN TOP!</div>

    <div class="bg-[#d4a373] shadow-md rounded-md overflow-hidden max-w-lg mx-auto my-16">
        <div class="bg-[#e7c8a0] py-2 px-4 flex justify-center">
            <h2 class="text-xl font-semibold text-[#826a48]">Top Users</h2>
        </div>
        <ul class="divide-y divide-gray-200">

        <Users />
        </ul>
    </div>
</template>
