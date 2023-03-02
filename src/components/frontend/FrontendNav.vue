<template>
    <header class="w-full fixed bg-blue-700 md:bg-blue-50"><!-- Start Header -->
       <div class="container md:flex md:items-center md:justify-between px-4 py-4 mx-auto md:my-2">

        <div class="flex items-center justify-between">
                <div>
                    <router-link to="/" ><img src="@/assets/img/logo.svg" alt="Logo" /></router-link>
                </div>

                <div class="md:hidden">
                        <router-link to="#0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </router-link>
                    </div>
            </div>

                <div class="space-x-6 font-medium md:block">

                    <ul 
                    :class="showMenu ? 'flex' : 'hidden'"
                    class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-4 md:mt-0 text-center">
                        <li>  <router-link to="/" class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700">Home</router-link></li>
                        <li><router-link to="/features" class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700">Features</router-link></li>
                        <li><router-link to="/servicies" class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700">Servicies</router-link></li>
                        <li><router-link to="/testimonials" class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700">Testimonials</router-link></li>
                        <li><router-link to="/contacts" class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700">Contacts</router-link></li>
                        <li> <router-link to="/getstarted">
                    <button class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold">คิดถึงใครน้อ</button>
                </router-link></li>
                    </ul>
                
                </div>
              
    </div>
    </header><!-- End Header -->
</template>

<script setup lang="ts">

import { ref } from 'vue';

// Toggle Menu
    const showMenu = ref(false)

</script>

<style scoped>

</style>