<template>
    <header class="container flex items-center justify-between px-4 mx-auto mt-6"><!-- Start Header -->
        <div>
            <router-link to="/" ><img src="@/assets/img/logo.svg" alt="Logo" /></router-link>
        </div>
        <div class="flex items-center">
            <div class="hidden space-x-6 font-medium md:block">
            <router-link to="/" class="transition-colors duration-200 hover:text-emerald-700">Home</router-link>
            <router-link to="/Features" class="transition-colors duration-200 hover:text-emerald-700">Features</router-link>
            <router-link to="/Servicies" class="transition-colors duration-200 hover:text-emerald-700">Servicies</router-link>
            <router-link to="/Testimail" class="transition-colors duration-200 hover:text-emerald-700">Testimail</router-link>
            <router-link to="/Contacts" class="transition-colors duration-200 hover:text-emerald-700">Contacts</router-link>
            <router-link to="/getstarted">
                <button class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold">Get Started</button>
            </router-link>
            </div>
            <div class="md:hidden">
                <a href="#0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                </a>
            </div>
        </div>
    </header><!-- End Header -->
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>