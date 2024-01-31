<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}
</script>

<style>
li {
  position: relative; /* Setează poziția relativă pentru elementul părinte */
}

#dropdown {
  position: absolute; 
  top: 60%; 
  left: 15.8rem;
  transform: translateY(0.5rem); /* decalaj față de titlu */
}
</style>

<template>
    <nav class="relative px-4  flex justify-between items-center bg-white bg-opacity-30 ">

        <img src="/images/LogoCraftyRO.png" class="w-28">

        <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-[#d4a373] p-3">
                <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>


        </div>
        <ul class="hidden lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
                <RouterLink class="text-3xl text-[#d4a373] hover:bg-[#d4a373] hover:text-[#faedcd] rounded p-2 font-bold"
                    :to="{ name: 'home' }">Home</RouterLink>
            </li>


            <li @click="toggleDropdown">
                <a
                    class="cursor-pointer text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1">Shop</a>
            </li>
            <!-- Dropdown menu -->
            <div v-if="isDropdownOpen" id="dropdown"
                class="z-10 border border-[#d4a373] bg-[#faedcd] divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul class="flex items-center flex-col py-2 text-sm text-[#faedcd] dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton">
                    <li>
                        <RouterLink
                            class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                            :to="{ name: 'shop' }">Shop</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                            :to="{ name: 'supplies' }">CraftySupplies</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                            :to="{ name: 'learn' }">Learn</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                            :to="{ name: 'categories' }">Categories</RouterLink>
                    </li>
                </ul>
            </div>

            <li>
                <RouterLink class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                    :to="{ name: 'exhibition' }">Exhibition</RouterLink>
            </li>
            <li>
                <RouterLink class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                    :to="{ name: 'leaderboard' }">Leaderboard</RouterLink>
            </li>
            <li>
                <RouterLink class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                    :to="{ name: 'about' }">About Us</RouterLink>
            </li>
            <li>
                <RouterLink class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                    :to="{ name: 'points' }">Points</RouterLink>
            </li>
            <li>
                <RouterLink class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                    :to="{ name: 'vip' }">VIP</RouterLink>
            </li>
            <li>
                <RouterLink class="text-lg text-[#d4a373] font-bold hover:text-[#faedcd] hover:bg-[#d4a373] rounded p-1"
                    :to="{ name: 'profile' }">MyProfile</RouterLink>
            </li>
        </ul>
        <RouterLink
            class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-[#faedcd] hover:bg-[#d4a373] hover:text-[#faedcd] text-sm text-[#d4a373] font-bold  rounded-xl transition duration-700"
            :to="{ name: 'signup' }">Sign Up</RouterLink>
        <RouterLink
            class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-[#faedcd] hover:bg-[#d4a373] hover:text-[#faedcd] text-sm text-[#d4a373] font-bold  rounded-xl transition duration-700"
            :to="{ name: 'login' }">Log In</RouterLink>
    </nav>
    <div class="navbar-menu relative z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-[#faedcd] opacity-25"></div>
        <nav
            class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#e7c8a0] border-r overflow-y-auto">
            <div class="flex items-center mb-8">
                <a class="mr-auto text-3xl font-bold leading-none" href="#">

                </a>
                <button class="navbar-close">

                </button>
            </div>
            <div>
                <ul>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'home' }">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-lg font-semibold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'shop' }">Shop</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'exhibition' }">Exhibition</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'leaderboard' }">Leaderboard</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'learn' }">Learn</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'supplies' }">CraftySupplies</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'categories' }">Categories</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'about' }">About Us</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'points' }">Points</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'vip' }">VIP</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            class="block p-4 text-3xl font-bold text-[#faedcd] hover:bg-[#faedcd] hover:text-[#e7c8a0] rounded duration-500"
                            :to="{ name: 'profile' }">My Profile</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <div class="pt-6">
                    <RouterLink
                        class="block px-4 py-3 mb-3 leading-loose text-sm font-bold text-center  bg-[#faedcd] hover:bg-[#d4a373] hover:text-[#faedcd] text-[#d4a373]  rounded-xl duration-700"
                        :to="{ name: 'signup' }">Sign up</RouterLink>
                    <RouterLink
                        class="block px-4 py-3 mb-3 leading-loose text-sm font-bold text-center  bg-[#faedcd] hover:bg-[#d4a373] hover:text-[#faedcd] text-[#d4a373]  rounded-xl duration-700"
                        :to="{ name: 'login' }">Log In</RouterLink>
                </div>
                <p class="my-4 text-sm fold-bold text-center text-[#faedcd]">
                    <span>©CraftyRO 2024. All rights reserved.</span>
                </p>
            </div>
        </nav>
    </div>
</template>