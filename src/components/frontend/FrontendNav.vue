<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
    <header class="w-full fixed bg-pink-500 md:bg-blue-50"><!-- Start Header -->
       <div class="container md:flex md:items-center md:justify-between px-4 py-4 mx-auto md:my-2 dark:bg-black ">

        <div class="flex items-center justify-between">
            <div>
                <router-link to="/"><img src="@/assets/img/logo.svg" alt="Logo" /></router-link>
            </div>
                <div class="md:hidden">
                    <a href="#menu" @click="toggleMenu">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </div>
            </div>

                <div class="space-x-6 font-medium md:block">

                    <ul 
                    :class="showMenu ? 'flex' : 'hidden'"
                     class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-4 md:mt-0 text-center">
                        <li>
                            <router-link to="/" class="transition-colors duration-200 text-gray-100 md:text-black dark:text-white hover:text-emerald-700" >Home</router-link>
                        </li>
                        <li @click="toggleDropdownMenu">
                            <router-link to="/features" class="transition-colors duration-200 text-gray-100 md:text-black dark:text-white hover:text-emerald-700">Features</router-link>
                     
                            <!-- DropDown Menu -->
                            <ul 
                            v-show="show"
                            ref="target"
                            class="
                            md:absolute 
                            md:bg-white 
                            w-48 
                            mt-2 
                            mx-auto
                            bg-emerald-800
                            rounded-md 
                            md:text-start 
                            shadow-lg 
                            ring-1 
                            ring-black 
                            ring-opacity-5">
                                <li>
                                <a href="#Incredible" class="md:text-black block px-4 py-2 md:hover:bg-gray-100">Incredible</a>
                            </li>
                            <li>
                                <a href="#Fantastic" class="md:text-black block px-4 py-2 md:hover:bg-gray-100">Fantastic</a>
                            </li>
                            <li>
                                <a href="#Intelligent" class="md:text-black block px-4 py-2 md:hover:bg-gray-100">Intelligent</a>
                            </li>

                            </ul>
                       
                        </li>
                        <li>
                            <router-link to="/servicies" class="transition-colors duration-200 text-gray-100 md:text-black dark:text-white hover:text-emerald-700">Servicies</router-link>
                        </li>
                        <li><router-link to="/testimonials" class="transition-colors duration-200 text-gray-100 md:text-black dark:text-white hover:text-emerald-700">Testimonials</router-link>
                        </li>
                        <li>
                            <router-link to="/contacts" class="transition-colors duration-200 text-gray-100 md:text-black dark:text-white hover:text-emerald-700">Contacts</router-link>
                        </li>
                        <li> 
                            <router-link to="/getstarted">
                    <button 
                            class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold">????????????????????????????????????

                    </button>
                            </router-link>
                    </li>
                        <li>
                            <button class="px-4 py-2 dark:text-white text-black" @click="toggleDark()">{{isDark ? 'Light Mode' : 'Dark Mode' }}</button>
                        </li>
                    </ul>
                
                </div>
              
    </div>
    </header><!-- End Header -->
</template>

<script setup lang="ts">

import { ref } from 'vue';

// Dark Mode
import { useDark, useToggle, onClickOutside } from '@vueuse/core'


// ????????????????????????????????? 
    const showMenu = ref(true)


    // Toggle Menu
    const toggleMenu = () => showMenu.value = !showMenu.value


    // DropDown Menu
    const show = ref(false)

    // toggleDropdownMenu
    const toggleDropdownMenu = () => show.value = !show.value

    // ???????????????????????????????????????????????? Hide DropDown Mene onClickOutside
    const target = ref(null)

    onClickOutside(target, (event) => {
        
        // console.log (event) 
        show.value = false
    })


    // Dark Mode
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

</script>

<style scoped>

</style>

